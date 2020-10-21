import React from 'react'

const getIcon = (name, color) => {
  switch (name) {
    case 'Logo':
      return (
        <>
          <path
            d="M545.092,30H120.908L274.464,325.324,181.22,429.982l4.479,3.992,91.727-102.955L329.619,431.4l-42.872,82.452-20.054-48.267-5.541,2.3L283.135,520.8l-41.05,78.949,5.323,2.767,38.731-74.487L333,640.819l46.861-112.792,38.731,74.487,5.323-2.767L382.865,520.8l21.983-52.912-5.541-2.3-20.054,48.267L336.381,431.4l52.193-100.38L480.3,433.974l4.479-3.992L391.536,325.324ZM333,259.622,133.767,36H532.233ZM528.117,49.64,387.266,320.531l-50.248-56.4ZM328.982,264.132l-50.248,56.4L137.883,49.64Zm4.018,4.51,51.3,57.584L333,424.9l-51.3-98.67ZM289.75,521.08,333,437.9l43.25,83.178L333,625.18Z"
            fill={color}
          />
        </>
      )
    case 'Logo Mark':
      return (
        <>
          <path
            d="M428.86,191.83a8.388,8.388,0,0,0-3.421-6.138c-20-11.77-40.169-23.239-60.479-34.9l-63.821,36.72V107.935a7.211,7.211,0,0,1,2.848-4.923L326.034,90.37q14.516-8.285,29-16.623,17.37-9.955,34.824-19.976L417.892,37.7l-.011-.006.01-.006-15.209-8.865L353.984.4l-.032.019h0l-116.9,67.622v7.047q0,149.172,0,298.345c0,5.095-.2,10.2.119,15.278.1,1.7,1.069,4.079,2.4,4.87,20.448,12.149,41.023,24.086,61.484,36.024l.014-.008.007,0,25.5-14.748q11.559-6.683,23.062-13.344,38.255-22.138,76.339-44.335c1.592-.929,2.893-3.811,2.9-5.788Q429.117,271.607,428.86,191.83ZM359.9,221.679c3.877,2.2,5.219,4.614,5.2,9.063-.168,51.146-.107,102.293-.107,153.44v7.19l-60.758-33.945a7.074,7.074,0,0,1-3.1-4.976V187.532C321.524,199.424,340.617,210.717,359.9,221.679Z"
            fill={color}
          />
          <path
            d="M665.86,191.83a8.388,8.388,0,0,0-3.421-6.138c-20-11.77-40.169-23.239-60.479-34.9l-63.821,36.72V107.935a7.211,7.211,0,0,1,2.848-4.923L563.034,90.37q14.516-8.285,29-16.623,17.37-9.955,34.824-19.976L654.892,37.7l-.011-.006.01-.006-15.209-8.865L590.984.4l-.032.019h0L474.057,68.038v7.047q0,149.172,0,298.345c0,5.095-.2,10.2.119,15.278.105,1.7,1.069,4.079,2.4,4.87,20.448,12.149,41.023,24.086,61.484,36.024l.014-.008.007,0,25.5-14.748q11.559-6.683,23.062-13.344,38.255-22.138,76.339-44.335c1.592-.929,2.893-3.811,2.9-5.788Q666.117,271.607,665.86,191.83ZM596.9,221.679c3.877,2.2,5.219,4.614,5.205,9.063-.168,51.146-.107,102.293-.107,153.44v7.19l-60.758-33.945a7.074,7.074,0,0,1-3.1-4.976V187.532C558.524,199.424,577.617,210.717,596.9,221.679Z"
            fill={color}
          />
          <path
            d="M191.865,191.83a8.385,8.385,0,0,0-3.421-6.138c-20-11.77-40.169-23.239-60.478-34.9-21,12.083-42,24.165-63.821,36.72V107.935a7.206,7.206,0,0,1,2.847-4.923L89.039,90.37q14.515-8.285,29-16.623,17.37-9.955,34.825-19.976L180.9,37.7l-.012-.006.01-.006-15.209-8.865L116.989.4l-.032.019h0L.062,68.038v7.047q0,149.172,0,298.345c0,5.095-.2,10.2.118,15.278.106,1.7,1.069,4.079,2.4,4.87C23.028,405.727,43.6,417.664,64.064,429.6l.014-.008.008,0q12.766-7.385,25.5-14.748,11.558-6.683,23.061-13.344,38.256-22.138,76.339-44.335c1.592-.929,2.893-3.811,2.9-5.788Q192.122,271.607,191.865,191.83ZM122.9,221.679c3.878,2.2,5.22,4.614,5.205,9.063-.168,51.146-.107,102.293-.107,153.44v7.19L67.245,357.427a7.074,7.074,0,0,1-3.1-4.976V187.532C84.529,199.424,103.622,210.717,122.9,221.679Z"
            fill={color}
          />
        </>
      )
    case 'Apple':
      return (
        <path
          d="M65.8,49.692c-0.027-4.875,2.179-8.555,6.642-11.265-2.5-3.573-6.27-5.539-11.251-5.925-4.716-.372-9.87,2.75-11.756,2.75-1.993,0-6.562-2.617-10.149-2.617C31.877,32.756,24,38.547,24,50.33a33.088,33.088,0,0,0,1.913,10.786c1.7,4.875,7.837,16.831,14.24,16.631,3.348-.08,5.712-2.378,10.069-2.378,4.224,0,6.416,2.378,10.149,2.378C66.827,77.655,72.379,66.789,74,61.9c-8.661-4.078-8.2-11.955-8.2-12.208h0ZM58.285,27.881a12.511,12.511,0,0,0,3.188-9.631,14.086,14.086,0,0,0-9.02,4.636,12.707,12.707,0,0,0-3.4,9.551C52.52,32.7,55.682,30.923,58.285,27.881Z"
          fill={color}
        />
      )
    case 'Facebook':
      return (
        <path
          d="M43.52,80V53.164H34.531V42.5H43.52V34.1C43.52,24.969,49.1,20,57.242,20a75.461,75.461,0,0,1,8.227.422v9.539H59.82c-4.43,0-5.285,2.109-5.285,5.191V42.5h10L63.16,53.164H54.535V80"
          fill={color}
        />
      )
    case 'Instagram':
      return (
        <path
          d="M50.007,34.62A15.38,15.38,0,1,0,65.387,50,15.355,15.355,0,0,0,50.007,34.62Zm0,25.379a10,10,0,1,1,10-10,10.017,10.017,0,0,1-10,10h0ZM69.6,33.991A3.587,3.587,0,1,1,66.016,30.4,3.579,3.579,0,0,1,69.6,33.991Zm10.186,3.641c-0.228-4.805-1.325-9.062-4.846-12.569s-7.764-4.6-12.569-4.846c-4.953-.281-19.8-0.281-24.75,0-4.792.228-9.049,1.325-12.569,4.832s-4.6,7.764-4.846,12.569c-0.281,4.953-.281,19.8,0,24.75,0.228,4.805,1.325,9.062,4.846,12.569s7.764,4.6,12.569,4.846c4.953,0.281,19.8.281,24.75,0,4.805-.228,9.062-1.325,12.569-4.846s4.6-7.764,4.846-12.569c0.281-4.953.281-19.784,0-24.736h0Zm-6.4,30.05a10.123,10.123,0,0,1-5.7,5.7c-3.949,1.566-13.318,1.2-17.682,1.2s-13.747.348-17.682-1.2a10.123,10.123,0,0,1-5.7-5.7c-1.566-3.949-1.2-13.318-1.2-17.682s-0.348-13.747,1.2-17.682a10.123,10.123,0,0,1,5.7-5.7c3.949-1.566,13.318-1.2,17.682-1.2s13.747-.348,17.682,1.2a10.123,10.123,0,0,1,5.7,5.7C74.957,36.267,74.6,45.636,74.6,50S74.957,63.747,73.391,67.682Z"
          fill={color}
        />
      )
    case 'Soundcloud':
      return (
        <path
          d="M28.816,50.025l0.589,6.6-0.589,6.938a0.48,0.48,0,0,1-.447.447,0.44,0.44,0,0,1-.427-0.447l-0.569-6.938,0.569-6.6a0.436,0.436,0,0,1,.427-0.427A0.487,0.487,0,0,1,28.816,50.025Zm2.174-4.632a0.523,0.523,0,0,0-.508.508L29.974,56.628l0.508,6.938a0.523,0.523,0,0,0,.508.508,0.5,0.5,0,0,0,.477-0.508l0.589-6.938L31.467,45.9A0.5,0.5,0,0,0,30.99,45.393Zm2.59-2.448a0.562,0.562,0,0,0-.569.538L32.564,56.689l0.447,6.887a0.562,0.562,0,0,0,.569.538,0.535,0.535,0,0,0,.538-0.538l0.538-6.887L34.118,43.484a0.535,0.535,0,0,0-.538-0.538h0ZM18.231,52.758a0.273,0.273,0,0,0-.254.254L17.5,56.628l0.477,3.555a0.254,0.254,0,0,0,.508,0l0.569-3.555-0.569-3.616a0.273,0.273,0,0,0-.254-0.254h0Zm2.4-2.225a0.251,0.251,0,0,0-.254.254l-0.65,5.841,0.65,5.7a0.26,0.26,0,0,0,.254.284,0.3,0.3,0,0,0,.284-0.254l0.731-5.729-0.731-5.841A0.3,0.3,0,0,0,20.629,50.533Zm2.57-1.158a0.352,0.352,0,0,0-.335.335l-0.589,6.917,0.589,6.684a0.366,0.366,0,0,0,.335.315,0.316,0.316,0,0,0,.315-0.315l0.7-6.684-0.7-6.917a0.321,0.321,0,0,0-.315-0.335h0Zm2.57-.223a0.358,0.358,0,0,0-.366.366l-0.589,7.11L25.4,63.515a0.358,0.358,0,0,0,.366.366,0.4,0.4,0,0,0,.4-0.366l0.65-6.887-0.65-7.11a0.4,0.4,0,0,0-.4-0.366h0ZM50.289,37.887a0.794,0.794,0,0,0-.427-0.142,0.934,0.934,0,0,0-.569.193,1.041,1.041,0,0,0-.335.681V38.7L48.624,56.648l0.173,3.3,0.173,3.22a0.928,0.928,0,0,0,.9.874,0.88,0.88,0,0,0,.874-0.874l0.4-6.521-0.4-18.03a0.978,0.978,0,0,0-.457-0.731h0Zm-2.712,1.554A0.893,0.893,0,0,0,47.13,39.3a0.862,0.862,0,0,0-.447.142,0.8,0.8,0,0,0-.366.681l-0.03.173L46,56.628s0,0.03.315,6.664v0.03a0.766,0.766,0,0,0,.173.477,0.871,0.871,0,0,0,.65.315,0.824,0.824,0,0,0,.569-0.254,0.7,0.7,0,0,0,.254-0.569l0.03-.681,0.315-5.952L47.974,40.122a0.911,0.911,0,0,0-.4-0.681h0ZM36.262,41.726a0.617,0.617,0,0,0-.589.62L35.225,56.628l0.447,6.826a0.6,0.6,0,0,0,1.209,0l0.508-6.826L36.881,42.346a0.636,0.636,0,0,0-.62-0.62h0Zm38.265,6.379a8.158,8.158,0,0,0-3.108.62,14.117,14.117,0,0,0-14.048-12.84,13.852,13.852,0,0,0-5.109.955,0.89,0.89,0,0,0-.792.935V63.139a0.957,0.957,0,0,0,.874.935H74.516a7.984,7.984,0,0,0,.01-15.968h0ZM44.388,41.98a0.806,0.806,0,0,0-.792.792L43.26,56.658,43.6,63.322a0.8,0.8,0,0,0,.792.762,0.754,0.754,0,0,0,.762-0.762l0.4-6.664-0.4-13.886a0.781,0.781,0,0,0-.762-0.792h0Zm-5.445-.792a0.689,0.689,0,0,0-.65.681L37.9,56.628l0.4,6.8a0.666,0.666,0,0,0,1.331,0l0.447-6.8L39.624,41.869A0.716,0.716,0,0,0,38.943,41.188Zm2.712,0.345a0.7,0.7,0,0,0-.7.7l-0.4,14.394,0.4,6.745a0.716,0.716,0,0,0,.7.7,0.7,0.7,0,0,0,.7-0.7l0.427-6.745L42.356,42.234a0.69,0.69,0,0,0-.7-0.7h0Z"
          fill={color}
        />
      )
    case 'Spotify':
      return (
        <>
          <path
            d="M65.92,68.165a2.971,2.971,0,0,1-1.666-.561c-9.717-5.855-21.022-6.1-32.187-3.815a10.055,10.055,0,0,1-1.853.4,2.424,2.424,0,0,1-2.46-2.46,2.468,2.468,0,0,1,2.118-2.616C42.624,56.3,55.658,56.548,66.776,63.2a2.633,2.633,0,0,1,1.51,2.569,2.353,2.353,0,0,1-2.367,2.4h0Z"
            fill={color}
          />
          <path
            d="M70.108,57.949a3.845,3.845,0,0,1-1.915-.654c-9.732-5.762-24.245-8.082-37.155-4.578a6.413,6.413,0,0,1-1.853.4A3.024,3.024,0,0,1,26.164,50.1a3.064,3.064,0,0,1,2.414-3.223A52.377,52.377,0,0,1,43.807,44.76c10.106,0,19.87,2.507,27.562,7.085a3.246,3.246,0,0,1,1.76,3.068A3.017,3.017,0,0,1,70.108,57.949Z"
            fill={color}
          />
          <path
            d="M74.936,46.084a3.581,3.581,0,0,1-2.009-.607c-11.087-6.618-30.91-8.206-43.742-4.625a7.4,7.4,0,0,1-2.009.4,3.594,3.594,0,0,1-3.628-3.675,3.679,3.679,0,0,1,2.71-3.722,65.264,65.264,0,0,1,18.3-2.367c11.367,0,23.28,2.367,31.985,7.443a3.656,3.656,0,0,1,2.009,3.519,3.608,3.608,0,0,1-3.613,3.628h0Z"
            fill={color}
          />
        </>
      )
    case 'Twitter':
      return (
        <path
          d="M69.861,39.816c0.032,0.444.032,0.888,0.032,1.333C69.892,54.7,59.581,70.3,40.736,70.3A28.958,28.958,0,0,1,25,65.7a21.2,21.2,0,0,0,2.475.127A20.523,20.523,0,0,0,40.2,61.453a10.266,10.266,0,0,1-9.581-7.107,12.923,12.923,0,0,0,1.935.159,10.838,10.838,0,0,0,2.7-.349A10.249,10.249,0,0,1,27.03,44.1V43.972a10.32,10.32,0,0,0,4.632,1.3A10.263,10.263,0,0,1,28.49,31.567,29.128,29.128,0,0,0,49.619,42.291a11.568,11.568,0,0,1-.254-2.348A10.257,10.257,0,0,1,67.1,32.931a20.175,20.175,0,0,0,6.5-2.475A10.22,10.22,0,0,1,69.1,36.1,20.543,20.543,0,0,0,75,34.518a22.028,22.028,0,0,1-5.139,5.3h0Z"
          fill={color}
        />
      )
    case 'YouTube':
      return (
        <path
          d="M76.351,36.715a6.911,6.911,0,0,0-4.863-4.894C67.2,30.664,50,30.664,50,30.664s-17.2,0-21.488,1.157a6.911,6.911,0,0,0-4.863,4.894C22.5,41.032,22.5,50.039,22.5,50.039s0,9.007,1.149,13.324a6.808,6.808,0,0,0,4.863,4.816C32.8,69.336,50,69.336,50,69.336s17.2,0,21.488-1.157a6.808,6.808,0,0,0,4.863-4.816C77.5,59.046,77.5,50.039,77.5,50.039S77.5,41.032,76.351,36.715Zm-31.976,21.5V41.861L58.75,50.039,44.375,58.217h0Z"
          fill={color}
        />
      )
    case 'Checkmark':
      return (
        <path
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M12.1 52.1l24.4 24.4 53-53"
        />
      )
    default:
      return <path />
  }
}

const Icon = (props) => {
  const { id = '', name, color, viewBox = '0 0 100 100', className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-labelledby={`${name.replace(/\s/g, '')}-title${id}`}
      className={className || 'icon'}
    >
      <title id={`${name.replace(/\s/g, '')}-title${id}`}>{name}</title>
      {getIcon(name, color)}
    </svg>
  )
}

export default Icon