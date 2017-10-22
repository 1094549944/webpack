import css from './css/index.css';
import less from './css/black.less';
import jiaxinying from './jiaxinying';

{
    let JiaXinying = "hello jiaxinying";
    document.getElementById('test').innerHTML = JiaXinying;
}
jiaxinying();
$('#test').html('hello 测试打包第三方类库')