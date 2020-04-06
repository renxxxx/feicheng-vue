<template>
	<div id="searchDetails">
		<topNav></topNav>
		<el-row class="height" :gutter='17'>
			<el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="height">
				<div class="leftNav">
					<div class="_1cGmRv6B">
						<div class="_3ykadlND">
							<div class="_28OpAn63">
								<div class="_3mUgA-Vh">
									<a target="_blank" rel="noopener noreferrer" href="https://www.iesdouyin.com/share/user/104255897823">
										<img alt="pic" class="_3t5L3W5T" :src="message.logo">
									</a>
									<div class="_3DQ4NUnP">
										<div class="_2Y7mZtYv">
											<span class="_oBww4Ylt">曝光量:</span>
											<span class="_s6WSF95M">{{message.pv}}</span>
										</div>
										<!-- <div class="_1QJ7qoKs">时事 · NO.1</div> -->
									</div>
								</div>
							</div>
							<div class="_3Mt2vQgI">
								<div class="_1bv9Xtl-">
									<span class="xd-ellipsis _3rF1A6fj" :title="message.name">{{message.name}}</span>
									<span class="_8TRvoTKy">{{message.wx}}</span>
								</div>
								<div class="_1bv9Xtl-">
									<svg v-if="shouchangData" @click="shouchangFn('false')" width="2em" height="2em" viewBox="0 0 19.033 19.019" class="_39iY1Rho">
										<path fill="none" stroke="currentColor" d="M14.092 18.5a1.777 1.777 0 0 1-.8-.213l-3.77-1.958-3.8 1.955a1.661 1.661 0 0 1-1.808-.142 1.865 1.865 0 0 1-.678-1.778l.776-4.179-2.974-2.882a1.951 1.951 0 0 1-.463-1.839l.006-.021a1.743 1.743 0 0 1 1.4-1.235l4.132-.78 1.853-3.911A1.747 1.747 0 0 1 9.511.5a1.7 1.7 0 0 1 1.555 1.028l1.849 3.9 4.133.75a1.705 1.705 0 0 1 1.377 1.249 1.858 1.858 0 0 1-.431 1.845l-.01.011-2.966 2.9.748 4.181a1.832 1.832 0 0 1-.67 1.767 1.552 1.552 0 0 1-1.004.369z"></path>
									</svg>
									<svg v-if="!shouchangData" @click="shouchangFn('true')" width="2em" height="2em" viewBox="0 0 19.033 19.019" class="_39iY1Rho" style="color: #ff7800;">
										<path fill="#ff7800" stroke="currentColor" d="M14.092 18.5a1.777 1.777 0 0 1-.8-.213l-3.77-1.958-3.8 1.955a1.661 1.661 0 0 1-1.808-.142 1.865 1.865 0 0 1-.678-1.778l.776-4.179-2.974-2.882a1.951 1.951 0 0 1-.463-1.839l.006-.021a1.743 1.743 0 0 1 1.4-1.235l4.132-.78 1.853-3.911A1.747 1.747 0 0 1 9.511.5a1.7 1.7 0 0 1 1.555 1.028l1.849 3.9 4.133.75a1.705 1.705 0 0 1 1.377 1.249 1.858 1.858 0 0 1-.431 1.845l-.01.011-2.966 2.9.748 4.181a1.832 1.832 0 0 1-.67 1.767 1.552 1.552 0 0 1-1.004.369z"></path>
									</svg>
									<svg width="18" height="18" viewBox="0 0 18 18" class="_oHy0nPgB" style="display:none;">
										<g transform="translate(-154.309 -154.639)">
											<path fill="currentColor" d="M324.955,460.277a1.146,1.146,0,1,0,.812.335A1.158,1.158,0,0,0,324.955,460.277Zm-3.852,0a1.146,1.146,0,1,0,.812.335A1.159,1.159,0,0,0,321.1,460.277Zm7.7,0a1.146,1.146,0,1,0,.812.335A1.159,1.159,0,0,0,328.807,460.277Z"
											 transform="translate(-161.486 -297.946)"></path>
											<path fill="currentColor" d="M171.6,160.135a9.036,9.036,0,1,0,.707,3.5,8.958,8.958,0,0,0-.707-3.5Zm-8.293,11.489a7.986,7.986,0,1,1,7.986-7.986,8,8,0,0,1-7.986,7.986Z"
											 transform="translate(0 0)"></path>
										</g>
									</svg>
								</div>
							</div>
							<div class="_LGIbpsVE">
								<div class="_1AvzJLf2">
									<!-- <svg width="1em" height="1em" viewBox="0 0 16 16" class="_2Drxa6un _GOHxE8_f">
										<g transform="translate(-982 -658)">
											<circle cx="8" cy="8" r="8" transform="translate(982 658)" fill="#fff"></circle>
											<path d="M72,64a8,8,0,1,0,8,8A8,8,0,0,0,72,64Zm3.455,5.388L71.695,74.6a.568.568,0,0,1-.923,0l-2.227-3.086a.143.143,0,0,1,.116-.227H69.5a.569.569,0,0,1,.463.238l1.271,1.764L74.039,69.4a.571.571,0,0,1,.463-.238h.837A.143.143,0,0,1,75.455,69.388Z"
											 transform="translate(918 594)" fill="currentColor"></path>
										</g>
									</svg> -->
									<span>地址:{{message.area1Name}}&nbsp;&nbsp;{{message.area2Name}}</span>
								</div>
							</div>
						</div>
						<div class="_YylL3JYu">
							<div class="_2kHrt_Qw">
								<div class="_3-AyKNj7">
									<!-- <div class="_2xKK16yA">
										<span class="_2LqxHFsa">
											<span class="_3CsMZ-r3">性别：</span>
											<span class="_3Im3NTem">未知</span>
										</span><span class="_2LqxHFsa">
											<span class="_3CsMZ-r3">地区：</span>
											<span class="_3Im3NTem">北京</span>
										</span>
									</div> -->
									<!-- <div class="_2xKK16yA">
										<span class="_2LqxHFsa">
											<span class="_3CsMZ-r3">年龄：</span>
											<span class="_3Im3NTem">未知</span>
										</span>
										<span class="_2LqxHFsa">
											<span class="_3CsMZ-r3">星座：</span>
											<span class="_3Im3NTem">未知</span>
										</span>
									</div> -->
									<div class="_2xKK16yA">
										<span class="_3CsMZ-r3">简介：</span>
										<span class="_3Im3NTem">{{message.brief}}</span>
									</div>
									<div class="_2xKK16yA">
										<span class="_3CsMZ-r3">收录时间：</span>
										<span class="_3Im3NTem">{{moment(message.createTime).format('YYYY-MM-DD')}}</span>
									</div>
								</div>
								<div class="_2FDGiJrn"></div>
								<div class="_3p_jzZA2">
									<span class="_3CsMZ-r3">内容标签：</span>
									<div class="_nPO2a5S2">
										<span class="_DuKD6by7" v-for="(item,inx) in message.wxVideoaccountRealmList" :key="inx">{{item.name}}</span>
									</div>
								</div>
								<div class="_2FDGiJrn"></div>
								<div class="ant-row-flex ant-row-flex-middle" style="margin-left: -5px; margin-right: -5px; margin-bottom: 16px;">
									<div class="ant-col _3CsMZ-r3" style="padding-left: 5px; padding-right: 5px;">数据表现&nbsp;&nbsp;&nbsp;|</div>
									<div class="ant-col" style="padding-left: 5px; padding-right: 5px; color: rgb(120, 122, 122);">更新于&nbsp;<span
										 class="_1mkksQJW">2 小时前</span></div>
									<div @click="gengxinFn" class="ant-col" style="padding-left: 5px; padding-right: 5px; color: rgb(255, 120, 0); cursor: pointer;"><i
										 aria-label="图标: sync" class="anticon anticon-sync"><svg viewBox="64 64 896 896" focusable="false" class=""
											 data-icon="sync" width="1em" height="1em" fill="currentColor" aria-hidden="true">
												<path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2z"></path>
											</svg></i>更新</div>
								</div>
								<div class="_2MNuenrz">
									<div class="_3uYJipmG">
										<div><svg width="16" height="16" viewBox="0 0 16 16" class="_2Xw0et9Q">
												<g transform="translate(0.338 0.338)">
													<rect fill="none" width="16" height="16" transform="translate(-0.338 -0.338)"></rect>
													<g transform="translate(1.676 0.562)">
														<path fill="currentColor" d="M5.828,13.649H1.442A1.414,1.414,0,0,1,0,12.269v-2.5A3.378,3.378,0,0,1,1.068,7.311,3.583,3.583,0,0,1,2.14,6.6,3.19,3.19,0,0,1,.99,5.61,2.953,2.953,0,0,1,.439,3.895,3.131,3.131,0,0,1,3.634.839a3.231,3.231,0,0,1,2.34.975A3.076,3.076,0,0,1,7.047.562,3.274,3.274,0,0,1,8.894,0a3.132,3.132,0,0,1,3.2,3.056,2.954,2.954,0,0,1-.551,1.717,3.157,3.157,0,0,1-1.15.987,3.637,3.637,0,0,1,1.073.713,3.39,3.39,0,0,1,1.073,2.454v2.5a1.414,1.414,0,0,1-1.442,1.38H7.154A1.445,1.445,0,0,1,5.828,13.649ZM3.632,7.37a2.544,2.544,0,0,0-1.768.7,2.327,2.327,0,0,0-.736,1.691v2.5a.305.305,0,0,0,.312.3H5.825a.314.314,0,0,0,.219-.088.283.283,0,0,0,.092-.21v-2.5A2.327,2.327,0,0,0,5.426,8.1l0-.006-.015-.015L5.4,8.074A2.544,2.544,0,0,0,3.632,7.37Zm5.262-.839a2.541,2.541,0,0,0-1.768.705,2.384,2.384,0,0,0-.466.611,3.335,3.335,0,0,1,.607,1.918v1.963h3.819a.305.305,0,0,0,.312-.3v-2.5a2.327,2.327,0,0,0-.735-1.691A2.545,2.545,0,0,0,8.894,6.531ZM6.553,5.136A3.144,3.144,0,0,1,5.126,6.6a3.626,3.626,0,0,1,.731.424,3.687,3.687,0,0,1,.47-.55A3.642,3.642,0,0,1,7.4,5.758,3.174,3.174,0,0,1,6.553,5.136ZM3.632,1.919a2.094,2.094,0,0,0-1.46.579,1.915,1.915,0,0,0,0,2.793,2.133,2.133,0,0,0,2.922,0,1.913,1.913,0,0,0,0-2.793A2.094,2.094,0,0,0,3.632,1.919ZM8.894,1.08a2.093,2.093,0,0,0-1.46.579,1.914,1.914,0,0,0,0,2.793,2.13,2.13,0,0,0,2.92,0,1.914,1.914,0,0,0,0-2.793A2.094,2.094,0,0,0,8.894,1.08Z"
														 transform="translate(0 0)"></path>
													</g>
												</g>
											</svg><span>粉丝数</span></div>
										<div class="_tLnD2bXY">{{message.fansCount}}</div>
									</div>
									<div class="_3uYJipmG">
										<div><svg width="14" height="14" viewBox="0 0 14 14" class="_2Xw0et9Q">
												<g transform="translate(0 0.021)">
													<rect fill="none" width="14" height="14" transform="translate(0 -0.021)"></rect>
													<g transform="translate(0.581 0.619)">
														<path fill="currentColor" d="M424.287,349.529l3.123-2.614a.2.2,0,0,0,0-.3L424.287,344a.176.176,0,0,0-.287.147v5.23A.177.177,0,0,0,424.287,349.529Z"
														 transform="translate(-419.114 -340.652)"></path>
														<path fill="currentColor" d="M124.027,112H112.5a.5.5,0,0,0-.5.489v11.25a.5.5,0,0,0,.5.489h11.526a.5.5,0,0,0,.5-.489v-11.25A.5.5,0,0,0,124.027,112Zm-.626,11.127H113.127V113.1H123.4Z"
														 transform="translate(-112 -112)"></path>
													</g>
												</g>
											</svg><span>视频量</span></div>
										<div class="_tLnD2bXY">{{message.videoCount}}</div>
									</div>
									<div class="_3uYJipmG">
										<div><i aria-label="图标: heart" class="anticon anticon-heart"><svg viewBox="64 64 896 896" focusable="false"
												 class="" data-icon="heart" width="1em" height="1em" fill="currentColor" aria-hidden="true">
													<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
												</svg></i><span>总获赞</span></div>
										<div class="_tLnD2bXY">{{message.likeCount}}</div>
									</div>
									<div class="_3uYJipmG">
										<div><svg width="14" height="14" viewBox="0 0 14 14" class="_2Xw0et9Q">
												<path d="M0 0h14v14H0z" fill="none"></path>
												<path d="M1.755 6.661a2.543 2.543 0 0 0 2.014.863A2.685 2.685 0 0 0 5.9 6.6a3.559 3.559 0 0 0 .8-2.419 3.453 3.453 0 0 0-.728-2.338 2.538 2.538 0 0 0-2.027-.839 2.723 2.723 0 0 0-2.153.912 3.607 3.607 0 0 0-.8 2.46 3.348 3.348 0 0 0 .763 2.285zm.909-4.034a1.464 1.464 0 0 1 1.231-.6 1.379 1.379 0 0 1 1.183.573 2.72 2.72 0 0 1 .42 1.624 2.806 2.806 0 0 1-.428 1.665 1.418 1.418 0 0 1-1.216.592 1.439 1.439 0 0 1-1.2-.571 2.6 2.6 0 0 1-.441-1.621 2.7 2.7 0 0 1 .451-1.663zm8.037-1.439l-7.831 12.7h1.314l7.831-12.7zM9.052 13.125a2.525 2.525 0 0 0 2.019.876 2.68 2.68 0 0 0 2.118-.925 4.089 4.089 0 0 0 .078-4.78 2.532 2.532 0 0 0-2.022-.842 2.691 2.691 0 0 0-2.145.925 3.654 3.654 0 0 0-.8 2.471 3.37 3.37 0 0 0 .752 2.274zm.894-4.016a1.455 1.455 0 0 1 1.244-.6 1.4 1.4 0 0 1 1.176.563 2.626 2.626 0 0 1 .428 1.621 2.819 2.819 0 0 1-.428 1.663 1.414 1.414 0 0 1-1.216.594 1.435 1.435 0 0 1-1.2-.573 2.572 2.572 0 0 1-.441-1.6 2.758 2.758 0 0 1 .437-1.669z"
												 fill="#cdcfcf"></path>
											</svg><span>曝光量</span></div>
										<div class="_tLnD2bXY">{{message.pv}}</div>
									</div>
								</div>
								<!-- <div class="ant-row-flex ant-row-flex-space-between" style="margin-bottom: 16px;">
									<div class="ant-col">
										<div class="_2xKK16yA _3CsMZ-r3">作品特征:</div>
									</div>
								</div> -->
								<div class="_2MNuenrz">
									<!-- <div class="_3uYJipmG">
										<div><svg width="14" height="14" viewBox="0 0 14 14" class="_2Xw0et9Q">
												<g transform="translate(-0.003 -0.003)">
													<rect fill="none" width="14" height="14" transform="translate(0.003 0.003)"></rect>
													<g transform="translate(0.875 0.875)">
														<path fill="currentColor" d="M10.179,12H1.822a.965.965,0,0,1-.964-.964V7.714a.482.482,0,1,1,.964,0v3.321h8.357V7.714a.482.482,0,1,1,.964,0v3.321A.965.965,0,0,1,10.179,12Zm-.5-5.986a2.31,2.31,0,0,1-1.835-.9,2.324,2.324,0,0,1-3.676-.009A2.324,2.324,0,0,1,0,3.69V.964A.965.965,0,0,1,.964,0H11.036A.965.965,0,0,1,12,.964V3.69A2.326,2.326,0,0,1,9.676,6.014ZM8.317.964V3.69a1.359,1.359,0,1,0,2.719,0V.964Zm-3.67,0V3.69a1.36,1.36,0,0,0,2.711.153c0-.044-.005-.091-.005-.153V.964ZM.964.964V3.69a1.359,1.359,0,1,0,2.719,0V.964Z"
														 transform="translate(0.128 0.128)"></path>
													</g>
												</g>
											</svg><span>带货比例</span><svg width="14" height="14" viewBox="0 0 14 14" class="_OORY38eE">
												<g>
													<path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z"
													 transform="translate(0 0)" fill="currentColor"></path>
												</g>
											</svg></div>
										<div class="_tLnD2bXY">0.00%</div>
									</div> -->
									<!-- <div class="_3uYJipmG">
										<div><svg width="14" height="13" viewBox="0 0 14 13" class="_2Xw0et9Q">
												<g fill="none" transform="translate(1 1)">
													<path stroke="none" stroke-linecap="round" stroke-linejoin="round" d="M6.624,11H5.316V6.231A5.855,5.855,0,0,1,1.678,4.938,4.29,4.29,0,0,1,0,1.6V0H1.394a3.463,3.463,0,0,1,1.35.307,5.887,5.887,0,0,1,1.324.8A6.229,6.229,0,0,1,5.957,3.486a6.514,6.514,0,0,1,.8-1.219A8.005,8.005,0,0,1,7.878,1.143,5.969,5.969,0,0,1,9.181.32,3.277,3.277,0,0,1,10.518,0H12V1.505a4.243,4.243,0,0,1-.458,1.929,4.74,4.74,0,0,1-1.2,1.493A5.6,5.6,0,0,1,6.8,6.231H6.624V11Z"></path>
													<path fill="#cdcfcf" stroke="none" d="M 6.623559951782227 11 L 6.623559951782227 10.99975967407227 L 6.623559951782227 6.231229305267334 L 6.797490119934082 6.231229305267334 C 8.067489624023438 6.231229305267334 9.361040115356445 5.755659580230713 10.34640026092529 4.926419734954834 C 10.85750007629395 4.496299743652344 11.25984001159668 3.99420952796936 11.5423002243042 3.433889627456665 C 11.84591007232666 2.832139492034912 12 2.183289527893066 12 1.505079507827759 L 12 -4.76837158203125e-07 L 10.51836013793945 -4.76837158203125e-07 C 10.10186004638672 -4.76837158203125e-07 9.651789665222168 0.1074695214629173 9.181010246276855 0.3198095262050629 C 8.747940063476563 0.5148695111274719 8.309639930725098 0.7920694947242737 7.878310203552246 1.143369555473328 C 7.477930068969727 1.469569563865662 7.089759826660156 1.85802948474884 6.755859851837158 2.26660943031311 C 6.428060054779053 2.667859554290771 6.151909828186035 3.089699506759644 5.957499980926514 3.485969543457031 C 5.613570213317871 2.651049613952637 4.924839973449707 1.784409523010254 4.068290233612061 1.108099579811096 C 3.63631010055542 0.7669795155525208 3.1910400390625 0.4973495304584503 2.744669914245605 0.3065595328807831 C 2.268879890441895 0.103209525346756 1.814229965209961 -4.76837158203125e-07 1.394240021705627 -4.76837158203125e-07 L -8.881784197001252e-16 -4.76837158203125e-07 L -8.881784197001252e-16 1.598819494247437 C -8.881784197001252e-16 2.870019435882568 0.5956599712371826 4.055999755859375 1.677579998970032 4.938259601593018 C 2.68560004234314 5.7599196434021 4.012060165405273 6.231229305267334 5.316289901733398 6.231229305267334 L 5.316289901733398 11 L 6.623559951782227 11 M 6.623559951782227 12 L 5.316289901733398 12 C 4.764009952545166 12 4.316289901733398 11.55227947235107 4.316289901733398 11 L 4.316289901733398 7.153909683227539 C 3.12518572807312 6.970614910125732 1.971302509307861 6.4678053855896 1.045760035514832 5.713379383087158 C -0.2735199928283691 4.637559413909912 -1 3.176359415054321 -1 1.598819494247437 L -1 -4.76837158203125e-07 C -1 -0.5522804856300354 -0.5522800087928772 -1.000000476837158 -8.881784197001252e-16 -1.000000476837158 L 1.394240021705627 -1.000000476837158 C 1.950219988822937 -1.000000476837158 2.536799907684326 -0.8697904944419861 3.137670040130615 -0.6129804849624634 C 3.66523003578186 -0.3874904811382294 4.186840057373047 -0.07248047739267349 4.688029766082764 0.3232895135879517 C 5.176759243011475 0.7091758847236633 5.619492053985596 1.152466893196106 5.991436958312988 1.621728539466858 C 6.365203380584717 1.166078209877014 6.7989182472229 0.7329021692276001 7.246679782867432 0.3680995106697083 C 7.745779991149902 -0.03840047866106033 8.258370399475098 -0.3613804876804352 8.770330429077148 -0.5919705033302307 C 9.370450019836426 -0.862650454044342 9.95872974395752 -1.000000476837158 10.51836013793945 -1.000000476837158 L 12 -1.000000476837158 C 12.55228042602539 -1.000000476837158 13 -0.5522804856300354 13 -4.76837158203125e-07 L 13 1.505079507827759 C 13 2.340919494628906 12.80994033813477 3.141419410705566 12.43509960174561 3.884349584579468 C 12.09162998199463 4.565699577331543 11.60546970367432 5.173829555511475 10.99028968811035 5.691539287567139 C 10.04068374633789 6.490683555603027 8.847289085388184 7.011487007141113 7.623559951782227 7.175555229187012 L 7.623559951782227 10.99975967407227 C 7.623559951782227 11.55203914642334 7.175839900970459 12 6.623559951782227 12 Z"></path>
												</g>
											</svg><span>种草比例</span><svg width="14" height="14" viewBox="0 0 14 14" class="_OORY38eE">
												<g>
													<path d="M7,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.9,9.9A6.955,6.955,0,0,1,7,14ZM7,.984a6.017,6.017,0,0,0-2.34,11.559,6.016,6.016,0,0,0,6.594-9.8A5.99,5.99,0,0,0,7,.984ZM6.911,11.108a.592.592,0,1,1,.3-.079A.594.594,0,0,1,6.911,11.108Zm.018-2.032-.037,0H6.88a.494.494,0,0,1-.442-.539A3.168,3.168,0,0,1,7.556,6.751c.883-.883.9-1.162.912-1.458a1.269,1.269,0,0,0-.361-.945A1.537,1.537,0,0,0,7,3.874a1.473,1.473,0,0,0-1.469,1.47.492.492,0,0,1-.984,0A2.453,2.453,0,0,1,6.992,2.89H7a2.525,2.525,0,0,1,1.825.78,2.244,2.244,0,0,1,.631,1.675c-.035.634-.23,1.133-1.2,2.1-.492.491-.8.861-.834,1.185A.49.49,0,0,1,6.929,9.077Z"
													 transform="translate(0 0)" fill="currentColor"></path>
												</g>
											</svg></div>
										<div class="_tLnD2bXY">0.00%</div>
									</div> -->
								</div>
								<div class="_2FDGiJrn"></div>
								<div class="_2xKK16yA _3CsMZ-r3" style="display:none;">功能使用:</div>
								<div class="_3AY-U6s2 _9_0nVGYy" style="display:none;">
									<div class="_3csJM3dK"><i aria-label="图标: close" class="anticon anticon-close _2kyZIIaT"><svg viewBox="64 64 896 896"
											 focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
												<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
											</svg></i><span class=""><svg width="14" height="14" viewBox="0 0 14 14" class="_2eY0UiF6">
												<g isolation="isolate" transform="translate(-252.459 -1612.946)">
													<path fill="currentColor" d="M255.7,1612.946a1.586,1.586,0,0,0-1.395.828l-1.748,3.218c-.742,2.171,2.858,3.706,4.171,2.883a.748.748,0,0,1,.747-.048,3.637,3.637,0,0,0,3.715-.1.74.74,0,0,1,.748-.1c1.038.475,3.753,1.317,4.506-2.438a.737.737,0,0,0-.069-.469,33.5,33.5,0,0,0-1.716-3.07,1.585,1.585,0,0,0-1.325-.71Z"
													 transform="translate(0 0)"></path>
													<path fill="currentColor" d="M264.432,1637.356h-6.873a2.352,2.352,0,0,1-2.4-2.3v-3.238a.648.648,0,0,1,1.3,0v3.238a1.058,1.058,0,0,0,1.1,1h6.873a1.058,1.058,0,0,0,1.1-1v-3.238a.648.648,0,0,1,1.3,0v3.238A2.352,2.352,0,0,1,264.432,1637.356Z"
													 transform="translate(-1.537 -10.41)"></path>
													<path fill="currentColor" d="M267.3,1635.337h-3.147a.646.646,0,0,1,0-1.293H267.3a.646.646,0,0,1,0,1.293Z"
													 transform="translate(-6.27 -12.033)"></path>
												</g>
											</svg>商品橱窗</span></div>
								</div>
								<div class="_2znFx5lI" style="display:none;">
									<div class="_2LqxHFsa"><i aria-label="图标: close" class="anticon anticon-close _2kyZIIaT"><svg viewBox="64 64 896 896"
											 focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
												<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
											</svg></i>
										<div>
											<div class="_3AY-U6s2"><svg width="14" height="14.99" viewBox="0 0 14 14.99" class="_2eY0UiF6">
													<g transform="translate(-412 -822.51)">
														<g fill="none" stroke="currentColor" stroke-width="1.4px" transform="translate(412 825)">
															<rect stroke="none" width="14" height="12.5" rx="3"></rect>
															<rect fill="none" x="0.7" y="0.7" width="12.6" height="11.1" rx="2.3"></rect>
														</g>
														<g transform="translate(19.5)">
															<line fill="none" stroke="currentColor" stroke-width="1.4px" stroke-linecap="round" x2="2" y2="2"
															 transform="translate(396.5 823.5)"></line>
															<line fill="none" stroke="currentColor" stroke-width="1.4px" stroke-linecap="round" x1="2" y2="2"
															 transform="translate(400.5 823.5)"></line>
														</g>
														<path fill="currentColor" d="M2.636,1.481a1,1,0,0,1,1.728,0L6.123,4.5A1,1,0,0,1,5.259,6H1.741A1,1,0,0,1,.877,4.5Z"
														 transform="translate(423 828) rotate(90)"></path>
													</g>
												</svg><span>直播</span></div>
										</div>
									</div>
									<div style="display:none;" class="_2LqxHFsa"><i aria-label="图标: check" class="anticon anticon-check _2kyZIIaT _1Y4072oJ"><svg
											 viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1em" height="1em" fill="currentColor"
											 aria-hidden="true">
												<path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
											</svg></i>
										<div>
											<div class="_3AY-U6s2 _1Y4072oJ"><svg width="15.7" height="10" viewBox="0 0 15.7 10" class="_2eY0UiF6">
													<g transform="translate(-387 -877)">
														<path fill="none" stroke="currentColor" stroke-width="1.4px" stroke-miterlimit="10" d="M180.884,1515.195l2.019,1.128a.77.77,0,0,0,1.145-.673v-4.877a.77.77,0,0,0-1.145-.672l-2.076,1.159"
														 transform="translate(217.952 -631.502)"></path>
														<g fill="none" stroke="currentColor" stroke-width="1.4px" transform="translate(387 877)">
															<rect stroke="none" width="12.779" height="10" rx="2"></rect>
															<rect fill="none" x="0.7" y="0.7" width="11.379" height="8.6" rx="1.3"></rect>
														</g>
														<path fill="currentColor" d="M2.136,1.481a1,1,0,0,1,1.728,0L5.123,3.639a1,1,0,0,1-.864,1.5H1.741a1,1,0,0,1-.864-1.5Z"
														 transform="translate(396.893 879) rotate(90)"></path>
													</g>
												</svg><span>长视频</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="_1nWZLuYc">
							<div>
								<div class="_2UsHTV5v">
									<div class="_1KGIPaKA"></div>
									<div class="_1KGIPaKA"></div>
									<div class="_1KGIPaKA">
                    <!-- <canvas height="64" width="64" style="height: 64px; width: 64px;"></canvas> -->
					<viewer>
                    <img style="height: 64px; width: 64px;" :src="message.qrcode" alt="">
					</viewer>
                  </div>
								</div>
							</div>
							<div class="_14YV3H8t">
								<div>扫码关注账号</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" class="height">
				<!-- <div class="_1mYqP-NC">
					<div class="ant-tabs ant-tabs-top _1nF74FAR ant-tabs-line">
						<div role="tablist" class="ant-tabs-bar ant-tabs-top-bar" tabindex="0">
							<div class="ant-tabs-nav-container ant-tabs-nav-container-scrolling">
								<span unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled ant-tabs-tab-arrow-show">
									<span class="ant-tabs-tab-prev-icon">
										 <i aria-label="图标: left" class="anticon anticon-left ant-tabs-tab-prev-icon-target">
											 <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor"  aria-hidden="true">
													<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
												</svg>
											</i>
									</span>
								</span>
								<span unselectable="unselectable" class="ant-tabs-tab-next ant-tabs-tab-arrow-show">
									<span class="ant-tabs-tab-next-icon">
										<i aria-label="图标: right" class="anticon anticon-right ant-tabs-tab-next-icon-target">
											<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
												<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
											</svg>
										</i>
									</span>
								</span>
								<div class="ant-tabs-nav-wrap">
									<div class="ant-tabs-nav-scroll">
										<div class="ant-tabs-nav ant-tabs-nav-animated">
											<div>
												<div ref="xiahuaxian" class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="display: block; transform: translate3d(0px, 0px, 0px); width: 64px;"></div>
												<div role="tab" @click="xiaclickFn(0)" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style="margin-right: 56px;">
													<router-link :to="{path:'/searchDetails'}" class="_1zlCAgAE">
														趋势表现
													</router-link>
												</div>
												<div role="tab" @click="xiaclickFn(125)" aria-disabled="false" aria-selected="true" class="ant-tabs-tab-active ant-tabs-tab" style="margin-right: 56px;">
													<router-link :to="{path:'/product'}" class="_1zlCAgAE">
														作品列表
													</router-link>
												</div>
												<div role="tab" @click="xiaclickFn(250)" aria-disabled="true" aria-selected="false" class=" ant-tabs-tab ant-tabs-tab-disabled" style="margin-right: 56px;">
													<div class="_1zlCAgAE _2AXT3VPr">
														<router-link :to="{path:'/product/product_douyinSearch'}" class="_1zlCAgAE">
															作品分析
															<i aria-label="图标: lock" class="anticon anticon-lock">
																<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	<path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path>
																</svg>
															</i>
														</router-link>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
						<div class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content" style="margin-left: -100%;">
							<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
							<div role="tabpanel" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active">
								<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
								<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
							</div>
							<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
							<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
							<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
							<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
						</div>
						<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
					</div>
				</div> -->
				<keep-alive>
					<router-view class="appView2" />
				</keep-alive>
			</el-col>
		</el-row>
		<login ref="loginRef"></login>
		<searchDialog></searchDialog>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapActions,mapGetters} from 'vuex'
	import qs from 'qs';
	import login from '../login.vue'
	import topNav from '../productSearchDetails/functionPage/topNav.vue'
	import searchDialog from '../product/searchDialog.vue'
	export default {
		name: 'searchDetails',
		data() {
			return {
				data:{},
				message:{},
				shouchangData:true
			}
		},
		computed: {
			centerDialogVisible: {
			  get: function() {
			    return this.$store.state.centerDialogVisible;
			  },
			  set: function(newValue) {
			    this.$store.state.centerDialogVisible = newValue;
			  }
			}
		},
		components: {
			login,topNav,searchDialog
		},
		beforeCreate() {

		},
		created() {

		},
		//离开前判断前进和后退时间来判断是否保存滚动值
		beforeRouteLeave(to, from, next) {
			this.scrollTop = document.getElementById('searchDetails').scrollTop || document.getElementById('searchDetails').pageYOffset
			if (!to.query.time || !from.query.time || to.query.time < from.query.time) {
				if (this.$vnode && this.$vnode.data.keepAlive) {
					if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
						if (this.$vnode.componentOptions) {
							var key = this.$vnode.key == null ?
								this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ?
									`::${this.$vnode.componentOptions.tag}` : '') :
								this.$vnode.key;
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
		//进入该页面时，用之前保存的滚动位置赋值
		beforeRouteEnter(to, from, next) {
			next(vm => {
				document.getElementById('searchDetails').scrollTop = document.getElementById('searchDetails').pageYOffset = vm.scrollTop;
			});

		},
		mounted() {
			//this.data = JSON.parse(this.$route.query.data);
			this.getData()
			// console.dir(this.$route.query.data)
			if(!this.$store.state.login){
				this.centerDialogVisible = true;
				this.$refs.loginRef.getData();
			}
		},
		methods: {
			xiaclickFn(num){
				this.$refs.xiahuaxian.style.webkitTransform = "translate3d("+(num)+"px,0px,0)"
			},
			getData(){
				this.$axios.get('/user/wx-videoaccount/wx-videoaccount?'+qs.stringify({
					wxVideoaccountId:this.$route.query.data
				}))
				.then(res=>{
					this.message = res.data.data;

					if(res.data.data.favorIs){
						this.shouchangData = false;
						console.log(this.shouchangData)
					}
				})
				.catch()

				.catch()
			},
			gengxinFn(){
				this.getData()
			},
			shouchangFn(){
				if(this.shouchangData){
					this.$axios.post('/user/my-favor/favor-wx-videoaccount',qs.stringify({
						wxVideoaccountId:this.$route.query.data
					}))
					.then(res=>{
						if(res.data.codeMsg)
						   this.$message(res.data.codeMsg);
						if(res.data.code == 0){
						   this.shouchangData = false;
						   console.log(this.shouchangData)
						}

					})
				}else{
					this.$axios.post('/user/my-favor/unfavor-wx-videoaccount-list?',qs.stringify({
						wxVideoaccountIdList:this.$route.query.data
					}))
					.then(res=>{
						if(res.data.codeMsg)
						   this.$message(res.data.codeMsg);
						if(res.data.code == 0){
						   this.shouchangData = true
						}
					})

				}

			}
		},
	}
</script>
<style >
body{
	background-color: #2b2b2e;
}
</style>
<style scoped>
	#searchDetails {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
		width: 100%;
		background-color: #2b2b2e;
		overflow: hidden;
		min-width: 800px;
	}

	.topNav {
		width: 100%;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #3a3a3e;
	}

	.nav_title {
		width: 100%;
	}

	.tanAbout {
		margin-left: 4px;
		display: inline;
		position: relative;
	}

	.tanAbout>span:first-child {
		padding: 0 16px;
		background: #fe2c55;
		font-size: 16px;
		border-radius: 16px;
		line-height: 30px;
		cursor: pointer;
		z-index: 2;
		-webkit-transition: all .2s ease;
		transition: all .2s ease;
		display: inline-flex;
		height: 30px;
		color: #fff;
		line-height: 30px;
		position: relative;
	}

	.tanAbout>span>svg {
		margin-top: 6px;
		/* position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto 0; */
	}

	.tanchuang {
		width: 484px;
		background: #5a5a5a;
		border-radius: 4px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
		padding: 45px 24px 35px 27px;
		position: absolute;
		left: 0;
		top: 27px;
		z-index: 1;
		line-height: 1.5;
		background-size: 388px 194px;
		background-position: 100% 0;
		background-repeat: no-repeat;
	}

	.tanchuang>svg {
		display: inline-block;
		float: left;
	}

	.tanchuang>span:nth-child(2) {
		display: inline-block;
		font-size: 32px;
		color: #fff;
		align-items: center;
		font-weight: 700;
		margin-left: 4px;
		margin-bottom: 22px;
	}

	.tanchuangcolor>span {
		margin-top: 16px;
		height: 32px;
		line-height: 32px;
		display: inline-block;
		font-weight: 400;
		white-space: nowrap;
		text-align: center;
		background-image: none;
		-webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
		box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
		cursor: pointer;
		-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		height: 32px;
		padding: 0 15px;
		font-size: 14px;
		border-radius: 4px;
		color: #e8edee;
		border: 1px solid #6d6d6d;
	}

	.tanchuangcolor>span:active,
	.nav_user>input:active {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.tanchuangcolor>span:hover,
	.nav_user>input:hover {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.tanchuangcolor>span:focus,
	.nav_user>input:focus {
		color: #d95e00;
		background-color: transparent;
		border-color: #d95e00
	}

	.nav_user {
		height: 56px;
		/* position: absolute; */
	}

	.nav_user_search {
		position: relative;
		float: right;
	}

	.nav_user_search>input {
		height: 24px;
		width: 162px;
		color: #e8edee;
		border: 1px solid #6d6d6d;
		background: transparent;
		padding-left: 30px;
		border-radius: 5px;
	}

	.nav_user_search>input:active {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_user_search>input:hover {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_user_search>input:focus {
		transition: all .5s;
		color: #d95e00;
		border: 1px solid #ff9429;
	}

	.nav_function {
		height: 100%;
		width: 50px;
		float: right;
		margin-left: 12px;
		position: relative;
	}

	.nav_function>svg:hover {
		cursor: pointer;
		color: #ff7800;
		transition: color .2s ease;
	}

	.nav_function>svg:first-child {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		left: 0;
	}

	.nav_function>svg:last-child {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		right: 0;
	}

	.nav_user_search>svg {
		position: absolute;
		left: 10px;
		top: 0px;
		bottom: 0px;
		margin: auto 0px;
	}

	.nav_data {
		float: right;
		margin-right: 20px;
	}

	.nav_data>img {
		height: 24px;
		width: 24px;
		border-radius: 50%;
		margin-right: 7px;
		position: relative;
	}

	.nav_data:before {
		content: '';
		/* height: 100%; */
		display: inline-block;
		vertical-align: middle;
		width: 1px;
		height: 12px;
		background: #66666d;
		margin: 0 16px;
	}

	.nav_data>span:nth-child(2) {
		margin-right: 4px;
	}

	.nav_data>span:nth-child(3) {
		font-size: 12px;
		height: 22px;
		display: inline-block;
		line-height: 20px;
		padding: 0 14px;
		border-radius: 4px;
		border: 1px solid #66666d;
		background: rgba(102, 102, 109, .1);
	}

	.nav_data_xiala{
			width: 100px;
			margin: 0px auto;
		}
		.nav_data_xiala>ul {
			width: 100px;
			/* height: 166px; */
			border-radius: 4px;
			padding: 0px;
			background-color: #2b2b2e;
			-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		}

		.nav_data_xiala>ul>li {
			height: 42px;
			line-height: 42px;
			text-align: center;
			width: 100%;
			/* padding: 5px 12px; */
			color: #e8edee;
			font-weight: 400;
			font-size: 14px;
			/* line-height: 22px; */
			white-space: nowrap;
			cursor: pointer;
			transition: all .3s;
		}
	.nav_data_xiala>ul>li:hover{
		transition: all .3s;
		background-color: hsla(0,0%,100%,.1);
	}
	.leftNav {
		width: 100%;
		width: 320px;
		    position: fixed;
		        height: calc(100vh - 95px);
		        bottom: 0;
		        left: 32px;
	}




	._1cGmRv6B {
		width: 320px;
		background: rgba(62, 62, 62, .2);
		position: fixed;
		height: calc(100vh - 95px);
		bottom: 0;
		left: 32px;
	}

	._3ykadlND {
		padding: 24px 16px 16px 24px;
		height: 182px;
	}

	._3ykadlND::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		-webkit-appearance: none;
	}

	._3ykadlND::-webkit-scrollbar-thumb {
		border-radius: 6px;
		background-color: #66666d;
	}

	._3ykadlND::-webkit-scrollbar-track {
		background-color: #2b2b2e;
	}

	._3ykadlND::selection {
		color: #fff;
		background: #ff7800;
	}

	._3mUgA-Vh,
	._28OpAn63 {
		display: flex;
		justify-content: space-between;
	}

	._28OpAn63 {
		align-items: center;
		box-sizing: border-box;
	}

	._3mUgA-Vh {
		width: 100%;
		height: 68px;
		display: flex;
		justify-content: space-between;
	}

	._3t5L3W5T {
		height: 68px;
		width: 68px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid #fff;
		vertical-align: middle;
	}

	._3DQ4NUnP {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	._2Y7mZtYv {
		display: flex;
		height: 38px;
		align-items: center;
	}

	._oBww4Ylt {
		font-size: 12px;
		color: #787a7a;
	}

	._s6WSF95M {
		font-size: 30px;
		color: #ff7800;
		margin-left: 4px;
	}

	._1QJ7qoKs {
		font-size: 12px;
		padding: 2px 4px;
		border: 1px solid #787a7a;
		color: #cdcfcf;
		border-radius: 2px;
		margin-top: 4px;
		cursor: pointer;
	}

	._1nWZLuYc,
	._3Mt2vQgI {
		display: flex;
		align-items: center;
		color: #cdcfcf;
	}

	._1bv9Xtl- {
		display: flex;
		align-items: center;
	}
	._1bv9Xtl->svg{
		cursor: pointer;
	}

	._3rF1A6fj {
		font-size: 20px;
		font-weight: 700;
		max-width: 145px;
	}

	.xd-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	._8TRvoTKy {
		font-size: 14px;
		color: #787a7a;
		margin-left: 8px;
	}


	._39iY1Rho:first-child {
		margin-right: 8px;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	._oHy0nPgB {
		color: #cdcfcf;
		cursor: pointer;
	}

	._YylL3JYu {
		height: calc(100% - 234px);
		padding: 0 8px 0 24px;
	}

	._3Mt2vQgI {
		justify-content: space-between;
		margin: 8px 0;
	}

	._DuKD6by7,
	._LGIbpsVE {
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	._1AvzJLf2 {
		display: inline-flex;
		align-items: center;
		color: #cdcfcf;
	}

	._GOHxE8_f {
		color: #1890ff;
	}

	._2Drxa6un {
		margin-right: 4px;
		font-size: 14px;
	}

	._YylL3JYu {
		height: calc(100% - 234px);
		padding: 0 8px 0 24px;
		box-sizing: border-box;
	}

	._2kHrt_Qw {
		height: 100%;
		overflow-y: auto;
		padding-right: 8px;
		padding-bottom: 64px;
	}

	._2kHrt_Qw::-webkit-scrollbar {
		width: 4px;
		height: 4px;
		-webkit-appearance: none;
	}

	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		-webkit-appearance: none;
	}

	._2kHrt_Qw::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background-color: #66666d;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 6px;
		background-color: #66666d;
	}

	._2kHrt_Qw::-webkit-scrollbar-track {
		background-color: #2b2b2e;
	}

	::-webkit-scrollbar-track {
		background-color: #2b2b2e;
	}

	::selection {
		color: #fff;
		background: #ff7800;
	}

	._3-AyKNj7 {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	._2FDGiJrn {
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, #66666d, #66666d 4px, transparent 0, transparent);
		background-size: 8px 100%;
		margin: 16px 0;
	}

	._3p_jzZA2 {
		display: flex;
		width: 100%;
	}

	._3CsMZ-r3 {
		color: #787a7a;
		white-space: nowrap;
	}

	._nPO2a5S2 {
		display: flex;
		flex-flow: wrap;
		color: #cdcfcf;
		margin-bottom: -16px;
		margin-right: -8px;
		max-height: 108px;
		overflow: hidden;
	}

	._DuKD6by7 {
		border-radius: 4px;
		border: 1px solid hsla(0, 0%, 100%, .3);
		background: hsla(0, 0%, 100%, .1);
		padding: 0 8px;
		margin-right: 8px;
		margin-bottom: 16px;
		font-size: 12px;
		color: #e8edee;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.ant-row-flex-middle {
		-ms-flex-align: center;
		align-items: center;
		margin-left: -5px;
		margin-right: -5px;
		margin-bottom: 16px;
	}

	.ant-row-flex,
	.ant-row-flex:after,
	.ant-row-flex:before {
		display: -ms-flexbox;
		display: flex;
		flex-flow: row wrap;
	}

	._2MNuenrz {
		display: flex;
		color: #cdcfcf;
		flex-wrap: wrap;
	}

	._3uYJipmG {
		width: 50%;
		margin-bottom: 24px;
	}

	._2Xw0et9Q {
		margin: 0 8px -2px 0;
	}

	._tLnD2bXY {
		color: #fff;
		font-size: 16px;
		padding-left: 22px;
		margin-top: 8px;
	}

	.ant-row-flex-space-between {
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	._2MNuenrz {
		display: flex;
		color: #cdcfcf;
		flex-wrap: wrap;
	}

	._2FDGiJrn {
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, #66666d, #66666d 4px, transparent 0, transparent);
		background-size: 8px 100%;
		margin: 16px 0;
	}

	._3CsMZ-r3 {
		color: #787a7a;
		white-space: nowrap;
	}

	._2xKK16yA {
		display: flex;
		width: 100%;
		margin-bottom: 16px;
	}

	._3AY-U6s2:not(:last-child) {
		margin-bottom: 8px;
	}

	._9_0nVGYy {
		margin-bottom: 8px;
		cursor: pointer;
	}

	._3csJM3dK,
	._3csJM3dK:active,
	._3csJM3dK:hover {
		color: inherit;
	}

	*,
	:after,
	:before {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	._2kyZIIaT {
		margin-right: 8px;
		line-height: 1;
		margin-top: 4px;
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

	._2eY0UiF6 {
		margin-right: 4px;
	}

	._2znFx5lI {
		padding-top: 16px;
		display: flex;
		flex-wrap: wrap;
	}

	._2znFx5lI ._2LqxHFsa {
		margin-bottom: 24px;
	}

	._2LqxHFsa {
		display: flex;
		width: 50%;
	}

	._2znFx5lI ._2LqxHFsa {
		margin-bottom: 24px;
	}

	._2LqxHFsa {
		display: flex;
		width: 50%;
	}

	._2kyZIIaT {
		margin-right: 8px;
		line-height: 1;
		margin-top: 4px;
	}

	._1Y4072oJ {
		color: #52c41a;
	}

	._1nWZLuYc {
		padding: 0 20px;
		height: 88px;
		background-color: #3a3a3e;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	._1nWZLuYc,
	._3Mt2vQgI {
		display: flex;
		align-items: center;
		color: #cdcfcf;
	}

	._2UsHTV5v {
		position: relative;
		height: 68px;
		width: 68px;
	}

	._1KGIPaKA:first-of-type {
		background: #07ffd5;
		left: -2px;
		top: -2px;
	}

	._1KGIPaKA {
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 4px;
	}

	._1KGIPaKA:nth-of-type(3) {
		padding: 3px;
		background: #fff;
	}

	._1KGIPaKA {
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 4px;
	}

	._14YV3H8t {
		margin-left: 24px;
	}
	@media (max-height: 768px)
	._1mYqP-NC {
	    padding-top: 24px;
	}
	._1mYqP-NC {
	    position: -webkit-sticky;
	    position: sticky;
	    top: 55px;
	    background: #2b2b2e;
	    z-index: 9;
	    padding-top: 40px;
		 position: fixed;
		 left: 392px;
		 right: 40px;
		 /* margin-right: 40px; */
	}
	.ant-tabs {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding: 0;
	    color: #e8edee;
	    font-size: 14px;
	    font-variant: tabular-nums;
	    line-height: 1.5;
	    list-style: none;
	    -webkit-font-feature-settings: "tnum","tnum";
	    font-feature-settings: "tnum","tnum";
	    position: relative;
	    overflow: hidden;
	    zoom: 1;
	}
	.ant-tabs:before {
	    display: table;
	    content: "";
	}
	._1nF74FAR .ant-tabs-bar {
	    border: 1px solid #6d6d6d;
	    padding: 0 32px;
	    border-radius: 4px;
	    margin: 0;
	}
	.ant-tabs-bar, .ant-tabs-nav-container {
	    -webkit-transition: padding .3s cubic-bezier(.645,.045,.355,1);
	    transition: padding .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-bar {
	    margin: 0 0 16px;
	    border-bottom: 1px solid #6d6d6d;
	    outline: none;
	}
	._1mYqP-NC .ant-tabs-nav-container {
	    font-size: 16px;
	}
	.ant-tabs-nav-container-scrolling {
	    padding-right: 32px;
	    padding-left: 32px;
	}
	.ant-tabs-nav-container {
	    position: relative;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin-bottom: -1px;
	    overflow: hidden;
	    font-size: 14px;
	    line-height: 1.5;
	    white-space: nowrap;
	    zoom: 1;
	}
	.ant-tabs-bar, .ant-tabs-nav-container {
	    -webkit-transition: padding .3s cubic-bezier(.645,.045,.355,1);
	    transition: padding .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-nav-container:after, .ant-tabs-nav-container:before {
	    display: table;
	    content: "";
	}
	:root .ant-tabs-tab-prev {
	    -webkit-filter: none;
	    filter: none;
	}
	.ant-tabs-tab-next.ant-tabs-tab-arrow-show, .ant-tabs-tab-prev.ant-tabs-tab-arrow-show {
	    width: 32px;
	    height: 100%;
	    opacity: 1;
	    pointer-events: auto;
	}
	.ant-tabs-tab-prev {
	    left: 0;
	}
	.ant-tabs-tab-btn-disabled, .ant-tabs-tab-btn-disabled:hover {
	    color: #6b6d6d;
	}
	.ant-tabs-tab-btn-disabled {
	    cursor: not-allowed;
	}
	.ant-tabs-tab-next, .ant-tabs-tab-prev {
	    position: absolute;
	    z-index: 2;
	    width: 0;
	    height: 100%;
	    color: #cdcfcf;
	    text-align: center;
	    background-color: transparent;
	    border: 0;
	    cursor: pointer;
	    opacity: 0;
	    -webkit-transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
	    transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    pointer-events: none;
	}
	.ant-tabs-tab-next-icon, .ant-tabs-tab-prev-icon {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    font-weight: 700;
	    font-style: normal;
	    -webkit-font-feature-settings: normal;
	    font-feature-settings: normal;
	    font-variant: normal;
	    line-height: inherit;
	    text-align: center;
	    text-transform: none;
	    -webkit-transform: translate(-50%,-50%);
	    -ms-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	:root .ant-tabs-tab-next-icon-target, :root .ant-tabs-tab-prev-icon-target {
	    font-size: 12px;
	}
	.anticon svg {
	    display: inline-block;
	}
	.anticon>* {
	    line-height: 1;
	}
	.ant-tabs-tab-next {
	    right: 2px;
	}
	.ant-tabs-nav-wrap {
	    margin-bottom: -1px;
	    overflow: hidden;
	}
	.ant-tabs-nav-scroll {
	    overflow: hidden;
	    white-space: nowrap;
	}
	.ant-tabs-nav {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    margin: 0;
	    padding-left: 0;
	    list-style: none;
	    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-nav .ant-tabs-tab {
	    position: relative;
	    display: inline-block;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 100%;
	    margin: 0 32px 0 0;
	    padding: 0;
	    text-decoration: none;
	    cursor: pointer;
	    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
	    transition: color .3s cubic-bezier(.645,.045,.355,1);
		 margin-right: 56px;
	}
	.ant-tabs-nav .ant-tabs-tab:before {
	    position: absolute;
	    top: -1px;
	    left: 0;
	    width: 100%;
	    border-top: 2px solid transparent;
	    border-radius: 4px 4px 0 0;
	    -webkit-transition: all .3s;
	    transition: all .3s;
	    content: "";
	    pointer-events: none;
	}
	._1zlCAgAE {
	    display: inline-block;
	    color: #fff;
	    height: 48px;
	    line-height: 48px;
	}
	._1nF74FAR .ant-tabs-nav .ant-tabs-tab-active {
	    font-weight: 700;
	}
	.ant-tabs-nav .ant-tabs-tab-active {
	    color: #fff;
	    font-weight: 500;
	}
	.ant-tabs-nav:after {
	    clear: both;
	}
	.ant-tabs-nav:after, .ant-tabs-nav:before {
	    display: table;
	    content: " ";
	}
	*, :after, :before {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.ant-tabs-nav-container:after {
	    clear: both;
	}
	.ant-tabs-nav-container:after, .ant-tabs-nav-container:before {
	    display: table;
	    content: "";
	}
	._1nF74FAR .ant-tabs-ink-bar {
	    height: 3px;

	}
	.ant-tabs-bottom .ant-tabs-ink-bar-animated, .ant-tabs-top .ant-tabs-ink-bar-animated {
	    opacity: 1;
	    -webkit-transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s;
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	}
	.ant-tabs-ink-bar {
	    position: absolute;
	    bottom: 1px;
	    left: 0;
	    z-index: 1;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 0;
	    height: 2px;
	    background-color: #ff7800;
	    -webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	    transform-origin: 0 0;
	    opacity: 0;
	}
	.appView2{
		position: fixed;
		left: 392px;
		right: 40px;
		top:70px;
		/* width: 100%; */
		overflow-y: scroll;
		bottom: 10px;
	}
	.appView{
		/* width: 100%; */
		/* height: 100%; */

	}

</style>
