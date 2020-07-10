import React from "react"

const icons = {
  cancel: (
    <svg width={256} height={256} viewBox="0 0 256 256">
      <path d="M226.333333,243.190476 C221.864047,243.186542 217.579247,241.407945 214.420952,238.245714 L17.7542857,41.5790476 C11.5652675,34.9371141 11.7478862,24.5868291 18.1673577,18.1673577 C24.5868291,11.7478862 34.9371141,11.5652675 41.5790476,17.7542857 L238.245714,214.420952 C243.060571,219.241799 244.499898,226.487117 241.893307,232.782281 C239.286716,239.077445 233.146803,243.184483 226.333333,243.190476 Z" />
      <path d="M29.6666667,243.190476 C22.8531971,243.184483 16.7132839,239.077445 14.1066927,232.782281 C11.5001015,226.487117 12.9394294,219.241799 17.7542857,214.420952 L214.420952,17.7542857 C221.062886,11.5652675 231.413171,11.7478862 237.832642,18.1673577 C244.252114,24.5868291 244.434732,34.9371141 238.245714,41.5790476 L41.5790476,238.245714 C38.4207527,241.407945 34.1359526,243.186542 29.6666667,243.190476 Z" />
    </svg>
  ),
  circle: (
    <svg width={100} height={100} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" />
    </svg>
  ),
  github: (
    <svg width={256} height={256} viewBox="0 0 256 256">
      <path d="M127.97511,10 C61.1743892,10 7,64.1669619 7,130.989964 C7,184.44391 41.6629934,229.787294 89.7396072,245.785599 C95.7928191,246.899687 97.9987135,243.163778 97.9987135,239.955205 C97.9987135,237.088285 97.8947319,229.47535 97.8353139,219.381712 C64.1824269,226.690129 57.0819723,203.160589 57.0819723,203.160589 C51.5783773,189.182498 43.6460702,185.461444 43.6460702,185.461444 C32.6611619,177.959917 44.4779226,178.108462 44.4779226,178.108462 C56.6214826,178.962597 63.0089208,190.578821 63.0089208,190.578821 C73.8007206,209.065256 91.3290396,203.725061 98.2215311,200.627896 C99.3207646,192.814425 102.447638,187.481657 105.901311,184.458764 C79.0369345,181.406163 50.7910884,171.022862 50.7910884,124.661944 C50.7910884,111.456287 55.5073945,100.649633 63.246593,92.1974177 C61.9988143,89.1373892 57.8469795,76.8304296 64.4349536,60.1785266 C64.4349536,60.1785266 74.5880095,56.9253895 97.7016233,72.5820405 C107.349626,69.8933746 117.703218,68.5564689 127.989964,68.5044781 C138.269284,68.5564689 148.615448,69.8933746 158.278305,72.5820405 C181.377065,56.9253895 191.515266,60.1785266 191.515266,60.1785266 C198.118095,76.8304296 193.96626,89.1373892 192.725908,92.1974177 C200.479961,100.649633 205.159131,111.456287 205.159131,124.661944 C205.159131,171.141698 176.868721,181.369027 149.922645,184.36221 C154.260161,188.098119 158.12976,195.480809 158.12976,206.770235 C158.12976,222.939366 157.981215,235.989051 157.981215,239.955205 C157.981215,243.193487 160.164828,246.959105 166.299739,245.778172 C214.339217,229.742731 248.972501,184.429055 248.972501,130.989964 C248.972501,64.1669619 194.798112,10 127.97511,10" />
    </svg>
  ),
  menu: (
    <svg width={256} height={256} viewBox="0 0 256 256">
      <path d="M227.368421,59.2631579 L28.6315789,59.2631579 C18.341642,59.2631579 10,50.9215159 10,40.6315789 C10,30.341642 18.341642,22 28.6315789,22 L227.368421,22 C237.658358,22 246,30.341642 246,40.6315789 C246,50.9215159 237.658358,59.2631579 227.368421,59.2631579 Z" />
      <path d="M227.368421,146.210526 L28.6315789,146.210526 C18.3416423,146.210526 10.0000008,137.868884 10.0000008,127.578947 C10.0000008,117.289011 18.3416423,108.947369 28.6315789,108.947368 L227.368421,108.947368 C237.658358,108.947368 246,117.28901 246,127.578947 C246,137.868884 237.658358,146.210526 227.368421,146.210526 L227.368421,146.210526 Z" />
      <path d="M227.368421,233.157895 L28.6315789,233.157895 C18.341642,233.157895 10,224.816253 10,214.526316 C10,204.236379 18.341642,195.894737 28.6315789,195.894737 L227.368421,195.894737 C237.658358,195.894737 246,204.236379 246,214.526316 C246,224.816253 237.658358,233.157895 227.368421,233.157895 Z" />
    </svg>
  ),
  linkedin: (
    <svg width={256} height={256} viewBox="0 0 256 256">
      <path d="M10,26.9053438 C10,17.574125 17.8119687,10 27.441875,10 L228.558125,10 C238.191719,10 246,17.574125 246,26.9053438 L246,229.097422 C246,238.431406 238.191719,246 228.558125,246 L27.441875,246 C17.8128906,246 10,238.432328 10,229.100188 L10,26.9025781 L10,26.9053438 Z M81.7181875,207.500656 L81.7181875,101.252719 L46.403,101.252719 L46.403,207.500656 L81.721875,207.500656 L81.7181875,207.500656 Z M64.0679688,86.7488594 C76.3805312,86.7488594 84.0459219,78.5902656 84.0459219,68.3943281 C83.8154531,57.9660781 76.3805312,50.0351875 64.302125,50.0351875 C52.2154219,50.0351875 44.3214062,57.9660781 44.3214062,68.3934062 C44.3214062,78.5893437 51.9840312,86.7479375 63.8365781,86.7479375 L64.0652031,86.7479375 L64.0679688,86.7488594 Z M101.265625,207.500656 L136.578047,207.500656 L136.578047,148.173391 C136.578047,145.002141 136.808516,141.822594 137.741453,139.557547 C140.293203,133.210437 146.103781,126.640234 155.861828,126.640234 C168.637172,126.640234 173.750812,136.382609 173.750812,150.667062 L173.750812,207.500656 L209.062313,207.500656 L209.062313,146.581312 C209.062313,113.947859 191.642562,98.7618125 168.408547,98.7618125 C149.359844,98.7618125 140.993828,109.408547 136.345734,116.660016 L136.580813,116.660016 L136.580813,101.256406 L101.267469,101.256406 C101.728406,111.223719 101.264703,207.504344 101.264703,207.504344 L101.265625,207.500656 Z" />
    </svg>
  ),
  twitter: (
    <svg width={256} height={256} viewBox="0 0 256 256">
      <path d="M240.651341,53.2988818 C236.943869,54.9432635 233.132101,56.3310912 229.237353,57.4577972 C233.848473,52.2429756 237.3641,46.1069957 239.510171,39.392437 C239.991305,37.887371 239.492661,36.2399441 238.255568,35.255599 C237.019998,34.2704925 235.303294,34.1524929 233.942873,34.9586967 C225.671481,39.8644355 216.747665,43.3899594 207.390676,45.4515268 C197.965171,36.2414667 185.163355,31 171.929128,31 C143.993671,31 121.266184,53.7267255 121.266184,81.6614211 C121.266184,83.8615429 121.4055,86.0494841 121.681086,88.2069738 C87.0158446,85.1633451 54.788247,68.1249622 32.6576098,40.9781996 C31.8689156,40.0106027 30.6539002,39.4891206 29.4099559,39.5888493 C28.1652503,39.6862941 27.0469185,40.3882015 26.4180948,41.4669463 C21.9295417,49.1688953 19.5566076,57.9777568 19.5566076,66.9403984 C19.5566076,79.1476487 23.9149804,90.7298817 31.6138842,99.7800714 C29.2729241,98.9692999 27.0012412,97.9560258 24.8330935,96.7524297 C23.6690844,96.1045738 22.2485213,96.1144705 21.0921251,96.7775522 C19.9349676,97.4406339 19.2094603,98.660217 19.1790088,99.993232 C19.1736798,100.217812 19.1736798,100.442392 19.1736798,100.670017 C19.1736798,118.891441 28.9805896,135.296432 43.9741534,144.237758 C42.6860544,144.1091 41.3987166,143.922585 40.1197531,143.678211 C38.8012026,143.426225 37.445349,143.888327 36.5561648,144.893988 C35.665458,145.898888 35.3708396,147.299658 35.7811738,148.578621 C41.330962,165.905532 55.6195733,178.650252 72.8931941,182.535865 C58.5665185,191.509164 42.1828431,196.209355 24.9838285,196.209355 C21.3951177,196.209355 17.7858521,195.998479 14.2534766,195.580532 C12.4987081,195.371939 10.8208297,196.408052 10.2232188,198.076794 C9.62560785,199.746299 10.2589993,201.607647 11.7518848,202.564586 C33.8467414,216.731391 59.3947996,224.219419 85.6325846,224.219419 C137.21288,224.219419 169.480065,199.896272 187.46549,179.491475 C209.893029,154.048474 222.755748,120.371385 222.755748,87.0962549 C222.755748,85.7061433 222.734432,84.3023286 222.6918,82.9030815 C231.540248,76.236484 239.158456,68.1683556 245.357623,58.8951086 C246.299336,57.4867261 246.197323,55.6253774 245.106398,54.3289042 C244.016995,53.0316697 242.201323,52.6122002 240.651341,53.2988818 Z" />
    </svg>
  )
}

export default icons
