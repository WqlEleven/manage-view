<template>
	<div class="container">
		<!-- //总体 -->
		<div class="box">
			<!-- 版心 -->
			<div class="w">
				<!-- 标题 -->
				<div class="title" id="title">
				</div>
				<!-- 标签 -->
				<div class="lable">
					<span id="category_id"></span>
					<span id="tage"></span>
					<span id="add_time"></span>
				</div>
				<!-- 导语 -->
				<div class="intro">
					<!-- 导读 -->
					<div class="read"><span></span>导读</div>
					<div class="introContent" id="intro">
					</div>
				</div>
				<!-- 头图 -->
				<!-- <div class="picture active" id="picture">
					<img id="img" src="" alt="">
				</div> -->
				<!-- 文章内容 -->
				<div class="articleConnect" id="content">
				</div>
				<!-- footer -->
				<div class="footer">
					<div class="el-icon-view"><span id="click"></span>人围观</div>
					<!-- <div class="el-icon-share">分享</div> -->
				</div>
			</div>
		</div>
		<!-- 二维码 -->
		<div class="qr">
			<img src="" alt="" id="qr">
			<div>微信扫描二维码预览文章</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'preview',
		data: function () {
			return {
			}
		},
		mounted() {
			const id = this.$route.query.id;
			this.getArtMsg();
		},
		activated() {
			const id = this.$route.query.id;
			this.getArtMsg();
		},
		methods: {
			//获取文章信息..
			getArtMsg() {
				const id = this.$route.query.id;
				this.$axios.post(
					'/admin/article_info',
					this.$qs.stringify({ id: id })
				).then((res) => {
					// console.log(res);
					if (res.data.code == -1) {
						this.$message.warning('请登录！');
						this.$router.push('/login');
					} else if (res.data.code == 0) {
						//写逻辑
						const title = res.data.data.info.title;
						document.getElementById('title').innerText = title
						const category_id = res.data.data.info.category_id;
						if (category_id == 2) {
							document.getElementById('category_id').innerText = '原创';
						} else if (category_id == 3) {
							document.getElementById('category_id').innerText = '转载';
						} else if (category_id == 4) {
							document.getElementById('category_id').innerText = '用户投稿'
						}
						const tags = res.data.data.info.tags.split(',').join(' ');
						document.getElementById('tage').innerText = tags;
						const add_time = res.data.data.info.add_time.split(' ')[0].split('-');
						document.getElementById('add_time').innerText = add_time[1] + '月' + add_time[2] + '日';
// 						const pictureUrl = this.IMAGE_URL + '/image/' + res.data.data.info.picture;
// 						if(pictureUrl != ''){
// 							document.getElementById('picture').classList.remove("active");
// 							document.getElementById('img').src = pictureUrl;					
// 						}
						const intro = res.data.data.info.intro;
						document.getElementById('intro').innerText = intro
						// 内容
						const content = res.data.data.info.content;				
						document.getElementById('content').innerHTML = content;
						var a = document.getElementById("content").getElementsByTagName("img");
						for(var i = 0; i <a.length; i++){
							a[i].style = 'width:100%'
						}
					
						const click = res.data.data.info.click;
						document.getElementById('click').innerText = click
						//二维码
						const p = this.baseUrl + '/admin/article_qrcode/'+res.data.data.info.id
						document.getElementById('qr').src = p ;
					}
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.active {
		display: none;
	}

	/* 总体 */
	.box {
		width: 375px;
		_height: 100px;
		min-height: 100px;
		background-color: #ccc;
		float: left;
	}s
	.w {
		margin-left: 15px;
		width: 345px;
		_height: 100px;
		min-height: 100px;
	}
	/* 标题 */
	.title {
		width: 100%;
		font-size: 26px;
		letter-spacing: 2px;
		margin-bottom: 25px;
		margin-top: 25px;
	}
	/* 标签 */
	.lable {
		width: 100%;
		font-size: 16px;
		margin-bottom: 25px;
	}
	.lable span {
		margin-right: 10px;
	}
	.lable span:nth-child(1),
	.lable span:nth-child(3) {
		color: #999;
	}

	.lable span:nth-child(2) {
		color: #3399ff;
	}
	/* 头图 */
	.picture {
		width: 100%;
		height: 260px;
		margin-bottom: 16px;
	}

	.picture img {
		width: 100%;
		height: 100%;
		display: block;
	}

	/* 导语 */
	.intro {
		width: 100%;
		_height: 22px;
		min-height: 22px;
		background-color: #ffcc99;
		border-radius: 10px;
		color: #cc3300;
		padding-bottom: 15px;
		margin-bottom: 20px;
	}

	.read {
		width: 325px;
		height: 18px;
		font-size: 16px;
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		margin-top: 10px;
		font-weight: 600;
		line-height: 18px;
		margin-bottom: 12px;
	}

	.read span {
		width: 3px;
		height: 18px;
		background-color: #cc3300;
		display: inline-block;
		margin-right: 10px;
	}

	/* 导读内容 */
	.introContent {
		width: 100%;
		font-size: 16px;
		padding-left: 10px;
		padding-right: 10px;
		_height: 22px;
		min-height: 22px;
		letter-spacing: 2px;
		font-weight: 500;
	}

	/* 文章内容 */
	.articleConnect {
		width: 100%;
		_height: 22px;
		min-height: 22px;
		font-size: 16px;
		letter-spacing: 2px;
		font-weight: 500;
	}
	.articleConnect p {
		margin-bottom: 37px;
	}
	/* footer */
	.footer {
		margin-top: 16px;
		padding-bottom: 16px;
		width: 100%;
		height: 19px;
	}

	.el-icon-view {
		float: left;
	}

	.el-icon-share {
		float: right;
		letter-spacing: 2px;
	}

	/* 二维码 */
	.qr {
		margin-top: 200px;
		margin-left: 20px;
		float: left;
	}
	.qr div{
		text-align: center;
	}
</style>