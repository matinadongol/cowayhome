
CKEDITOR.editorConfig = function( config ) {

config.htmlEncodeOutput = true;
CKEDITOR.config.allowedContent = true;
config.allowedContent = true; 
config.removeFormatAttributes = '';
config.autoParagraph = false;
config.resize_enabled= true;
config.contentsCss  = ['../lib/fontawesome/5.12.0/css/all.min.css','../vendor/css/bundle.min.css','../vendor/css/owl.carousel.min.css','../vendor/css/jquery.fancybox.min.css','../vendor/css/cubeportfolio.min.css','../vendor/css/tooltipster.min.css','../vendor/css/revolution-settings.min.css','../css/revolution/navigation.css','../css/style.css'];
config.filebrowserBrowseUrl = '../lib/editor/ckfinder/editor/ckfinder.html';
config.filebrowserImageBrowseUrl = '../lib/editor/ckfinder/ckfinder.html?type=Images';
config.filebrowserUploadUrl = '../lib/editor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
config.filebrowserImageUploadUrl = '../lib/editor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
config.filebrowserWindowWidth = '80%';
config.filebrowserWindowHeight = '80%';


config.removePlugins = 'htmldataprocessor';
config.fillEmptyBlocks = false;
config.ignoreEmptyParagraph = false;
CKEDITOR.dtd.$removeEmpty['i'] = false;
CKEDITOR.dtd.$removeEmpty['div'] = false;
config.extraAllowedContent = 'required';
config.protectedSource.push( /<\?[\s\S]*?\?>/g );   // PHP Code

config.toolbar_CMStoolbar = [
 					['Source'],
					['Maximize'],					
					['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
					['NumberedList','BulletedList','-','Outdent','Indent'],
					['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
					['Blockquote', 'Smiley', 'ShowBlocks'],
					[ 'Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor' ],
					['SpecialChar'],	
					['Link','Unlink'],
					['Table','HorizontalRule', 'Image']
];
config.toolbar_Product = [
 					['Maximize'],					
					['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
					['NumberedList','BulletedList'],
					['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
					['Blockquote'],
					['Format', 'Font', 'FontSize', 'TextColor', 'BGColor' ],
					['Link','Unlink'],
					['Table','HorizontalRule', 'Image'],
					['Source']
];

config.toolbar_Links = [					
					['Maximize'],
					['Bold','Italic','Underline'],					
					['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],					
					['Font', 'FontSize', 'TextColor', 'BGColor' ],
					['SpecialChar'],	
					['Link','Unlink'],
					['Source']
				];

config.toolbar_HTML = [
    ['Bold', 'Italic' ],
	['TextColor', 'BGColor' ],
	['Link','Unlink'],
	['NumberedList','BulletedList'],
	['Source']
];
config.toolbar_Basic = [
    ['Bold', 'Italic' ],
	['TextColor', 'BGColor' ],
	['Link','Unlink'],
	['Source']
];
config.toolbar_Forum = [
					['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
					['NumberedList','BulletedList','-','Outdent','Indent'],
					['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
					['Font','FontSize','TextColor','BGColor'],
					['Link','Unlink','HorizontalRule'],
					[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
					['Blockquote', 'Smiley'],
];
 

};

