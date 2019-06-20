let div = document.querySelector('.icons'),
	icons = document.querySelectorAll('.icons img'),
	img = ['Assets/walmart.svg','Assets/bbb.svg','Assets/ernest-brothers.svg','Assets/warner-brothers.svg','Assets/mini.svg'],
	img1 = ['Assets/remax.svg','Assets/marriott.svg','Assets/levis.svg','Assets/jll.svg','Assets/costa-coffee.svg'],
	flag = false;
	
div.onclick = function () {
	if (flag  == false) {
		for (let i in icons) {
			icons[i].src = img1[i];
		}
		flag = true;
	} 
	else {
		for (let i in icons) {
			icons[i].src = img[i];
		}
		flag = false;
	}
}