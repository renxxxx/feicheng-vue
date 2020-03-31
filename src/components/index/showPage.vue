<template>
  <div id="showPage">
    <!-- 顶部导航 -->
    <el-header class="navBar">
      <el-row class="indexNav">
        <router-link :to="{ path: '/productPage/productPage_user' }">
          <el-col :span="6" style="padding: 0;">
            <div class="grid-content bg-purple fclogo">
             <!-- <svg width="125.336" height="33.144">
                <g data-name="\u7EC4 7218" transform="translate(-360 -16)">
                  <g data-name="\u7EC4 7209">
                    <path
                      data-name="\u8DEF\u5F84 13413"
                      d="M394.146 16h-2.339a.3.3 0 00-.3.3v3.306a.3.3 0 01-.3.3h-2.961a.3.3 0 00-.3.3v2.174a.3.3 0 00.3.3h2.973a.3.3 0 01.3.3v3.745a.3.3 0 01-.3.3h-2.973a.3.3 0 00-.3.3v2.179a.3.3 0 00.3.3h2.973a.3.3 0 01.3.3v3.051a2.963 2.963 0 01-.178 1.03 7.184 7.184 0 01-2.339 3.249.286.286 0 00-.059.4l1.328 1.922a.293.293 0 00.416.079 10.01 10.01 0 003.429-4.656 5.786 5.786 0 00.357-2.021v-3.071a.3.3 0 01.3-.3h1.973a.3.3 0 00.3-.3v-2.174a.3.3 0 00-.3-.3h-1.982a.3.3 0 01-.3-.3v-3.739a.3.3 0 01.3-.3h1.982a.3.3 0 00.3-.3V20.2a.3.3 0 00-.3-.3h-1.982a.3.3 0 01-.3-.3v-3.3a.323.323 0 00-.318-.3z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13414"
                      d="M360.974 39.815h2.336a.3.3 0 00.3-.3v-6.258a.3.3 0 00-.3-.3h-2.336a.3.3 0 00-.3.3V39.5a.309.309 0 00.3.315z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13415"
                      d="M370.527 39.815h2.339a.3.3 0 00.3-.3v-6.258a.3.3 0 00-.3-.3h-2.339a.3.3 0 00-.3.3V39.5a.309.309 0 00.3.315z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13416"
                      d="M413.157 30.3h-2.795a.3.3 0 01-.3-.3V16.3a.3.3 0 00-.3-.3h-2.333a.3.3 0 00-.3.3v13.71a.3.3 0 01-.3.3h-9a.3.3 0 00-.3.3v2.179a.3.3 0 00.3.3h9a.3.3 0 01.3.3v6.142a.3.3 0 00.3.3h2.339a.3.3 0 00.3-.3v-6.156a.3.3 0 01.3-.3h2.795a.3.3 0 00.3-.3V30.6a.3.3 0 00-.306-.3z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13417"
                      d="M404.516 24.836h-4.873a.3.3 0 00-.3.3v2.18a.3.3 0 00.3.3h4.876a.3.3 0 00.3-.3v-2.18a.281.281 0 00-.303-.3z"
                      fill="#ff7800"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13418"
                      d="M404.516 18.636h-4.873a.3.3 0 00-.3.3v2.18a.3.3 0 00.3.3h4.876a.3.3 0 00.3-.3v-2.18a.292.292 0 00-.303-.3z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13419"
                      d="M379.023 17.229h-2.632a.3.3 0 00-.3.3v17.055a2.963 2.963 0 01-.178 1.03 7.265 7.265 0 01-1.249 2.179.309.309 0 00.04.416l1.744 1.565a.287.287 0 00.416-.02 10.367 10.367 0 001.8-3.13 5.785 5.785 0 00.357-2.021v-8.3a.3.3 0 01.3-.3h2.141a.3.3 0 01.3.3v13.195a.3.3 0 00.3.3h2.339a.3.3 0 00.3-.3V26.303a.3.3 0 01.3-.3h.317a.3.3 0 00.3-.3v-2.174a.3.3 0 00-.3-.3h-6.014a.3.3 0 01-.3-.3V20.3a.3.3 0 01.3-.3h6.005a.3.3 0 00.3-.3v-2.171a.3.3 0 00-.3-.3z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13420"
                      d="M373.973 17.288h-4.757a.292.292 0 01-.3-.3V16.3a.3.3 0 00-.3-.3h-2.769a.292.292 0 00-.3.3v.691a.3.3 0 01-.3.3h-4.749a.3.3 0 00-.3.3v2.18a.3.3 0 00.3.3h13.475a.3.3 0 00.3-.3v-2.185a.292.292 0 00-.3-.298z"
                      fill="#fff"
                    ></path>
                    <path
                      data-name="\u8DEF\u5F84 13421"
                      d="M371.852 21.362l-2.18-.04a.3.3 0 00-.3.258 7.322 7.322 0 01-.555 2.18.281.281 0 01-.277.178h-3.09a.3.3 0 01-.3-.3v-2a.3.3 0 00-.3-.3h-2.174a.3.3 0 00-.3.3v2.022a.3.3 0 01-.3.3H360.3a.3.3 0 00-.3.3v2.18a.3.3 0 00.3.3h4.833a.3.3 0 01.3.3v1.526a.3.3 0 01-.3.3h-4.34a.3.3 0 00-.3.3v2.18a.3.3 0 00.3.3h4.34a.3.3 0 01.3.3v7.591a.3.3 0 00.3.3h2.334a.3.3 0 00.3-.3v-7.615a.3.3 0 01.3-.3h4.955a.3.3 0 00.3-.3v-2.18a.3.3 0 00-.3-.3h-4.961a.3.3 0 01-.3-.3V27.03a.3.3 0 01.3-.3h5.49a.3.3 0 00.3-.3v-2.18a.3.3 0 00-.3-.3h-2.081a.285.285 0 01-.277-.377 12.514 12.514 0 00.337-1.9.282.282 0 00-.278-.311z"
                      fill="#fff"
                    ></path>
                  </g>
                  <path
                    d="M360 49.022h.956l.735-1.422c.147-.294.27-.588.441-.931h.025l.466.931.76 1.422h1.029l-1.642-2.917 1.544-2.819h-.956l-.686 1.348c-.123.27-.245.515-.392.858h-.05c-.172-.343-.294-.613-.441-.858l-.689-1.347h-1l1.544 2.77zm5.564 0h1.544c1.716 0 2.721-1.029 2.721-2.892a2.551 2.551 0 00-2.181-2.843 2.36 2.36 0 00-.588 0h-1.5v5.735zm.882-.735v-4.265h.515c1.225 0 1.887.686 1.887 2.108s-.662 2.157-1.887 2.157zm5.245.858a.636.636 0 00.613-.588v-.025a.607.607 0 00-.588-.637h-.025a.607.607 0 00-.613.613v.024a.581.581 0 00.564.613zm2.181-.123h.858v-2.7c0-.613-.074-1.274-.123-1.887h.049l.613 1.2 1.887 3.382h.931v-5.735h-.857v2.672c0 .613.074 1.324.123 1.912h-.025l-.613-1.225-1.915-3.354h-.931v5.735zm6 0h3.48v-.76h-2.568v-1.863h2.108v-.76h-2.108v-1.593h2.476v-.76h-3.383zm5.539 0h1.1l.76-3.186c.1-.441.172-.882.27-1.324h.059c.074.441.172.858.27 1.324l.76 3.186h1.127l1.127-5.735h-.858l-.539 2.99-.294 1.838h-.049c-.123-.613-.27-1.25-.392-1.838l-.76-2.99h-.784l-.735 2.99c-.123.613-.27 1.225-.392 1.838h-.025l-.294-1.838-.539-2.99h-.931zm7.549-5h.858c.833 0 1.275.245 1.275.931s-.441 1.029-1.275 1.029h-.858zm3.26 5l-1.4-2.426a1.609 1.609 0 001.2-1.642c0-1.25-.882-1.667-2.083-1.667h-1.878v5.735h.907v-2.328h.934l1.3 2.328zm2.034-2.328l.245-.76c.172-.613.368-1.25.539-1.912h.025c.172.637.343 1.274.539 1.912l.221.76zm2.279 2.328h.956l-1.912-5.735h-1.048l-1.912 5.735h.907l.49-1.642H400zm1.985 0h.858v-2.7c0-.613-.074-1.274-.123-1.887h.049l.588 1.2 1.912 3.382h.931v-5.735h-.858v2.672c0 .613.074 1.324.123 1.912h-.049l-.588-1.225-1.912-3.358h-.931zm6 0h.907v-1.716l.882-1.078 1.618 2.819h1l-2.083-3.529 1.789-2.206h-1l-2.181 2.721h-.025v-2.721h-.907zm5.858.123a.636.636 0 00.613-.588v-.025a.607.607 0 00-.588-.637h-.025a.623.623 0 00-.613.613v.024a.581.581 0 00.564.613zm4.412 0a2.3 2.3 0 001.789-.833l-.49-.564a1.638 1.638 0 01-1.274.613c-1 0-1.642-.833-1.642-2.206 0-1.348.686-2.181 1.667-2.181a1.525 1.525 0 011.127.515l.49-.588a2.178 2.178 0 00-1.618-.735 2.683 2.683 0 00-2.6 2.99c0 1.863 1.1 2.99 2.549 2.99zm3.088-.123h.858v-2.7c0-.613-.074-1.274-.123-1.887h.049l.613 1.2 1.912 3.382h.931v-5.735h-.858v2.672c0 .613.074 1.324.123 1.912h-.049l-.588-1.225-1.912-3.358h-.931v5.735z"
                    fill="#bfbfbf"
                  ></path>
                  <path
                    data-name="\u8DEF\u5F84 13424"
                    d="M431.615 17.5a17.952 17.952 0 003.73-.4l.254.752q-1.934.254-3.291.332v2.275h3.565v.664h-1.4v5.122h-.719v-5.117h-1.445v.479a6.939 6.939 0 01-1.436 4.667q-.234-.3-.518-.625a5.844 5.844 0 001.26-4.072zm-5.205 4.39h1.99v-.928h.7v.928h1.92v.625h-1.915v2.548q0 1.035-1 1.035-.42 0-.947-.01-.035-.321-.103-.741.566.059.889.059.459 0 .459-.5v-2.391h-1.993zm-.273-1.827h1.572q-.415-.663-.781-1.132l.527-.371q.322.391.83 1.1l-.552.4h1.289q.533-.76.978-1.51l.7.39q-.474.61-.9 1.123h1.473v.625h-5.136zm.312-2.263h2.11q-.21-.4-.479-.869l.625-.293q.3.5.566 1.006l-.327.156h2.076v.625h-4.571zm.713 5.156l.664.313q-.526 1.101-1.045 1.99a7.193 7.193 0 00-.644-.352 15.323 15.323 0 001.025-1.953zm2.813.044q.547.742.957 1.367l-.625.433a15.987 15.987 0 00-.907-1.416zm8.974 2.757a3.591 3.591 0 001.631-1.729 5.434 5.434 0 00.283-1.787h-1.523v-.625h3.018q-.234-.371-.537-.771l.557-.342q.332.41.674.9l-.361.215h3.086v.625h-4.211q-.01.469-.049.859h3.359q-.059.83-.146 1.719a1.331 1.331 0 01-1.514 1.328q-.635 0-1.387-.039a6.018 6.018 0 00-.137-.762q.82.078 1.357.1.908.039.986-.713.049-.43.088-1.006h-2.713a3.914 3.914 0 01-1.982 2.646 6.332 6.332 0 00-.479-.618zm-2.832-2.92a11.652 11.652 0 001.338-3.437h-1.191v-.635h1.3v-1.983h.693v1.982h1.162v.636h-1.163v1.152l.352-.3q.586.6.879.938l-.518.459q-.254-.332-.713-.889v5.514h-.693v-5.3a10.666 10.666 0 01-1.143 2.713q-.127-.411-.303-.85zm3.467-3.027h1.616q-.264-.488-.576-.957l.566-.322q.361.5.693 1.035l-.41.244h1.553q.342-.635.615-1.289l.713.313q-.352.576-.615.977h1.758v1.377h-.7v-.752h-4.5v.752h-.7zm.049-1.943h2.667q-.293-.449-.586-.84l.576-.371a12 12 0 01.742.967l-.4.244h2.725v.625h-5.724zm10.186 5.8h1.035v-3.516h-.954v-.645h.957v-.771h.7v.771h2.412v-.781h.7v.781h.938v.645h-.937v3.516h1.123v.645h-5.975zm-3.574-5.4h1.7q-.308-.732-.63-1.338l.6-.293q.352.586.723 1.348l-.61.283h1.636v.664h-1.8q-.01.757-.024 1.426h1.729q-.059 2.52-.146 4.375-.073 1.268-.991 1.279-.469.01-.977-.01-.055-.322-.146-.742.547.059.811.059.576 0 .605-.674.088-1.4.137-3.633h-1.046q0 3.789-1.23 5.186-.195-.264-.486-.587a6.594 6.594 0 001-3.886q.024-.757.063-2.793h-.923zm3.594.479a7.161 7.161 0 001.141-2.12l.7.186q-.186.43-.371.811h4.443v.664h-4.79a8.567 8.567 0 01-.649 1.006 5.981 5.981 0 00-.475-.548zm1.719 4.922h2.412v-.781h-2.413zm0-1.367h2.412v-.771h-2.413zm0-1.377h2.412v-.771h-2.413zm.204 3.436l.5.518a18.172 18.172 0 01-2.139 1.455 3.984 3.984 0 00-.469-.605 10.684 10.684 0 002.108-1.368zm1.523.488l.449-.508q1.026.66 2.012 1.397l-.488.586q-1.026-.84-1.973-1.474zm2.969-7.348h9.492v.8H461v2.129l.449-.625q2.236 1.318 3.75 2.373l-.576.791A41.7 41.7 0 00461 20.513v5.732h-.889V18.3h-3.857zm-27.022 18.562l4.092-.518v-5.82h.781v5.723l1.7-.215.068.732-1.768.225V39.3h-.781v-3.014l-4 .5zm-3.105-1.172q.757-.215 1.465-.42V32.3h-1.358v-.682h1.358v-1.855h.762v1.855h1.123v.682h-1.123v1.935q.552-.171 1.074-.342-.02.371-.02.752l-1.055.337v3.11q0 1.055-.947 1.084-.361.01-1.006 0-.059-.43-.137-.811a7.634 7.634 0 00.928.059q.4 0 .4-.459v-2.734q-.7.234-1.357.469zm4.15-2.021q.986.654 2.051 1.445l-.518.664q-1.025-.84-2.021-1.533zm.459-2.4q1.025.693 1.885 1.377l-.547.635a23.571 23.571 0 00-1.855-1.468zm6.68 3.945h7.1v4.824h-.742V38.7h-5.616v.557h-.742zm-1.211-1.575h2.886a7.13 7.13 0 00-.61-.9l.615-.4q.391.5.762 1.055l-.386.244h2.568a12.277 12.277 0 00.835-1.318l.762.449q-.3.371-.732.869h2.852v.7h-9.552zm.495-2.039h4.111a7.546 7.546 0 00-.479-.83l.742-.352q.283.42.605.947l-.469.235h4.077v.7H436.7zm1.458 7.2h5.615v-1.128h-5.615zm5.615-2.9h-5.615v1.1h5.615zm8.75-5.391l.781.117a16.908 16.908 0 01-.478 1.774h2.988v.664h-.614a10.707 10.707 0 01-1.25 4.561 6.257 6.257 0 002.012 1.758q-.313.43-.527.771a7.554 7.554 0 01-1.982-1.836 9.363 9.363 0 01-2.139 1.934 5.585 5.585 0 00-.557-.615 8.619 8.619 0 002.217-2.041 8.671 8.671 0 01-1.046-3.156 7.477 7.477 0 01-.43.674 7.664 7.664 0 00-.488-.625 9.556 9.556 0 001.513-3.975zm-6.289 5.635h1.484q.215-.371.42-.762l.7.225q-.156.273-.312.537h2.393v.635a4.624 4.624 0 01-1.123 1.68q.537.254 1.094.508l-.43.674q-.605-.342-1.26-.684a8.669 8.669 0 01-2.783 1.25q-.156-.312-.332-.684a7.937 7.937 0 002.415-.923q-.84-.43-1.758-.879.313-.449.605-.928h-1.113zm.107-3.359h2.246V29.8h.723v2.189h1.875v.645h-1.874v.6l.289-.334q.908.664 1.523 1.172l-.469.547q-.537-.508-1.348-1.143v1.111h-.723V33.22a9.75 9.75 0 01-2.07 1.631q-.186-.283-.42-.6a10.835 10.835 0 002.256-1.621h-2.007zm8.076.273h-1.825q-.049.127-.107.244a8.954 8.954 0 00.977 3.545 9.367 9.367 0 00.956-3.784zM447.7 36.7q.693.312 1.426.654a4.181 4.181 0 001.055-1.357h-2.033q-.224.357-.448.703zm3.047-6.65l.605.4q-.537.7-1.074 1.3-.225-.2-.527-.41.507-.601.995-1.294zm-4.15.43l.557-.381q.439.537.908 1.152l-.605.43q-.432-.639-.857-1.205zm13.936 5.439h2.012v-1.244h-2.277a7.854 7.854 0 01-1.387 4.639q-.234-.3-.527-.615a7.253 7.253 0 001.221-4.619v-3.809h5.762V33.1h-.7v-.3h-4.36v1.211h2.266v-1.026h.7v1.026h2.578v.664h-2.575v1.24h2.031v3.3h-.7v-.566h-3.34v.566h-.7zm-4.375-.986q.693-.19 1.348-.386v-2.235h-1.23v-.7h1.224v-1.869h.723v1.865h1.064v.7h-1.06v2.01q.464-.146.908-.3a6.061 6.061 0 00.059.762q-.5.161-.967.317v2.954q0 1.1-.967 1.123-.3.01-.9-.01-.039-.391-.117-.811a8.18 8.18 0 00.82.059q.439 0 .439-.5v-2.573q-.669.225-1.25.43zm8.477-4.014h-4.358v1.24h4.355zm-.059 5.645h-3.34v1.455h3.34zm2.586-2.954h4.619q.659-.972 1.182-1.934l.752.479q-.518.728-1.084 1.455h2.891v.684h-7.569v.684a9.339 9.339 0 01-.264 2.578 4.453 4.453 0 01-1.035 1.777q-.254-.312-.527-.664a3.455 3.455 0 00.811-1.445 8.8 8.8 0 00.225-2.246zm-.8-2.793h4.458q-.215-.4-.474-.82l.723-.361q.317.518.649 1.182h4.058v.693h-9.415zm2.038 1.25l.645-.43q.605.762 1.074 1.445l-.693.479a16.087 16.087 0 00-1.026-1.494zm9.229-1.953h6.738v3.867h-.781v-.312h-5.174v.313h-.781zm3.975 4.668h3.73v4.512h-.742v-.664h-2.244v.664h-.742zm-4.932 0h3.721v4.512h-.742v-.654h-2.235v.654h-.742zm6.916-3.982h-5.176v2.185h5.176zm1.006 4.668h-2.246V38h2.246zm-4.941 0h-2.237v2.51h2.236z"
                    fill="#fff"
                    opacity="0.85"
                  ></path>
                  <circle data-name="\u692D\u5706 1759" cx="1" cy="1" r="1" transform="translate(419 27)" fill="#fff"></circle>
                </g>
              </svg> -->
              <img src="../../assets/img/feicheng.png" alt="" style="height: 34px;object-fit: cover;margin-top: 16px;object-fit: contain;">
            </div>
          </el-col>
        </router-link>
        <el-col :span="18">
          <div class="grid-content bg-purple-light tabbarRight">
            <router-link :to="{ path: '/productPage/productPage_douyinSearch' }"><span class="lf48">找飞橙</span></router-link>
            <router-link :to="{ path: '/productPage/productPage_user' }"><span class="lf48">素材创意</span></router-link>
            <router-link :to="{ path: '/productPage/productPage_user' }"><span class="lf48">飞橙商学院</span></router-link>


            <span v-if='this.$store.state.refresh.loginRefresh().loginIf==1'>

            	<span class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==0&&this.$store.state.refresh.loginRefresh().audits!=12'>体验版</span>
            	<span class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==1&&this.$store.state.refresh.loginRefresh().audits!=12'>个人号</span>
            	<span class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==2&&this.$store.state.refresh.loginRefresh().audits!=12'>达人号</span>
            	<span class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==3&&this.$store.state.refresh.loginRefresh().audits!=12'>企业号</span>
            	<span  @click='askIfEnter()' class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==0&&this.$store.state.refresh.loginRefresh().audits==12'>体验版(认证失败)</span>
            	<span  @click='askIfEnter()' class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==1&&this.$store.state.refresh.loginRefresh().audits==12'>个人号(认证失败)</span>
            	<span  @click='askIfEnter()' class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==2&&this.$store.state.refresh.loginRefresh().audits==12'>达人号(认证失败)</span>
            	<span  @click='askIfEnter()' class="lf48" v-if='this.$store.state.refresh.loginRefresh()&&this.$store.state.refresh.loginRefresh().types==3&&this.$store.state.refresh.loginRefresh().audits==12'>企业号(认证失败)</span>
            </span>

            <router-link v-if='!this.$store.state.refresh.loginRefresh()||this.$store.state.refresh.loginRefresh().loginIf==0' :to="{ path: '/productPage/productPage_ruzhu' }"><span class="lf48">申请成为博主</span></router-link>
            <!--<router-link v-if='this.$store.state.refresh.loginRefresh()||this.$store.state.refresh.loginRefresh().wxVideoaccount==null||this.$store.state.refresh.loginRefresh().wxVideoaccount.audit==0' :to="{ path: '/productPage/productPage_ruzhu' }"><span class="lf48">申请成为博主</span></router-link>-->
            <!--v-if='this.$store.state.refresh.loginRefresh().wxVideoaccount&&this.$store.state.refresh.loginRefresh().wxVideoaccount==null||this.$store.state.refresh.loginRefresh().wxVideoaccount.audit==0||this.$store.state.refresh.loginRefresh().wxVideoaccount.audit==12'-->
            <el-button   v-if="this.$store.state.refresh.loginRefresh()? false:true" @click="loginFn" >登录 / 注册</el-button>
            <div v-else class="userToGo">
              <span><img style="border-radius: 50%;" :src="this.$store.state.refresh.loginRefresh()? this.$store.state.refresh.loginRefresh().userLogo:''" alt=""></span>
              <span>{{this.$store.state.refresh.loginRefresh()? this.$store.state.refresh.loginRefresh().userNickname:''}}</span>
              <router-link :to="{path: '/productPage/productPage_user'}"><span class="togo">去使用<i aria-label="icon: right" style="font-size:12px" class="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></span>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <!-- 首页大背景 -->
    <el-main>
      <div class="main">
        <div class="homeBack">
          <div class="homeBackIndex">
            <div>
              <h1>飞橙全场景AI数据平台</h1>
              <p>
                全方位洞察飞橙生态， 发掘热门视频、音乐，爆款商品及优质账号
                <br />
                有效助力账号运营变现，品牌策略投放
              </p>
              <div class="homeIntro">
                <div></div>
                <div class="homeIntro_div">
                  <span>
                    <span class="ant-breadcrumb-link">CPS</span>
                    <span class="ant-breadcrumb-separator">/</span>
                  </span>
                  <span>
                    <span class="ant-breadcrumb-link">CPC</span>
                    <span class="ant-breadcrumb-separator"></span>
                  </span>
                  <!-- <span>
                    <span class="ant-breadcrumb-link">POI</span>
                    <span class="ant-breadcrumb-separator">/</span>
                  </span>
                  <span>
                    <span class="ant-breadcrumb-link">MCN</span>
                    <span class="ant-breadcrumb-separator">/</span>
                  </span>
                  <span>
                    <span class="ant-breadcrumb-link">CPS</span>
                    <span class="ant-breadcrumb-separator">/</span>
                  </span> -->
                </div>
              </div>
              <div v-if="!this.$store.state.refresh.loginRefresh()" @click="loginFn">立即使用</div>
              <div v-if="this.$store.state.refresh.loginRefresh()" class="userTo"><router-link :to="{ path: '/productPage/productPage_user' }">已登录,去使用</router-link></div>
            </div>
          </div>
        </div>
        <div class="downArrayIcon" ref="showPage1">
          <div>
            <div>
              <svg width="28" height="28" viewBox="0 0 28 28">
                <g id="\u7EC4_6058" data-name="\u7EC4 6058" transform="translate(28) rotate(90)">
                  <g id="\u7EC4_6057" data-name="\u7EC4 6057" opacity="0">
                    <g id="\u7EC4_6056" data-name="\u7EC4 6056">
                      <g id="\u7EC4_6055" data-name="\u7EC4 6055">
                        <g id="\u7EC4_6054" data-name="\u7EC4 6054">
                          <g id="\u7EC4_6053" data-name="\u7EC4 6053">
                            <g id="\u7EC4_6052" data-name="\u7EC4 6052">
                              <g id="\u7EC4_6051" data-name="\u7EC4 6051">
                                <g id="\u7EC4_6050" data-name="\u7EC4 6050">
                                  <g id="\u7EC4_6049" data-name="\u7EC4 6049">
                                    <g id="\u7EC4_6048" data-name="\u7EC4 6048">
                                      <g id="\u7EC4_6047" data-name="\u7EC4 6047">
                                        <path id="\u8DEF\u5F84_12855" data-name="\u8DEF\u5F84 12855" fill="#66666d" d="M27.263.737V27.263H.737V.737H27.263M28,0H0V28H28V0Z"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="\u7EC4_6231" data-name="\u7EC4 6231" transform="translate(0 1.866)">
                    <path
                      id="\u8DEF\u5F84_12856"
                      data-name="\u8DEF\u5F84 12856"
                      fill="#66666d"
                      stroke="#66666d"
                      stroke-width="0.5px"
                      d="M11.566,20.9a.515.515,0,0,1-.4-.169.543.543,0,0,1,0-.789L18.7,12.449,11.17,4.958a.543.543,0,0,1,0-.789.549.549,0,0,1,.792,0l7.925,7.885a.543.543,0,0,1,0,.789l-7.925,7.885A.515.515,0,0,1,11.566,20.9Z"
                      transform="translate(-5.973 0.119)"
                    ></path>
                    <path
                      id="\u8DEF\u5F84_12857"
                      data-name="\u8DEF\u5F84 12857"
                      fill="#66666d"
                      stroke="#66666d"
                      stroke-width="0.5px"
                      d="M11.566,20.9a.515.515,0,0,1-.4-.169.543.543,0,0,1,0-.789L18.7,12.449,11.17,4.958a.543.543,0,0,1,0-.789.549.549,0,0,1,.792,0l7.925,7.885a.543.543,0,0,1,0,.789l-7.925,7.885A.515.515,0,0,1,11.566,20.9Z"
                      transform="translate(1.554 0.119)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="oneBox" ref="showPage2">
          <!-- 第一块 -->
          <showPage_one ref="showPage_one"></showPage_one>
          <!-- 第二块 -->
          <showPage_two ref="showPage_two"></showPage_two>
          <!-- 第三块 -->
          <showPage_three ref="showPage_three"></showPage_three>
          <!-- 第四块 -->
          <showPage_four ref="showPage_four"></showPage_four>
          <!-- 第五塊 -->
          <showPage_five ref="showPage_five"></showPage_five>
          <!-- 第六塊 -->
          <showPage_six ref="showPage_six"></showPage_six>
          <!-- 第七塊 -->
          <showPage_seven ref="showPage_seven"></showPage_seven>
          <!-- 第八块 -->
          <showPage_eight ref="showPage_eight"></showPage_eight>
          <!-- 第九块 -->
          <showPage_nine ref="showPage_nine"></showPage_nine>
        </div>
      </div>
    </el-main>
    <!-- <el-footer> -->
    <div class="footer">
      <div class="footer_1">
        <div class="footer_1_1">
          <div>关于我们</div>
          <div><a href="https://www.newrank.cn/" target="_blank" rel="noopener noreferrer">新榜</a></div>
          <div><a href="https://data.newrank.cn/" target="_blank" rel="noopener noreferrer">新榜有数</a></div>
        </div>
        <div class="footer_1_2">
          <div>热门工具</div>
          <div>
            <a href="https://data.newrank.cn/mins/wechat" target="_blank" rel="noopener noreferrer">分钟级监测</a>
          </div>
          <div><a href="https://data.newrank.cn/pick/wechat/page" target="_blank" rel="noopener noreferrer">账号回采</a></div>
        </div>
        <div class="footer_1_3">
          <div class="_GudV7S8W">联系客服</div>
          <div class="_3gZSHcLe">邮箱：{{ servant.servantEmail }}</div>
          <div class="_3gZSHcLe">电话：{{ servant.servantTel }}（工作日周一至周五9:30-18:00）</div>
        </div>
        <div class="footer_1_4">
          <div>飞橙服务号</div>
          <div>
            <!-- <img src="../../assets/img/cityPic.d155ba3c.png" alt=""> -->
            <img :src="codeSrc" alt="" />
          </div>
        </div>
      </div>
      <div class="footer_2">
        <div class="_1bhE4WcF">{{ servant.icp }}</div>
      </div>
    </div>
    <!-- </el-footer> -->
    <!--  登陆扫码框 -->
    <login ref="loginRef"></login>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import showPage_one from './functionPage/showPage_one.vue';
