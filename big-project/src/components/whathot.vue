<template>
	<div>
		<div class="row fix-bar">
			<div class="col-sm-3 style-heart">
				<a href="#" class="fa fa-heart"></a>
				<h3>Một nửa</h3>
			</div>
			<div class="col-sm-3 style-thumb">
				<a href="#" class="fa fa-thumbs-o-up"></a>
				<h3>Ai Thích Tôi</h3>
			</div>
			<div class="col-sm-3 style-comment">
				<a href="#" class="fa fa-comments-o"></a>
				<h3>Trò Chuyện</h3>
			</div>
			<div class="col-sm-3 style-image">
				<a href="#" class="fa fa-heart"></a>
				<h3>Một nửa</h3>
			</div>
		</div>

		<div class="row fix-bar">
			<div class="col-sm-12 customize-navbar">
				<nav class="navbar">
					<div class="container">
						<ul class="nav navbar-nav">
							<li class="active"><a href="#">Có gì hot?</a></li>
							<li><a href="#">Ai mới</a></li>
							<li><a href="#">Ảnh mới</a></li>
							<li><a href="#">Online</a></li>
							<li><a href="#">Hợp nhau</a></li>
							<li><a href="#">Gần tôi</a></li>
							<li><a href="#">Tìm kiếm</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>
<style>
	.fa {
		padding: 20px;
		font-size: 30px;
		width: 150px;
		text-align: center;
		text-decoration: none;
		margin: 5px 2px;
		
	}
	.fa:hover {
		opacity: 0.7;
	}
	.fa-heart {
		/*background: #3B5998;*/
		color: white;
	}
	.fa-thumbs-o-up {
		/*background: #3B5998;*/
		color: white;
	}
	.fa-comments-o {
		/*background: #3B5998;*/
		color: white;
	}
	.style-heart {
		background: #3B5998;
	}
	.style-thumb {
		background: #3B5998;
	}
	.style-comment {
		background: #3B5998;
	}
	.style-image {
		background: #3B5998;
	}
	.col-sm-3 {
		border: 1px solid black;
		border-radius: 3px;
	}
	.customize-navbar {
		padding-left: 0;
		padding-right: 0;
		
	}
	.navbar-inverse {
		background-color: white;
	}
	.navbar-inverse .navbar-nav>.active>a {
		background: blue;
	}
	@media screen and (min-width: 1024px) {
		.fix-bar {
			padding: 0 250px;
		}
	}
	@media screen and (min-width: 768px) {
		.fix-bar {
			padding: 0 200px;
		}
	}
	@media screen and (min-width: 1405px) {
		.fix-bar {
			padding: 0 400px;
		}
	}
</style>
