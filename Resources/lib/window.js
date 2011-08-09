var win2 = Titanium.UI.createWindow({
	title:'Window 2',
	height:300,
	width:350
});

var text1 = Titanium.UI.createTextField({
	color:'#336699',
    height:35,
    top:10,
    left:10,
    width:250,
    font:{fontSize:14,fontFamily:'Helvetica Neue'}
});

win2.add(text1);

win2.open();

