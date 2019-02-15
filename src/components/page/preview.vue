<template>   
   <div class="container">
			<!-- //总体 -->
			<div class="box">
				<!-- 版心 -->
				<div class="w">
					<!-- 标题 -->
					<div class="title">
						十部委发文鼓励民营资本参与养老服务
					</div>
					<!-- 标签 -->
					<div class="lable">
						<span>原创</span>
						<span>江湖老道</span>
						<span>健康达人</span>
						<span>12月26日</span>
					</div>
					<!-- 头图 -->
					<div class="picture">
						<img src="../../assets/img/img.jpg" />
					</div>
					<!-- 导语 -->
					<div class="intro">
						<!-- 导读 -->
						<div class="read"><span></span>导读</div>
						<div class="introContent">
							今年2月25日，民政部、发展改革委、教育部等十部委联合发布《关于鼓励民间资本参与养老服务业发展的实施意见》
						</div>
					</div>
					<!-- 文章内容 -->
					<div class="articleConnect">
						<p>今年2月25日，民政部、发展改革委、教育部等+部委联合发布《关于鼓励民间资本参与养老服务业发展的实施意见》, 
						由中国老龄事业发展基金会紫荆健康基金和中融优清联合主办的“全国公益免费查体.健康中国万里行”  
						活动在云南禄劝开展，响应国家政策，为65周岁以上的老年人进行免费健康体检。此图为现场启动仪式。</p>
						<p>由中国老龄事业发展基金会紫荆健康基金和中融优清联合主办的“全国公益免费查体.健康中国万里行”活动在云南禄劝开展，
						响应国家政策，为65周岁以上的老年人进行免费健康体检。此图为现场启动仪式。</p>
					</div>
					<!-- footer -->
					<div class="footer">
						<div class="el-icon-view">2343人围观</div>
						<div class="el-icon-share">分享</div>
					</div>
				</div>
			</div>
   </div>           
</template>

<script>
    export default {       
    }
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	/* 总体 */
	.box{
		width:375px;
		_height:100px; 
		min-height:100px;
		background-color: #ccc;
	}
	.w{
		margin-left: 15px;
		width:345px;
		_height:100px; 
		min-height:100px;
	}
	/* 标题 */
	.title{
		width: 100%;
		font-size: 26px;
		letter-spacing:2px;
		margin-bottom: 25px;
	}
	/* 标签 */
	.lable{
		width: 100%;
		font-size: 16px;
		margin-bottom: 25px;
	}
	.lable span{
		margin-right: 10px;
	}
	.lable span:nth-child(1),.lable span:nth-child(4){
		color: #999;
	}
	.lable span:nth-child(2),.lable span:nth-child(3){
		color: #3399ff;
	}
/* 头图 */
.picture{
	width: 100%;
	height: 260px;
	margin-bottom: 16px;
}
.picture img{
	width: 100%;
	height: 100%;
}
/* 导语 */
.intro{
	width: 100%;
	_height:22px; 
	min-height:22px;
	background-color: #ffcc99;
	border-radius: 10px;
	color: #cc3300;
	padding-bottom: 15px;
	margin-bottom: 20px;
}
.read{
	width: 325px;
	height: 18px;
	font-size: 16px;
	padding-left: 10px;
	padding-right: 10px;
	margin-top: 10px;
	font-weight: 600;
	line-height: 18px;
	margin-bottom: 12px;
}
.read span{
	width: 3px;
	height: 18px;
	background-color: #cc3300;
	display: inline-block;
	margin-right: 10px;
}
/* 导读内容 */
.introContent{
	width: 325px;
	font-size: 16px;
	padding-left: 10px;
	padding-right: 10px;
	_height:22px; 
	min-height:22px;
	letter-spacing:2px;
	font-weight: 500;
}
/* 文章内容 */
.articleConnect{
	width: 100%;
	_height:22px; 
	min-height:22px;
	font-size: 16px;
	letter-spacing:2px;
	font-weight: 500;
}
.articleConnect p{
	margin-bottom: 37px;
}
/* footer */
.footer{
	margin-top: 16px;
	padding-bottom: 16px;
	width: 100%;
	height: 19px;
}
.el-icon-view{
	float: left;
}
.el-icon-share{
	float: right;
	letter-spacing:2px;
}
</style>
