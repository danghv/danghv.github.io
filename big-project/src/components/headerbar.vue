<template>
	<div class="container-fluid container-background">
		<div class="header-bar row">
			<div class="logo col-sm-6">
				<img src="../assets/logo2.png">
			</div>
			<div class="form col-sm-6">
				<table>
					<tbody>
						<tr>
							<td>Email</td>
							<td>Mật Khẩu</td>
						</tr>
						<tr>
							<td><input type="email" name="email"></td>
							<td><input type="password" name="password"></td>
							<td><input value="Đăng Nhập" type="submit"></td>
						</tr>
						<tr>
							<td></td>
							<td>
								<div>
									<a href="#">Quên tài khoản?</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		</div>
	</template>
	<script>
		
	</script>
	<style>
		.header-bar {
			padding: 50px 200px;
			background-color: lightpink;
		}
		.logo {
			float: left;
			padding: 0 250px;
		}
		td {
			padding: 10px;
		}
	</style>