import showPage_two from './functionPage/showPage_two.vue';
import showPage_three from './functionPage/showPage_three.vue';
import showPage_four from './functionPage/showPage_four.vue';
import showPage_five from './functionPage/showPage_five.vue';
import showPage_six from './functionPage/showPage_six.vue';
import showPage_seven from './functionPage/showPage_seven.vue';
import showPage_eight from './functionPage/showPage_eight.vue';
import showPage_nine from './functionPage/showPage_nine.vue';

import login from '../common/functionPage/login.vue';
export default {
  name: 'account',
  data() {
    return {
      codeSrc: '',
      servant: [],
      loginIf:true,
      userName:'',
      useravator:'',
	  showData:false,
      // centerDialogVisible: false
    };
  },
  watch:{
     $route(to,from){
         console.log(to);
         console.log(from)

     }
  },
  directives: {},
  beforeRouteLeave(to, from, next) {
    debugger;
    let scrollTop = (this.scrollTop = document.getElementById('showPage').scrollTop);
    this.scrollTop = scrollTop ? scrollTop : 0;
    // console.log(this.scrollTop);
    if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
      debugger;
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
          if (this.$vnode.componentOptions) {
            var key =
              this.$vnode.key == null ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') : this.$vnode.key;
            var cache = this.$vnode.parent.componentInstance.cache;
            var keys = this.$vnode.parent.componentInstance.keys;
            if (cache[key]) {
              if (keys.length) {
                var index = keys.indexOf(key);
                if (index > -1) {
                  keys.splice(index, 1);
                }
              }
              delete cache[key];
            }
          }
        }
      }
      this.$destroy();
    }
    next();
  },
  // 进入该页面时，用之前保存的滚动位置赋值
  beforeRouteEnter(to, from, next) {
    // debugger
    next(vm => {
      document.getElementById('showPage').scrollTop = document.getElementById('showPage').pageYOffset = vm.scrollTop;
    });
    //判断回调页是否与当前前进路由相等，如果相等，删除路径
    let fromRoute = JSON.stringify({ path: from.path, name: from.name, query: from.query });
    let lastRoute = localStorage.getItem('lastRoute');
    // console.log('fromRoute'+fromRoute)
    // console.log('lastRoute'+lastRoute)
    if (fromRoute == lastRoute) {
      localStorage.removeItem('lastRoute');
    }
  },
  activated() {
    // debugger
  },

  mounted() {
    console.dir(this.$store.state.refresh.loginRefresh())
    // console.log(this.$refs.showPage1.offsetTop);
    // console.log(this.$refs.showPage2.offsetTop);
    // console.log(this.$refs.showPage_one.$el.offsetHeight);
    // console.log(this.$refs.showPage_two.$el.offsetHeight);
    window.addEventListener('scroll', this.scrollToTop, true);
    // 获取配置信息
    this.$axios
      .get('/config')
      .then(res => {
        this.codeSrc = res.data.data.servantWxQrcode;
        this.servant = res.data.data;
      })
      .catch(err => {});
    // 登陆刷新
    this.$axios
      .get('/user/login-refresh')
      .then(res => {})
      .catch(err => {});
    // debugger;
    // if(this.$store.state.hospitalEntrance.loginRefresh())
    //  this.$toast({message:'已登录',onClose:function(){
    // thisVue.$router.replace({ path : '/hospital/hospital_index',query:{time:new Date().getTime()}});
    //  }})
    // 跳转回跳页面
    let lastRoute = localStorage.getItem('lastRoute');
    if (lastRoute) {
      this.$router.push(JSON.parse(lastRoute));
      return;
    }
    if(this.$store.state.refresh.loginRefresh()){
      this.useravator=this.$store.state.refresh.loginRefresh().userLogo
      this.userName=this.$store.state.refresh.loginRefresh().userName
      this.loginIf=false

    }
	this.showData = localStorage.getItem('showData')

  },
  components: {
    showPage_one,
    showPage_two,
    showPage_three,
    showPage_four,
    showPage_five,
    showPage_six,
    showPage_seven,
    showPage_eight,
    showPage_nine,
    login
  },

  computed: {
    // ...mapGetters(['centerDialogVisible'])
    centerDialogVisible: {
      get: function() {
        return this.$store.state.centerDialogVisible;
      },
      set: function(newValue) {
        this.$store.state.centerDialogVisible = newValue;
      }
    }
  },
  // watch:{
  //       '$route':'fetchData'
  //   },
     created() {
            var self = this;
            // self.fetchData();
      },
  methods: {
  	  	//询问是否入驻
askIfEnter(){
	this.$confirm(this.$store.state.refresh.loginRefresh().wxVideoaccount.audit12Message+'，是否重新认证?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
       }).then(() => {
			 this.$router.push({path:'/productPage/productPage_ruzhu'});
        }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消删除'
//        });
        });
},
// fetchData(){
//            console.log('路由发送变化doing...');
//      },
	initData(){
		this.showData = true;
		localStorage.setItem('showData',this.showData)
		// console.log('路由发送变化doing...');
		// Object.assign(this.$data, this.$options.data());
	},
    loginFn() {
      this.centerDialogVisible = true;
      this.$refs.loginRef.getData();
    },
    scrollToTop() {
      var scrollTop = document.getElementById('showPage').scrollTop;
      // var height1 = this.$refs.showPage1.offsetTop;
      // var height2 = this.$refs.showPage2.offsetTop;
      // console.dir(this.$refs.showPage_two.$el.offsetHeight)
      var height2=0
      var height3 = height2 + this.$refs.showPage_one.$el.offsetHeight;
      var height4 = height3 + this.$refs.showPage_two.$el.offsetHeight;
      var height5 = height4 + this.$refs.showPage_three.$el.offsetHeight;
      var height6 = height5 + this.$refs.showPage_four.$el.offsetHeight;
      var height7 = height6 + this.$refs.showPage_five.$el.offsetHeight;
      var height8 = height7 + this.$refs.showPage_six.$el.offsetHeight;
      var height9 = height8 + this.$refs.showPage_eight.$el.offsetHeight;
      var height10 = height9 + this.$refs.showPage_nine.$el.offsetHeight;
      console.log(scrollTop, height2,height3,height4);
      if (scrollTop >= height3/2) {

        document.getElementById('one_1').setAttribute('class','oneBox_mid_line oneBox_mid_line_one_1')
        document.getElementById('one_2').setAttribute('class','oneBox_mid_line oneBox_mid_line_two_1')
        document.getElementById('one_3').setAttribute('class','oneBox_mid_line oneBox_mid_line_three_1')
        document.getElementById('one_4').setAttribute('class','oneBox_mid_line oneBox_mid_line_four_1')
        document.getElementById('one_5').setAttribute('class','oneBox_mid_line oneBox_mid_line_five_1')

      }
      if(scrollTop>=height3+400){
        console.log(document.getElementById('two_1'))
          document.getElementById('two_1').setAttribute('class','box_indexLf transitionlF_2')
          setTimeout(function(){
          document.getElementById('two_2').setAttribute('class','box_indexRt transitionlFTwo_2')
            },200)
      }
      if(scrollTop>=height4+400){
        document.getElementById('three_1').setAttribute('class',' mainmid_one transitionlF_3')
       setTimeout(function(){
         document.getElementById('three_2').setAttribute('class',' mainmid_two transitionlFTwo_3')
       },200)
      }
      if(scrollTop>=height5+800){
        document.getElementById('four_1').setAttribute('class',' mainbottom_top mainbottom_top_transition_4')
       setTimeout(function(){
         document.getElementById('four_2').setAttribute('class',' mainbottom_mid mainbottom_mid_transition_4')
       },200)
       setTimeout(function(){
         document.getElementById('four_3').setAttribute('class',' mainbottom_bottom mainbottom_bottom_transition_4')
       },400)
      }

      if(scrollTop>=height6+800){
        document.getElementById('five_1').setAttribute('class',' mainmid_one_top mainmid_one_top_transition_5')
       setTimeout(function(){
         document.getElementById('five_2').setAttribute('class',' mainmid_one_mid mainmid_one_mid_transition_5')
       },200)
      }

      if(scrollTop>=height7+600){
        document.getElementById('six_1').setAttribute('class',' mainbottom mainbottom_transition_6')
      }

      if(scrollTop>=height8+400){
        document.getElementById('seven_1').setAttribute('class',' maindiv_two_top maindiv_two_top_transition_7')
        }
         if(scrollTop>=height8+600){
           document.getElementById('seven_2').setAttribute('class',' maindiv_two_bottom maindiv_two_bottom_transition_7')
         }
         if(scrollTop>=height8+800){
           document.getElementById('seven_3').setAttribute('class',' maindiv_three maindiv_three_transition_7')
         }

         if(scrollTop>=height9+600){
           document.getElementById('eight_1').setAttribute('class',' main_bottom main_bottom_transition_8')
         }
 if(scrollTop>=height10+700){
           document.getElementById('nine_1').setAttribute('class',' main main_transition_9')
         }
      //  setTimeout(function(){

      //  },200)
      //  setTimeout(function(){
      //    document.getElementById('seven_3').setAttribute('class',' maindiv_three maindiv_three_transition_7')
      //  },400)
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userToGo{
    margin-left: 48px;
    display: inline-block;
  }
  .userToGo>span:nth-child(1){
    float: left;
        margin-top: 20px;

        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 18px;
            background: transparent;
            display: inline-block;
  }
   .userToGo>span:nth-child(1) img{
        display: block;
        width: 24px;
        height: 24px;
        -o-object-fit: cover;
        object-fit: cover;

  }
  .userToGo>span:nth-child(2){
        margin: 0 8px;
        display: inline-block;
  }
  .userToGo .togo{
   color: #faad14 !important;
   display: inline-block;
   }
/* .el-dialog__wrapper {
	transition-duration: 0.3s;
}
.dialog-fade-enter-active{
	animation: none !important;
}
.dialog-fade-leave-active {
	transition-duration: 0.15s !important;
	animation: none !important;
  }

.dialog-fade-enter-active .el-dialog,
.dialog-fade-leave-active .el-dialog{
	animation-fill-mode: forwards;
}

.dialog-fade-enter-active .el-dialog{
	animation-duration: 0.3s;
	animation-name: anim-open;
	animation-timing-function: cubic-bezier(0.6,0,0.4,1);
}

.dialog-fade-leave-active .el-dialog{
	animation-duration: 0.3s;
	animation-name: anim-close;
}


@keyframes anim-open {
	0% { opacity: 0;  transform: scale3d(0, 0, 1); }
	100% { opacity: 1; transform: scale3d(1, 1, 1); }
}


@keyframes anim-close {
	0% { opacity: 1; }
	100% { opacity: 0; transform: scale3d(0.5, 0.5, 1); }
}
 */


html {
  font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 16px;
  /* font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; */
  padding: 0;
  box-sizing: border-box !important;
}
#showPage {
  overflow-y: scroll;
  height: 100%;
  font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
#showPage::-webkit-scrollbar {
  width: 8px;
  border-radius: 50px;
}
#showPage::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 50px;
}
#showPage::-webkit-scrollbar-thumb {
  background-color: #b3b3b3;
  border-radius: 50px;
}
#showPage::-webkit-scrollbar-thumb:hover {
  background-color: #e0e0e0;
  border-radius: 50px;
}
#showPage::-webkit-scrollbar-thumb:active {
  background-color: #e0e0e0;
  border-radius: 50px;
}
el-row,
.el-main {
  padding: 0;
}
.showPage {
  width: 100%;
  height: 100%;
}
.navBar {
  width: 100%;
  height: 64px !important;
  background: #40404d;
  min-width: 1200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.fclogo {
  line-break: 64px;
  vertical-align: middle;
}
.indexNav {
  width: 1200px;
  height: 64px;
  background: #40404d;
  margin: 0 auto !important;
  vertical-align: middle;
  line-break: 64px;
}
.indexNav .fclogo > svg {
  margin-top: 13px;
}
.tabbarRight {
  float: right;
}
.tabbarRight span {
  color: #edeef2;
  cursor: pointer;
  font-size: 14px;

  height: 64px;
  line-height: 64px;
}
.tabbarRight .lf48{
  margin-left: 48px;
}
.tabbarRight span:hover {
  color: #ff7800;
}
.tabbarRight a:first-child span {
  margin-left: 0;
}

.tabbarRight button {
  /* margin-left: 48px; */
  background: #ff9429;
  border: 0;
  color: #fff;
  width: 99px;
  height: 32px;
  margin: 16px 0 16px 48px;
  padding: 0;
}
.el-main {
  width: 100% !important;
  min-width: 1300px;
  overflow: hidden;
  background: #fff;
}
.main {
  min-width: 1300px;
  overflow: hidden;
  background: #fff;
}
.homeBack {
  /* width: 100% !important;
  min-width: 1300px !important;
  height: 100vh;
  min-height: 650px;
  background: #fff;
  background: #40404d;
  position: relative;
  padding: 0; */
  height: 100vh;
  min-height: 650px;
  padding-top: 1px;
  background: #40404d;
  position: relative;
}
.homeBackIndex {
  height: 650px;
  background: url(../../assets/img/homeBack.7ca33676.gif) 0 -123px no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.homeBackIndex > div {
  width: 1200px;
  padding-top: 103px;
  margin: auto;
}
.homeBackIndex > div h1 {
  font-size: 56px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 32px !important;
  margin-left: -10px;
  position: relative;
  color: #fff;
  font-family: DINPro Medium, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
.homeBackIndex > div p {
  font-size: 18px;
  line-height: 36px;
  color: #e8edee;
  margin-bottom: 56px !important;
}
.homeBackIndex > div .homeIntro {
  position: relative;
  margin-bottom: 136px !important;
}
.homeBackIndex > div .homeIntro div:nth-child(1) {
  width: 340px;
  height: 40px;
  line-height: 40px;
  color: #fff !important;
  padding-left: 5px;
  background: -webkit-gradient(linear, left top, right top, from(hsla(0, 0%, 100%, 0.3)), to(hsla(0, 0%, 100%, 0)));
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0));
  opacity: 0.3;

}
.homeBackIndex > div .homeIntro div:nth-child(2) {
  position: absolute;
  left: 10px;
  top: 9.5px;
  font-size: 16px;
}
.homeBackIndex > div > div:last-child {
  display: inline-flex;
  padding: 0 16px;
  height: 48px;
  line-height: 48px;
  background: #fe2c55;
  opacity: 1;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;

}
.homeBackIndex > div > .userTo{
             background: #ff7800 !important;
       }

.homeIntro_div{
     font-family: DINPro Medium,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important;
}
.homeIntro .homeIntro_div>span{
color: #ffffff;
font-family: inherit;
}
.homeIntro .homeIntro_div>span span:nth-child(2){
      margin: 0 8px;
      color: #cdcfcf;
}
.downArrayIcon {
  height: 25px;
  width: 1200px;
  margin: -2px auto auto;
}
.downArrayIcon > div {
  width: 0;
  height: 0;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  border-top: 25px solid #3e3e4a;
  position: relative;
  margin-left: 20px;
}
.downArrayIcon > div > div {
  position: absolute;
  top: -55px;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  cursor: pointer;
  -webkit-animation: _2NRMCHUL 1s linear infinite;
  animation: _2NRMCHUL 1s linear infinite;
}
.oneBox {
  width: 100%;
  height: auto;
  background: #fff;
  padding-top: 108px;
  position: relative;
}

/* 底部 */
.footer {
  background: url(../../assets/img/footerBack.56fab624.png) 0 0 no-repeat;
  background-size: 100% 200px;
}
.footer_1 {
  width: 1200px;
  height: 200px;
  display: flex;
  padding-top: 32px;
  margin: 0 auto;
  box-sizing: border-box;
}
.footer_1_1,
.footer_1_2,
.footer_1_3,
.footer_1_4 {
  margin-right: 64px;
  position: relative;
  color: #ffffff;
}
.footer_1_3 {
  flex-grow: 1;
}
.footer_1_1 > div:nth-child(1),
.footer_1_2 > div:nth-child(1) {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 32px;
}
.footer_1_1 > div:nth-child(2),
.footer_1_2 > div:nth-child(2) {
  margin-bottom: 15px;
}
.footer_1_1 > div,
.footer_1_2 > div a {
  color: #ffffff;
}
.footer_1_3 > div:nth-child(1) {
  font-size: 16px;
  color: #fff;
  margin-bottom: 32px;
}
.footer_1_3 > div:nth-child(2),
.footer_1_3 > div:nth-child(3) {
  margin-bottom: 15px;
}
.footer_1_4 {
  position: relative;
}
.footer_1_4 > div:nth-child(1) {
  font-size: 14px;
  color: #fff;
  text-align: center;
}
.footer_1_4 > div:nth-child(2) {
  width: 100px;
  height: 100px;
  margin-top: 8px;
}
.footer_1_4 img {
  width: 100px;
  height: 100px;
}
.footer_2 {
  background: #353540;
}
.footer_2 > div {
  height: 53px;
  line-height: 53px;
  color: #787a7a;
  font-size: 16px;
  width: 1200px;
  margin: auto;
}
</style>
