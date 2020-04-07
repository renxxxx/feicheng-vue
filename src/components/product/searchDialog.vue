<template>
	<div class="searchDialog">
		<el-dialog :visible.sync="publicSearchShow" custom-class="beijingColor" @close="closeFn" width="100%" style="background-color: transparent;">
			<div class="ant-modal-content">
				<div class="ant-modal-body">
					<div class="_2-ZfaS6I" @click="closeFn"><i aria-label="图标: close" class="anticon anticon-close"><svg viewBox="64 64 896 896"
							 focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
								<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
							</svg></i></div>
					<div class="_23uPe3WZ"><label for="global-search"><i aria-label="图标: search" class="anticon anticon-search"><svg
								 viewBox="64 64 896 896" focusable="false" class="" data-icon="search" width="1em" height="1em" fill="currentColor"
								 aria-hidden="true">
									<path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
								</svg></i></label>
								<input id="global-search" autofocus v-focus  ref="input" class="ant-input ant-input-lg _2dLoj_zS" v-model="kw" type="text" value=""></div>
					<div style="height: 38px; background: rgba(43, 43, 46, 0.9);"></div>
					<div class="_3wj-fWTO">
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_douyinSearch',value:this.kw}}" >
						<div @click="closeFn" class="_jIuEjZsm _3_pdiDbl">
							<!-- <svg width="18" height="20" viewBox="0 0 18 20" class="_2ya-WN18">
								<g transform="translate(-146.422 -95.552)">
									<path fill="#25f4ee" d="M348.3,100.45c.014-1.633,0-3.266.014-4.9h3.338a4.16,4.16,0,0,0,.072.853h-2.457v13.265a3.168,3.168,0,0,1-.4,1.618,2.74,2.74,0,0,1-2.11,1.344,2.829,2.829,0,0,1-1.6-.332,2.753,2.753,0,0,1-.939-.838,2.755,2.755,0,0,0,2.789-.1,2.836,2.836,0,0,0,1.315-2.37c-.015-2.847-.015-5.693-.015-8.54Zm5.505-.939a4.835,4.835,0,0,0,1.517.636,4.315,4.315,0,0,0,.968.1V101A4.758,4.758,0,0,1,353.809,99.511Zm0,0"
									 transform="translate(-192.84 0)"></path>
									<path fill="#25f4ee" d="M149.357,389.95a6.046,6.046,0,0,1,4.046-.853v.795a7.3,7.3,0,0,0-1.113.13,6.338,6.338,0,0,0-2.485,1.113,6.022,6.022,0,0,0-1.821,2.3,6.184,6.184,0,0,0-.592,2.746,6.25,6.25,0,0,0,.78,2.962,4.731,4.731,0,0,0,.838,1.156,5.929,5.929,0,0,1-1.734-1.907,6.256,6.256,0,0,1-.853-3.338,6.354,6.354,0,0,1,.91-3.049,6.106,6.106,0,0,1,2.023-2.052Zm0,0"
									 transform="translate(0 -286.746)"></path>
									<path fill="#fff" d="M194.894,130.268h2.486a4.837,4.837,0,0,0,.48,1.324,4.1,4.1,0,0,0,1.483,1.606.334.334,0,0,1,.1.1,4.8,4.8,0,0,0,2.515,1.451c.015.845,0,1.7,0,2.55a8.045,8.045,0,0,1-4.622-1.423c0,2.029,0,4.058.014,6.087,0,.268.015.535,0,.817a6.512,6.512,0,0,1-.9,2.818,6.194,6.194,0,0,1-1.744,1.916,5.719,5.719,0,0,1-3.183,1.057,7.111,7.111,0,0,1-1.73-.141,6.325,6.325,0,0,1-2.224-.944l-.044-.042a5.024,5.024,0,0,1-.843-1.127,5.978,5.978,0,0,1-.189-5.565,6.044,6.044,0,0,1,1.832-2.24,6.475,6.475,0,0,1,2.5-1.085,7.348,7.348,0,0,1,1.119-.127c.014.324,0,.648.014.958V139.9a2.479,2.479,0,0,0-1.323-.042,3.318,3.318,0,0,0-1.424.676,2.538,2.538,0,0,0-.61.747,2.7,2.7,0,0,0-.291,1.578,2.618,2.618,0,0,0,.64,1.423,3.571,3.571,0,0,0,.843.69,2.741,2.741,0,0,0,.945.817,3.051,3.051,0,0,0,1.613.324,2.728,2.728,0,0,0,2.122-1.31,3.016,3.016,0,0,0,.407-1.578c.029-4.339.014-8.651.014-12.962Zm0,0"
									 transform="translate(-38.505 -33.863)"></path>
									<path fill="#fe2c55" d="M263.983,130.268c.291.014.582,0,.887,0a4.544,4.544,0,0,0,.872,2.666c.073.1.145.183.218.268a4,4,0,0,1-1.483-1.608,5.212,5.212,0,0,1-.494-1.326Zm4.58,4.485a4.473,4.473,0,0,0,.974.1v3.286a8.114,8.114,0,0,1-4.667-1.467v6.516a5.524,5.524,0,0,1-.145,1.467,6.047,6.047,0,0,1-2.472,3.653,6.142,6.142,0,0,1-2.21.959,6.326,6.326,0,0,1-2.908-.042,6.166,6.166,0,0,1-2.952-1.721,6.074,6.074,0,0,0,2.225.945,7.106,7.106,0,0,0,1.73.141,5.717,5.717,0,0,0,3.184-1.058,6.38,6.38,0,0,0,1.745-1.918,6.523,6.523,0,0,0,.9-2.821,7.7,7.7,0,0,0,0-.818c-.015-2.031-.015-4.062-.015-6.093a8.043,8.043,0,0,0,4.624,1.424C268.563,136.46,268.577,135.6,268.563,134.753Zm0,0"
									 transform="translate(-105.115 -33.863)"></path>
									<path fill="#fe2c55" d="M287.7,423.3a7.248,7.248,0,0,1,.968.058v3.453a2.64,2.64,0,0,0-1.46-.058,2.821,2.821,0,0,0-1.633,4.393,3.038,3.038,0,0,1-.838-.708,2.725,2.725,0,0,1-.636-1.459,2.849,2.849,0,0,1,.289-1.618A2.587,2.587,0,0,1,285,426.6a3.512,3.512,0,0,1,1.416-.694,2.392,2.392,0,0,1,1.315.043v-1.691C287.7,423.969,287.717,423.636,287.7,423.3Zm0,0"
									 transform="translate(-134.261 -320.002)"></path>
								</g>
							</svg> -->
							<span>搜视频号</span></div>
						</router-link>
						<!-- <router-link  :to="{path:'/tihuan',query:{path:'/product/product_douyinSearch',value:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜MCN</div>
						</router-link>
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_douyinSearch',value:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜地点</div>
						</router-link> -->
						<div class="_3ObVFtrt"></div>
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_videoSearch',value:this.kw}}" >
						<div @click="closeFn" class="_jIuEjZsm _3_pdiDbl">
							<!-- <svg width="22" height="14" viewBox="0 0 22 14" class="_2ya-WN18">
								<g transform="translate(-309 -271)">
									<path fill="#fe2c55" d="M213.082,295.015a1.006,1.006,0,0,1-.56-.17l-4.056-2.7a.481.481,0,0,1-.214-.4v-2.292a.482.482,0,0,1,.214-.4l4.054-2.706a1.009,1.009,0,0,1,1.045-.048,1.036,1.036,0,0,1,.536.91v6.78a1.039,1.039,0,0,1-.536.912A.99.99,0,0,1,213.082,295.015Zm-5.987-10.425H196.21a2.127,2.127,0,0,0-2.11,2.138v7.723a2.127,2.127,0,0,0,2.11,2.138h10.885a2.125,2.125,0,0,0,2.11-2.138v-7.723A2.127,2.127,0,0,0,207.095,284.59Zm-8.142,4.789a1.613,1.613,0,0,1-1.632,0,1.632,1.632,0,1,1,1.632,0Z"
									 transform="translate(116.9 -11.59)"></path>
									<path fill="#25f4ee" d="M213.082,295.015a1.006,1.006,0,0,1-.56-.17l-4.056-2.7a.481.481,0,0,1-.214-.4v-2.292a.482.482,0,0,1,.214-.4l4.054-2.706a1.009,1.009,0,0,1,1.045-.048,1.036,1.036,0,0,1,.536.91v6.78a1.039,1.039,0,0,1-.536.912A.99.99,0,0,1,213.082,295.015Zm-5.987-10.425H196.21a2.127,2.127,0,0,0-2.11,2.138v7.723a2.127,2.127,0,0,0,2.11,2.138h10.885a2.125,2.125,0,0,0,2.11-2.138v-7.723A2.127,2.127,0,0,0,207.095,284.59Zm-8.142,4.789a1.613,1.613,0,0,1-1.632,0,1.632,1.632,0,1,1,1.632,0Z"
									 transform="translate(114.9 -13.59)"></path>
									<path fill="#fff" d="M213.082,295.015a1.006,1.006,0,0,1-.56-.17l-4.056-2.7a.481.481,0,0,1-.214-.4v-2.292a.482.482,0,0,1,.214-.4l4.054-2.706a1.009,1.009,0,0,1,1.045-.048,1.036,1.036,0,0,1,.536.91v6.78a1.039,1.039,0,0,1-.536.912A.99.99,0,0,1,213.082,295.015Zm-5.987-10.425H196.21a2.127,2.127,0,0,0-2.11,2.138v7.723a2.127,2.127,0,0,0,2.11,2.138h10.885a2.125,2.125,0,0,0,2.11-2.138v-7.723A2.127,2.127,0,0,0,207.095,284.59Zm-8.142,4.789a1.613,1.613,0,0,1-1.632,0,1.632,1.632,0,1,1,1.632,0Z"
									 transform="translate(115.9 -12.59)"></path>
								</g>
							</svg> -->
							<span>搜视频</span></div>
						</router-link>
						<!-- <router-link  :to="{path:'/product/product_videoSearch',value:{kw:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜音乐</div>
						</router-link>
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_videoSearch',value:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜话题</div>
						</router-link>
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_videoSearch',value:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜魔法道具</div>
						</router-link>
						<router-link  :to="{path:'/tihuan',query:{path:'/product/product_videoSearch',value:this.kw}}" >
							<div @click="closeFn" class="_jIuEjZsm">搜评论</div>
						</router-link> -->
					</div>
					<div style="height: 32px; background: rgba(43, 43, 46, 0.9);"></div>
					<!-- <div class="_3wj-fWTO">
						<div class="_jIuEjZsm _3_pdiDbl"><svg width="22" height="22" viewBox="0 0 22 22" class="_2ya-WN18">
								<defs>
								</defs>
								<g transform="translate(-306 -265)">
									<g transform="translate(253.257 146.741)">
										<g>
											<g>
												<g class="searchGoods_cls-1" transform="translate(55.743 121.259)">
													<rect class="searchGoods_cls-7" width="18" height="18"></rect>
													<rect class="searchGoods_cls-8" x="-0.5" y="-0.5" width="19" height="19"></rect>
												</g>
											</g>
										</g>
										<path class="searchGoods_cls-2" d="M71.042,124.9a2.121,2.121,0,0,0-2.1-2.143h-8.4a2.121,2.121,0,0,0-2.1,2.143l-.7,10.714a2.121,2.121,0,0,0,2.1,2.143h9.8a2.121,2.121,0,0,0,2.1-2.143Zm-6.3,5.73a4.43,4.43,0,0,1-4.426-4.425.6.6,0,0,1,1.2,0,3.225,3.225,0,1,0,6.45,0,.6.6,0,0,1,1.2,0A4.429,4.429,0,0,1,64.743,130.632Z"></path>
									</g>
									<g transform="translate(251.257 144.741)">
										<g>
											<g>
												<g class="searchGoods_cls-3" transform="translate(55.743 121.259)">
													<rect class="searchGoods_cls-7" width="18" height="18"></rect>
													<rect class="searchGoods_cls-8" x="-0.5" y="-0.5" width="19" height="19"></rect>
												</g>
											</g>
										</g>
										<path class="searchGoods_cls-4" d="M71.042,124.9a2.121,2.121,0,0,0-2.1-2.143h-8.4a2.121,2.121,0,0,0-2.1,2.143l-.7,10.714a2.121,2.121,0,0,0,2.1,2.143h9.8a2.121,2.121,0,0,0,2.1-2.143Zm-6.3,5.73a4.43,4.43,0,0,1-4.426-4.425.6.6,0,0,1,1.2,0,3.225,3.225,0,1,0,6.45,0,.6.6,0,0,1,1.2,0A4.429,4.429,0,0,1,64.743,130.632Z"></path>
									</g>
									<g transform="translate(252.257 145.741)">
										<g>
											<g>
												<g class="searchGoods_cls-5" transform="translate(55.743 121.259)">
													<rect class="searchGoods_cls-7" width="18" height="18"></rect>
													<rect class="searchGoods_cls-8" x="-0.5" y="-0.5" width="19" height="19"></rect>
												</g>
											</g>
										</g>
										<path class="searchGoods_cls-6" d="M71.042,124.9a2.121,2.121,0,0,0-2.1-2.143h-8.4a2.121,2.121,0,0,0-2.1,2.143l-.7,10.714a2.121,2.121,0,0,0,2.1,2.143h9.8a2.121,2.121,0,0,0,2.1-2.143Zm-6.3,5.73a4.43,4.43,0,0,1-4.426-4.425.6.6,0,0,1,1.2,0,3.225,3.225,0,1,0,6.45,0,.6.6,0,0,1,1.2,0A4.429,4.429,0,0,1,64.743,130.632Z"></path>
									</g>
								</g>
							</svg><span>搜商品</span></div>
						<div class="_jIuEjZsm">搜带货视频</div>
						<div class="_jIuEjZsm">搜种草视频</div>
						<div class="_jIuEjZsm _3_pdiDbl"><svg width="18.001" height="18.004" viewBox="0 0 18.001 18.004" class="_2ya-WN18">
								<g transform="translate(-515 -269.5)">
									<path fill="#fe2c55" d="M8.95,17v0l0-.058L.18,6.6A.7.7,0,0,1,0,6.131a.606.606,0,0,1,.153-.41L3.905.248A.694.694,0,0,1,4.405,0h9.2a.6.6,0,0,1,.5.248l3.739,5.487a.59.59,0,0,1,.153.41.547.547,0,0,1-.222.454L9.007,16.943V17l-.028-.027L8.951,17Zm-.07-12.6a1,1,0,0,0-1,1V8.192a1.006,1.006,0,0,0,1,1,.989.989,0,0,0,.6-.2L11.32,7.6a1,1,0,0,0,0-1.6L9.478,4.612A.987.987,0,0,0,8.879,4.408Z"
									 transform="translate(515 270.5)"></path>
									<path fill="#25f4ee" d="M8.95,17v0l0-.058L.18,6.6A.7.7,0,0,1,0,6.131a.606.606,0,0,1,.153-.41L3.905.248A.694.694,0,0,1,4.405,0h9.2a.6.6,0,0,1,.5.248l3.739,5.487a.59.59,0,0,1,.153.41.547.547,0,0,1-.222.454L9.007,16.943V17l-.028-.027L8.951,17Zm-.07-12.6a1,1,0,0,0-1,1V8.192a1.006,1.006,0,0,0,1,1,.989.989,0,0,0,.6-.2L11.32,7.6a1,1,0,0,0,0-1.6L9.478,4.612A.987.987,0,0,0,8.879,4.408Z"
									 transform="translate(515 269.5)"></path>
									<path fill="#fff" d="M8.95,17v0l0-.058L.18,6.6A.7.7,0,0,1,0,6.131a.606.606,0,0,1,.153-.41L3.905.248A.694.694,0,0,1,4.405,0h9.2a.6.6,0,0,1,.5.248l3.739,5.487a.59.59,0,0,1,.153.41.547.547,0,0,1-.222.454L9.007,16.943V17l-.028-.027L8.951,17Zm-.07-12.6a1,1,0,0,0-1,1V8.192a1.006,1.006,0,0,0,1,1,.989.989,0,0,0,.6-.2L11.32,7.6a1,1,0,0,0,0-1.6L9.478,4.612A.987.987,0,0,0,8.879,4.408Z"
									 transform="translate(515 270)"></path>
								</g>
							</svg><span>搜品牌创意视频</span></div>
						<div class="_3ObVFtrt"></div>
						<div class="_jIuEjZsm _3_pdiDbl"><svg width="20" height="20" viewBox="0 0 20 20" class="_2ya-WN18">
								<g transform="translate(-315 -264)">
									<path fill="#fe2c55" d="M-163.646-46.92s-.149.115-.218.183a1.609,1.609,0,0,0,.006,2.274,1.6,1.6,0,0,0,2.263,0c.068-.068.183-.219.183-.219s-.327-.229-.427-.314a16.912,16.912,0,0,1-1.509-1.511C-163.429-46.6-163.646-46.92-163.646-46.92Zm13.828-5.828-5.765-5.777a1.061,1.061,0,0,0-1.5,0,1.066,1.066,0,0,0,0,1.505l5.41,5.421a4.381,4.381,0,0,1,1.8-.385c.123,0,.245,0,.366.015A1.061,1.061,0,0,0-149.818-52.748Zm1.11-.375a4.826,4.826,0,0,0,1.155-.855,4.809,4.809,0,0,0,0-6.792,4.787,4.787,0,0,0-6.78,0,4.781,4.781,0,0,0-.853,1.158Zm-8.552-2.543c-.665.806-4.077,4.943-5.238,6.465a1.536,1.536,0,0,0,.02,2.072l1.285,1.287a1.525,1.525,0,0,0,2.069.02c1.5-1.19,5.645-4.586,6.453-5.247Zm-1.075,6.436,0,0a.535.535,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0v0a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76Zm1.49-1.493a.536.536,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0l1-1.006a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76h0Z"
									 transform="translate(481.149 327.995)"></path>
									<path fill="#26ede7" d="M-163.646-46.92s-.149.115-.218.183a1.609,1.609,0,0,0,.006,2.274,1.6,1.6,0,0,0,2.263,0c.068-.068.183-.219.183-.219s-.327-.229-.427-.314a16.912,16.912,0,0,1-1.509-1.511C-163.429-46.6-163.646-46.92-163.646-46.92Zm13.828-5.828-5.765-5.777a1.061,1.061,0,0,0-1.5,0,1.066,1.066,0,0,0,0,1.505l5.41,5.421a4.381,4.381,0,0,1,1.8-.385c.123,0,.245,0,.366.015A1.061,1.061,0,0,0-149.818-52.748Zm1.11-.375a4.826,4.826,0,0,0,1.155-.855,4.809,4.809,0,0,0,0-6.792,4.787,4.787,0,0,0-6.78,0,4.781,4.781,0,0,0-.853,1.158Zm-8.552-2.543c-.665.806-4.077,4.943-5.238,6.465a1.536,1.536,0,0,0,.02,2.072l1.285,1.287a1.525,1.525,0,0,0,2.069.02c1.5-1.19,5.645-4.586,6.453-5.247Zm-1.075,6.436,0,0a.535.535,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0v0a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76Zm1.49-1.493a.536.536,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0l1-1.006a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76h0Z"
									 transform="translate(479.331 326.177)"></path>
									<path fill="#fff" d="M-163.646-46.92s-.149.115-.218.183a1.609,1.609,0,0,0,.006,2.274,1.6,1.6,0,0,0,2.263,0c.068-.068.183-.219.183-.219s-.327-.229-.427-.314a16.912,16.912,0,0,1-1.509-1.511C-163.429-46.6-163.646-46.92-163.646-46.92Zm13.828-5.828-5.765-5.777a1.061,1.061,0,0,0-1.5,0,1.066,1.066,0,0,0,0,1.505l5.41,5.421a4.381,4.381,0,0,1,1.8-.385c.123,0,.245,0,.366.015A1.061,1.061,0,0,0-149.818-52.748Zm1.11-.375a4.826,4.826,0,0,0,1.155-.855,4.809,4.809,0,0,0,0-6.792,4.787,4.787,0,0,0-6.78,0,4.781,4.781,0,0,0-.853,1.158Zm-8.552-2.543c-.665.806-4.077,4.943-5.238,6.465a1.536,1.536,0,0,0,.02,2.072l1.285,1.287a1.525,1.525,0,0,0,2.069.02c1.5-1.19,5.645-4.586,6.453-5.247Zm-1.075,6.436,0,0a.535.535,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0v0a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76Zm1.49-1.493a.536.536,0,0,1-.758,0h0a.538.538,0,0,1,0-.76h0l1-1.006a.537.537,0,0,1,.759,0h0a.539.539,0,0,1,0,.76h0Z"
									 transform="translate(480.24 327.086)"></path>
								</g>
							</svg><span>搜主播</span></div>
						<div class="_jIuEjZsm">搜直播</div>
					</div> -->
					<div style="height: 38px; background: rgba(43, 43, 46, 0.9);"></div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	import qs from 'qs';
	export default {
		name: 'searchDialog',
		data() {
			return {
				kw:''
			}
		},
		computed: {
			...mapGetters(['publicSearchShow'])
		},
		components: {

		},
		beforeCreate() {

		},
		created() {
		},
		mounted() {

		},

    directives: {
    focus: {
    // 指令的定义
    inserted: function (el) {
    el.focus()
    }
    }
    },
		methods: {

			closeFn() {
				this.$store.state.publicSearchShow = false
			}
		},
	}
