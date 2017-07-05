<template>
	<div class="row">
		<div class="col-sm-6">
			<h3>Bạn đang muốn tìm một nửa của mình? Chúng tôi sẽ giúp bạn ;)</h3>
		</div>
		<div class="col-sm-6 style-input">
			<h1>Đăng Ký</h1>
			<form class="form-horizontal">
				<div class="form-group">
					<label class="control-label col-sm-2" for="Họ Tên">Họ Tên:</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="fullname" placeholder="Nhập họ tên" name="email">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="email">Email:</label>
					<div class="col-sm-10">
						<input type="email" class="form-control" id="email" placeholder="Nhập địa chỉ email" name="email">
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-2" for="pwd">Password:</label>
					<div class="col-sm-10">          
						<input type="password" class="form-control" id="pwd" placeholder="Mật khẩu mới" name="pwd">
					</div>
				</div>
				
				<div class="form-group">        
					<div class="col-sm-offset-2 col-sm-10">
						<router-link to='registry'><button type="submit" class="btn btn-default">Đăng Ký</button></router-link>
						
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

