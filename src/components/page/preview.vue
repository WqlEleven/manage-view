<template>   
   <div class="container">
		 <!-- 头部 -->
    <div class="head">
			<img src="../../assets/img/u54.png" />
		</div>
		<!-- 文章所有内容 -->
		<div class="allArti">
			<!-- 文章标题 -->
			<div class="article">
						<p class="a_title">
							<span>人生开挂的人，都有窄门思维</span>
						</p>
						<p class="category"> 
							<span>原创：</span>
							<span>我是长寿管家</span>
							<span>张三</span>
							<span>时间：</span>
							<span>今天</span>
						</p>
			</div>
			<!-- 头图 -->
			<div class="headimg">
						<img src="../../assets/img/u20.png" />
			</div>
			<!-- 导语 -->
			<div class='daoyu'>
					<span>导语:</span><br>
					&nbsp;&nbsp;文本标签文本标签文本标签文本标签文本标签文本标签文本标文本标签文
			</div>
			<!-- 一小段文字 -->
			<div class="stage">
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
			</div>
			<!-- 头图 -->
			<div class="headimg">
						<img src="../../assets/img/u20.png" />
			</div>
			<!-- 一小段文字 -->
			<div class="stage">
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
			</div>
			<!-- 头图 -->
			<div class="headimg">
						<img src="../../assets/img/u20.png" />
			</div>
			<!-- 一小段文字 -->
			<div class="stage">
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
				<p>最近文章更新频率又降低了，哎，谁叫咕爷整天跟一群程序猿打交道呢。每次产品上线都要搞到天昏地暗，日月无
				光。下班后的夜空总是星星点点，公交站台热浪滚滚，街上偶见短裙飘飘...</p>
			</div>
			<!-- 横线 -->
			<div class="line"></div>
			<!-- 阅读量 -->
			<div class="read">
				<div class="read_p">阅读量：36999</div>
				<div class="read_i"><img src="../../assets/img/u52.png" /></div>
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
	.container{
		 width: 424px;
		 height: 873px;
		 background-image: url(../../assets/img/u1.png);
		 position: relative;
	 }
	 /* 头部 */
	 .head{
		width: 373px;
		height: 41px;
		background-color: #eee;
		position: absolute;
		left:25px;
		top:104px;
	 }
	 .head img{
		 width: 100%;
		 height: 100%;
	 }
	 /* 文章所有内容 */
	 .allArti{
		 width: 373px;
		 height: 623px;
		 /* background-color: red; */
		 position: absolute;
		 left:25px;
		 top:145px;
		 overflow-x: hidden;
		 overflow-y: scroll;
	 }
	 /* 滑动轮不显示 */
	 .allArti::-webkit-scrollbar {
	 	display: none;
	 }
	 /* 文章标题 */
	 .article{
		 width: 100%;
	 }
	 .a_title {
		 width: 100%;
		 font-weight: 700;
		 font-size: 18px;
		 margin-top: 10px;
		 margin-left: 5px;
	 }
	 .category{
		 width: 100%;
		 margin-top: 10px;
		 margin-left: 5px;
		 color: #999;
		 font-size: 12px;
	 }
	 .category span:nth-child(2){
		 margin-right: 10px;
		 color: #333;
	 }
	 .category span:nth-child(3){
	 	margin-right: 30px;
		color: #333;
	 }
	 .category span:nth-child(5){
	 color: #333;
	 }
	 /* 头图 */
	 .headimg{
		width: 363px;
		height: 297px;
		margin-left: 5px;
		margin-top: 10px;
	 }
	 .headimg img{
		width: 100%;
		height: 100%;
	 }
	 /* 导语 */
	 .daoyu{
		 width: 358px;
		 height: 97px;
		 margin-top: 10px;
		 margin-left: 5px;
		 margin-right: 5px;
		 padding-left: 5px;
		 background-color: #eee;
		 font-size:14px;
		 line-height: 24px;
	 }
	 .daoyu span{
		 font-size:16px;
	 }
	 /* 一小段文字 */
	 .stage{
		 margin:10px 5px 0;
		 font-size:14px;
		 line-height: 18px;
	 }
	/* 横线 */
	.line{
		width: 100%;
		height: 1px;
		margin: 10px 0;
		background-color: #ccc;
	}
	/* 阅读量 */
	.read{
		width: 100%;
		margin: 0 10px;
	}
	.read_p{
		width: 95px;
		height: 15px;
		float: left;
		font-size: 13px;
		margin-top:10px;
		margin-bottom: 45px;
	}
	.read_i{
		width: 20px;
		height: 20px;
		float: left;
		margin-left: 240px;
		margin-top:10px;
		margin-bottom: 45px;
	}
	.read_i img{
		width: 100%;
		height: 100%;
	}

</style>