</script>

<style scoped>
	.searchGoods_cls-1,
	.searchGoods_cls-2 {
		fill: #fe2c55;
	}

	.searchGoods_cls-1,
	.searchGoods_cls-3,
	.searchGoods_cls-5 {
		stroke: #f2f2f2;
		stroke-miterlimit: 10;
		opacity: 0;
	}

	.searchGoods_cls-3,
	.searchGoods_cls-4 {
		fill: #25f4ee;
	}

	.searchGoods_cls-5,
	.searchGoods_cls-6 {
		fill: #fff;
	}

	.searchGoods_cls-7 {
		stroke: none;
	}

	.searchGoods_cls-8 {
		fill: none;
	}
	._27QdPw87 .ant-modal-content {
	    border-radius: 0;
	}
	.ant-modal-content {
		color: #fff;
	    background-color: #55555a!important;

	}
	.ant-modal-content {
	    position: relative;
	    background-color: #2b2b2e;
	    background-clip: padding-box;
	    border: 0;
	    border-radius: 4px;
	    -webkit-box-shadow: 0 4px 12px rgba(0,0,0,.15);
	    box-shadow: 0 4px 12px rgba(0,0,0,.15);
	    pointer-events: auto;
	}
	*, :after, :before {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	user agent stylesheet
	div {
	    display: block;
	}
	.ant-modal {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    top: 100px;
	    width: auto;
	    margin: 0 auto;
	    padding: 0 0 24px;
	    pointer-events: none;
	}
	._2-ZfaS6I {
	    position: absolute;
	    font-size: 24px;
	    right: 232px;
	    top: -66px;
	    cursor: pointer;
	    line-height: 1;
	}
	.anticon {
	    display: inline-block;
	    color: inherit;
	    font-style: normal;
	    line-height: 0;
	    text-align: center;
	    text-transform: none;
	    vertical-align: -.125em;
	    text-rendering: optimizeLegibility;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	._2-ZfaS6I {
	    position: absolute;
	    font-size: 24px;
	    right: 232px;
	    top: -66px;
	    cursor: pointer;
	    line-height: 1;
	}
	._23uPe3WZ {
	    height: 80px;
	    background: #3a3a3e;
	    padding-left: 228px;
	    padding-right: 228px;
	    display: flex;
	    align-items: center;
	}
	*, :after, :before {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-modal-body {
	    padding: 24px;
	    font-size: 14px;
	    line-height: 1.5;
	    word-wrap: break-word;
	}
	._23uPe3WZ .anticon {
	    font-size: 24px;
	    margin-right: 50px;
	}
	.anticon svg {
	    display: inline-block;
	}
	svg:not(:root) {
	    overflow: hidden;
	}
	.anticon>* {
	    line-height: 1;
	}
	[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
	    -ms-touch-action: manipulation;
	    touch-action: manipulation;
	}
	._3wj-fWTO {
	    background: rgba(43,43,46,.9);
	    padding-left: 296px;
	    display: flex;
	    align-items: center;
	}
	._3_pdiDbl {
	    background-color: #55555a;
	}
	._jIuEjZsm {
	    padding: 0 16px;
	    border-radius: 4px;
	    height: 40px;
	    box-sizing: border-box;
	    line-height: 40px;
	    background: rgba(58,58,62,.9);
	    cursor: pointer;
	    -webkit-transition: all .2s ease;
	    transition: all .2s ease;
	    white-space: nowrap;
	}
	._2ya-WN18 {
	    margin-right: 4px;
	    vertical-align: middle;
	}
	._jIuEjZsm:not(:first-child) {
	    margin-left: 24px;
	}
	._jIuEjZsm {
	    padding: 0 16px;
	    border-radius: 4px;
	    height: 40px;
	    box-sizing: border-box;
	    line-height: 40px;
	    background: rgba(58,58,62,.9);
	    cursor: pointer;
	    -webkit-transition: all .2s ease;
	    transition: all .2s ease;
	    white-space: nowrap;
	}
	._3ObVFtrt {
	    width: 2px;
	    height: 24px;
	    background: #6d6d6d;
	    margin-left: 32px;
	    margin-right: 32px;
	}
	._jIuEjZsm:not(:first-child) {
	    margin-left: 24px;
	}
	._3_pdiDbl {
	    background-color: #55555a;
	}
	._jIuEjZsm {
	    padding: 0 16px;
	    border-radius: 4px;
	    height: 40px;
	    box-sizing: border-box;
	    line-height: 40px;
	    background: rgba(58,58,62,.9);
	    cursor: pointer;
	    -webkit-transition: all .2s ease;
	    transition: all .2s ease;
	    white-space: nowrap;
	}
	._3wj-fWTO {
	    background: rgba(43,43,46,.9);
	    padding-left: 296px;
	    display: flex;
	    align-items: center;
	}
	._3_pdiDbl {
	    background-color: #55555a;
	}
	.ant-input {
	    padding-right: 34px;
	}
	.ant-input-lg {
	    height: 40px;
	    padding: 6px 11px;
	    font-size: 16px;
	}
	.ant-input {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    font-variant: tabular-nums;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    display: inline-block;
	    width: 100%;
	    height: 32px;
	    padding: 4px 11px;
	    color: #e8edee;
	    font-size: 14px;
	    line-height: 1.5;
	    background-color: #2b2b2e;
	    background-image: none;
	    border: 1px solid #6d6d6d;
	    border-radius: 4px;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	}
	._jIuEjZsm:hover {
	    background: #ff7800;
	}
	._2dLoj_zS {
	    border: 0!important;
	    background: transparent!important;
	    outline: none!important;
	    height: 64px!important;
	    font-size: 28px!important;
	    caret-color: #ff7800;
	}
	._27QdPw87 .ant-modal-body {
	    padding: 0;
	}
	.ant-modal-body {
	    padding: 0px;
	    font-size: 14px;
	    line-height: 1.5;
	    word-wrap: break-word;
	}
	.beijingColor{
		background-color: transparent;
	}
	>>>.el-dialog__body{
		padding: 0px;
	}
	>>>.el-dialog__header{
		background-color: transparent;
	}
	>>>.el-dialog{
		background-color: transparent;
	}
	>>>.el-dialog__headerbtn .el-dialog__close {
		color: #909399;
		display: none;
	}
</style>
