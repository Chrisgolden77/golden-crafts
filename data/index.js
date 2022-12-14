import { getSanityClient } from '@lib/sanity';;
import * as queries from './queries';;

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getSanityClient().fetch(
    `*[_type == "${doc}" && !(_id in [${queries.homeID}, ${queries.shopID}, ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ slug }`
  );;
  return data;;
}

// Fetch all our page redirects
export async function getAllRedirects() {
  const data = await getSanityClient().fetch(
    `*[_type == "redirect"]{ from, to }`
  );;
  return data;;
}

// Fetch a static page with our global data
export async function getStaticPage(pageData, preview) {
  const query = `
  {
    "page": ${pageData},
    ${queries.site}
  }
  `;;

  const data = await getSanityClient(preview).fetch(query);;

  return data;;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
  const sanitizedSlug = slug.current ?? slug;
  const slugs = [`/${sanitizedSlug}`, sanitizedSlug, `/${sanitizedSlug}/`];
  const query = `
    {
      "page": *[_type == "page" && slug.current in ${JSON.stringify(
            slugs
          )}] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${queries.modules}
        },
        title,
        seo
      },
      ${queries.site}
    }
    `;
  const data = await getSanityClient(preview).fetch(query);

  return data;;
}

// Fetch a specific product with our global data
export async function getProduct(slug, preview) {
  const query = `
    {
      "page": *[_type == "product" && slug == "${slug}" && wasDeleted != true && isDraft != true] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${queries.modules}
        },
        "product": ${queries.product},
        title,
        seo
      },
      ${queries.site}
    }
  `;;

  const data = await getSanityClient(preview).fetch(query);;

  return data;;
}

// Fetch a specific category with our global data
export async function getCategory(slug, preview) {
  const query = `
    {
      "page": *[_type == "category" && slug == "${slug}"] | order(_updatedAt desc)[0]{
        hasTransparentHeader,
        modules[]{
          ${queries.modules}
        },
        products[wasDeleted != true && isDraft != true${
                preview?.active ? ' && _id in path("drafts.**")' : ''
              }]->${queries.product},
        title,
        seo
      },
      ${queries.site}
    }
  `;
  const data = await getSanityClient(preview).fetch(query);;

  return data;;
}

export { queries };;
