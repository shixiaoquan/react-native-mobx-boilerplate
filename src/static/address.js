/**
 * Created by hejing on 2016/7/7.
 */
const prov = [
  {
    id: 110000, name: '北京市', pid: '86', type: 'province', pinyin: 'bei jing shi', py: 'bjs', prefix: 'b',
  },
  {
    id: 120000, name: '天津市', pid: '86', type: 'province', pinyin: 'tian jin shi', py: 'tjs', prefix: 't',
  },
  {
    id: 130000, name: '河北省', pid: '86', type: 'province', pinyin: 'he bei sheng', py: 'hbs', prefix: 'h',
  },
  {
    id: 140000, name: '山西省', pid: '86', type: 'province', pinyin: 'shan xi sheng', py: 'sxs', prefix: 's',
  },
  {
    id: 150000, name: '内蒙古自治区', pid: '86', type: 'province', pinyin: 'nei meng gu zi zhi qu', py: 'nmgzzq', prefix: 'n',
  },
  {
    id: 210000, name: '辽宁省', pid: '86', type: 'province', pinyin: 'liao ning sheng', py: 'lns', prefix: 'l',
  },
  {
    id: 220000, name: '吉林省', pid: '86', type: 'province', pinyin: 'ji lin sheng', py: 'jls', prefix: 'j',
  },
  {
    id: 230000, name: '黑龙江省', pid: '86', type: 'province', pinyin: 'hei long jiang sheng', py: 'hljs', prefix: 'h',
  },
  {
    id: 310000, name: '上海市', pid: '86', type: 'province', pinyin: 'shang hai shi', py: 'shs', prefix: 's',
  },
  {
    id: 320000, name: '江苏省', pid: '86', type: 'province', pinyin: 'jiang su sheng', py: 'jss', prefix: 'j',
  },
  {
    id: 330000, name: '浙江省', pid: '86', type: 'province', pinyin: 'zhe jiang sheng', py: 'zjs', prefix: 'z',
  },
  {
    id: 340000, name: '安徽省', pid: '86', type: 'province', pinyin: 'an hui sheng', py: 'ahs', prefix: 'a',
  },
  {
    id: 350000, name: '福建省', pid: '86', type: 'province', pinyin: 'fu jian sheng', py: 'fjs', prefix: 'f',
  },
  {
    id: 360000, name: '江西省', pid: '86', type: 'province', pinyin: 'jiang xi sheng', py: 'jxs', prefix: 'j',
  },
  {
    id: 370000, name: '山东省', pid: '86', type: 'province', pinyin: 'shan dong sheng', py: 'sds', prefix: 's',
  },
  {
    id: 410000, name: '河南省', pid: '86', type: 'province', pinyin: 'he nan sheng', py: 'hns', prefix: 'h',
  },
  {
    id: 420000, name: '湖北省', pid: '86', type: 'province', pinyin: 'hu bei sheng', py: 'hbs', prefix: 'h',
  },
  {
    id: 430000, name: '湖南省', pid: '86', type: 'province', pinyin: 'hu nan sheng', py: 'hns', prefix: 'h',
  },
  {
    id: 440000, name: '广东省', pid: '86', type: 'province', pinyin: 'guang dong sheng', py: 'gds', prefix: 'g',
  },
  {
    id: 450000, name: '广西壮族自治区', pid: '86', type: 'province', pinyin: 'guang xi zhuang zu zi zhi qu', py: 'gxzzzzq', prefix: 'g',
  },
  {
    id: 460000, name: '海南省', pid: '86', type: 'province', pinyin: 'hai nan sheng', py: 'hns', prefix: 'h',
  },
  {
    id: 500000, name: '重庆市', pid: '86', type: 'province', pinyin: 'chong qing shi', py: 'cqs', prefix: 'c',
  },
  {
    id: 510000, name: '四川省', pid: '86', type: 'province', pinyin: 'si chuan sheng', py: 'scs', prefix: 's',
  },
  {
    id: 520000, name: '贵州省', pid: '86', type: 'province', pinyin: 'gui zhou sheng', py: 'gzs', prefix: 'g',
  },
  {
    id: 530000, name: '云南省', pid: '86', type: 'province', pinyin: 'yun nan sheng', py: 'yns', prefix: 'y',
  },
  {
    id: 540000, name: '西藏自治区', pid: '86', type: 'province', pinyin: 'xi zang zi zhi qu', py: 'xzzzq', prefix: 'x',
  },
  {
    id: 610000, name: '陕西省', pid: '86', type: 'province', pinyin: 'shan xi sheng', py: 'sxs', prefix: 's',
  },
  {
    id: 620000, name: '甘肃省', pid: '86', type: 'province', pinyin: 'gan su sheng', py: 'gss', prefix: 'g',
  },
  {
    id: 630000, name: '青海省', pid: '86', type: 'province', pinyin: 'qing hai sheng', py: 'qhs', prefix: 'q',
  },
  {
    id: 640000, name: '宁夏回族自治区', pid: '86', type: 'province', pinyin: 'ning xia hui zu zi zhi qu', py: 'nxhzzzq', prefix: 'n',
  },
  {
    id: 650000, name: '新疆维吾尔自治区', pid: '86', type: 'province', pinyin: 'xin jiang wei wu er zi zhi qu', py: 'xjwwezzq', prefix: 'x',
  },
  {
    id: 710000, name: '台湾省', pid: '86', type: 'province', pinyin: 'tai wan sheng', py: 'tws', prefix: 't',
  },
  {
    id: 810000, name: '香港特别行政区', pid: '86', type: 'province', pinyin: 'xiang gang te bie xing zheng qu', py: 'xgtbxzq', prefix: 'x',
  },
  {
    id: 820000, name: '澳门特别行政区', pid: '86', type: 'province', pinyin: 'ao men te bie xing zheng qu', py: 'amtbxzq', prefix: 'a',
  },
];
const city = [
  {
    id: 110100, name: '北京市', pid: '110000', type: 'city', pinyin: 'bei jing shi', py: 'bjs', prefix: 'b',
  },
  {
    id: 120100, name: '天津市', pid: '120000', type: 'city', pinyin: 'tian jin shi', py: 'tjs', prefix: 't',
  },
  {
    id: 130100, name: '石家庄市', pid: '130000', type: 'city', pinyin: 'shi jia zhuang shi', py: 'sjzs', prefix: 's',
  },
  {
    id: 130200, name: '唐山市', pid: '130000', type: 'city', pinyin: 'tang shan shi', py: 'tss', prefix: 't',
  },
  {
    id: 130300, name: '秦皇岛市', pid: '130000', type: 'city', pinyin: 'qin huang dao shi', py: 'qhds', prefix: 'q',
  },
  {
    id: 130400, name: '邯郸市', pid: '130000', type: 'city', pinyin: 'han dan shi', py: 'hds', prefix: 'h',
  },
  {
    id: 130500, name: '邢台市', pid: '130000', type: 'city', pinyin: 'xing tai shi', py: 'xts', prefix: 'x',
  },
  {
    id: 130600, name: '保定市', pid: '130000', type: 'city', pinyin: 'bao ding shi', py: 'bds', prefix: 'b',
  },
  {
    id: 130700, name: '张家口市', pid: '130000', type: 'city', pinyin: 'zhang jia kou shi', py: 'zjks', prefix: 'z',
  },
  {
    id: 130800, name: '承德市', pid: '130000', type: 'city', pinyin: 'cheng de shi', py: 'cds', prefix: 'c',
  },
  {
    id: 130900, name: '沧州市', pid: '130000', type: 'city', pinyin: 'cang zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 131000, name: '廊坊市', pid: '130000', type: 'city', pinyin: 'lang fang shi', py: 'lfs', prefix: 'l',
  },
  {
    id: 131100, name: '衡水市', pid: '130000', type: 'city', pinyin: 'heng shui shi', py: 'hss', prefix: 'h',
  },
  {
    id: 140100, name: '太原市', pid: '140000', type: 'city', pinyin: 'tai yuan shi', py: 'tys', prefix: 't',
  },
  {
    id: 140200, name: '大同市', pid: '140000', type: 'city', pinyin: 'da tong shi', py: 'dts', prefix: 'd',
  },
  {
    id: 140300, name: '阳泉市', pid: '140000', type: 'city', pinyin: 'yang quan shi', py: 'yqs', prefix: 'y',
  },
  {
    id: 140400, name: '长治市', pid: '140000', type: 'city', pinyin: 'chang zhi shi', py: 'czs', prefix: 'c',
  },
  {
    id: 140500, name: '晋城市', pid: '140000', type: 'city', pinyin: 'jin cheng shi', py: 'jcs', prefix: 'j',
  },
  {
    id: 140600, name: '朔州市', pid: '140000', type: 'city', pinyin: 'shuo zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 140700, name: '晋中市', pid: '140000', type: 'city', pinyin: 'jin zhong shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 140800, name: '运城市', pid: '140000', type: 'city', pinyin: 'yun cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 140900, name: '忻州市', pid: '140000', type: 'city', pinyin: 'xin zhou shi', py: 'xzs', prefix: 'x',
  },
  {
    id: 141000, name: '临汾市', pid: '140000', type: 'city', pinyin: 'lin fen shi', py: 'lfs', prefix: 'l',
  },
  {
    id: 141100, name: '吕梁市', pid: '140000', type: 'city', pinyin: 'lv liang shi', py: 'lls', prefix: 'l',
  },
  {
    id: 150100, name: '呼和浩特市', pid: '150000', type: 'city', pinyin: 'hu he hao te shi', py: 'hhhts', prefix: 'h',
  },
  {
    id: 150200, name: '包头市', pid: '150000', type: 'city', pinyin: 'bao tou shi', py: 'bts', prefix: 'b',
  },
  {
    id: 150300, name: '乌海市', pid: '150000', type: 'city', pinyin: 'wu hai shi', py: 'whs', prefix: 'w',
  },
  {
    id: 150400, name: '赤峰市', pid: '150000', type: 'city', pinyin: 'chi feng shi', py: 'cfs', prefix: 'c',
  },
  {
    id: 150500, name: '通辽市', pid: '150000', type: 'city', pinyin: 'tong liao shi', py: 'tls', prefix: 't',
  },
  {
    id: 150600, name: '鄂尔多斯市', pid: '150000', type: 'city', pinyin: 'e er duo si shi', py: 'eedss', prefix: 'e',
  },
  {
    id: 150700, name: '呼伦贝尔市', pid: '150000', type: 'city', pinyin: 'hu lun bei er shi', py: 'hlbes', prefix: 'h',
  },
  {
    id: 150800, name: '巴彦淖尔市', pid: '150000', type: 'city', pinyin: 'ba yan nao er shi', py: 'bynes', prefix: 'b',
  },
  {
    id: 150900, name: '乌兰察布市', pid: '150000', type: 'city', pinyin: 'wu lan cha bu shi', py: 'wlcbs', prefix: 'w',
  },
  {
    id: 152200, name: '兴安盟', pid: '150000', type: 'city', pinyin: 'xing an meng', py: 'xam', prefix: 'x',
  },
  {
    id: 152500, name: '锡林郭勒盟', pid: '150000', type: 'city', pinyin: 'xi lin guo le meng', py: 'xlglm', prefix: 'x',
  },
  {
    id: 152900, name: '阿拉善盟', pid: '150000', type: 'city', pinyin: 'a la shan meng', py: 'alsm', prefix: 'a',
  },
  {
    id: 210100, name: '沈阳市', pid: '210000', type: 'city', pinyin: 'shen yang shi', py: 'sys', prefix: 's',
  },
  {
    id: 210200, name: '大连市', pid: '210000', type: 'city', pinyin: 'da lian shi', py: 'dls', prefix: 'd',
  },
  {
    id: 210300, name: '鞍山市', pid: '210000', type: 'city', pinyin: 'an shan shi', py: 'ass', prefix: 'a',
  },
  {
    id: 210400, name: '抚顺市', pid: '210000', type: 'city', pinyin: 'fu shun shi', py: 'fss', prefix: 'f',
  },
  {
    id: 210500, name: '本溪市', pid: '210000', type: 'city', pinyin: 'ben xi shi', py: 'bxs', prefix: 'b',
  },
  {
    id: 210600, name: '丹东市', pid: '210000', type: 'city', pinyin: 'dan dong shi', py: 'dds', prefix: 'd',
  },
  {
    id: 210700, name: '锦州市', pid: '210000', type: 'city', pinyin: 'jin zhou shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 210800, name: '营口市', pid: '210000', type: 'city', pinyin: 'ying kou shi', py: 'yks', prefix: 'y',
  },
  {
    id: 210900, name: '阜新市', pid: '210000', type: 'city', pinyin: 'fu xin shi', py: 'fxs', prefix: 'f',
  },
  {
    id: 211000, name: '辽阳市', pid: '210000', type: 'city', pinyin: 'liao yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 211100, name: '盘锦市', pid: '210000', type: 'city', pinyin: 'pan jin shi', py: 'pjs', prefix: 'p',
  },
  {
    id: 211200, name: '铁岭市', pid: '210000', type: 'city', pinyin: 'tie ling shi', py: 'tls', prefix: 't',
  },
  {
    id: 211300, name: '朝阳市', pid: '210000', type: 'city', pinyin: 'chao yang shi', py: 'cys', prefix: 'c',
  },
  {
    id: 211400, name: '葫芦岛市', pid: '210000', type: 'city', pinyin: 'hu lu dao shi', py: 'hlds', prefix: 'h',
  },
  {
    id: 220100, name: '长春市', pid: '220000', type: 'city', pinyin: 'chang chun shi', py: 'ccs', prefix: 'c',
  },
  {
    id: 220200, name: '吉林市', pid: '220000', type: 'city', pinyin: 'ji lin shi', py: 'jls', prefix: 'j',
  },
  {
    id: 220300, name: '四平市', pid: '220000', type: 'city', pinyin: 'si ping shi', py: 'sps', prefix: 's',
  },
  {
    id: 220400, name: '辽源市', pid: '220000', type: 'city', pinyin: 'liao yuan shi', py: 'lys', prefix: 'l',
  },
  {
    id: 220500, name: '通化市', pid: '220000', type: 'city', pinyin: 'tong hua shi', py: 'ths', prefix: 't',
  },
  {
    id: 220600, name: '白山市', pid: '220000', type: 'city', pinyin: 'bai shan shi', py: 'bss', prefix: 'b',
  },
  {
    id: 220700, name: '松原市', pid: '220000', type: 'city', pinyin: 'song yuan shi', py: 'sys', prefix: 's',
  },
  {
    id: 220800, name: '白城市', pid: '220000', type: 'city', pinyin: 'bai cheng shi', py: 'bcs', prefix: 'b',
  },
  {
    id: 222400, name: '延边朝鲜族自治州', pid: '220000', type: 'city', pinyin: 'yan bian chao xian zu zi zhi zhou', py: 'ybcxzzzz', prefix: 'y',
  },
  {
    id: 230100, name: '哈尔滨市', pid: '230000', type: 'city', pinyin: 'ha er bin shi', py: 'hebs', prefix: 'h',
  },
  {
    id: 230200, name: '齐齐哈尔市', pid: '230000', type: 'city', pinyin: 'qi qi ha er shi', py: 'qqhes', prefix: 'q',
  },
  {
    id: 230300, name: '鸡西市', pid: '230000', type: 'city', pinyin: 'ji xi shi', py: 'jxs', prefix: 'j',
  },
  {
    id: 230400, name: '鹤岗市', pid: '230000', type: 'city', pinyin: 'he gang shi', py: 'hgs', prefix: 'h',
  },
  {
    id: 230500, name: '双鸭山市', pid: '230000', type: 'city', pinyin: 'shuang ya shan shi', py: 'syss', prefix: 's',
  },
  {
    id: 230600, name: '大庆市', pid: '230000', type: 'city', pinyin: 'da qing shi', py: 'dqs', prefix: 'd',
  },
  {
    id: 230700, name: '伊春市', pid: '230000', type: 'city', pinyin: 'yi chun shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 230800, name: '佳木斯市', pid: '230000', type: 'city', pinyin: 'jia mu si shi', py: 'jmss', prefix: 'j',
  },
  {
    id: 230900, name: '七台河市', pid: '230000', type: 'city', pinyin: 'qi tai he shi', py: 'qths', prefix: 'q',
  },
  {
    id: 231000, name: '牡丹江市', pid: '230000', type: 'city', pinyin: 'mu dan jiang shi', py: 'mdjs', prefix: 'm',
  },
  {
    id: 231100, name: '黑河市', pid: '230000', type: 'city', pinyin: 'hei he shi', py: 'hhs', prefix: 'h',
  },
  {
    id: 231200, name: '绥化市', pid: '230000', type: 'city', pinyin: 'sui hua shi', py: 'shs', prefix: 's',
  },
  {
    id: 232700, name: '大兴安岭地区', pid: '230000', type: 'city', pinyin: 'da xing an ling di qu', py: 'dxaldq', prefix: 'd',
  },
  {
    id: 310100, name: '上海市', pid: '310000', type: 'city', pinyin: 'shang hai shi', py: 'shs', prefix: 's',
  },
  {
    id: 320100, name: '南京市', pid: '320000', type: 'city', pinyin: 'nan jing shi', py: 'njs', prefix: 'n',
  },
  {
    id: 320200, name: '无锡市', pid: '320000', type: 'city', pinyin: 'wu xi shi', py: 'wxs', prefix: 'w',
  },
  {
    id: 320300, name: '徐州市', pid: '320000', type: 'city', pinyin: 'xu zhou shi', py: 'xzs', prefix: 'x',
  },
  {
    id: 320400, name: '常州市', pid: '320000', type: 'city', pinyin: 'chang zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 320500, name: '苏州市', pid: '320000', type: 'city', pinyin: 'su zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 320600, name: '南通市', pid: '320000', type: 'city', pinyin: 'nan tong shi', py: 'nts', prefix: 'n',
  },
  {
    id: 320700, name: '连云港市', pid: '320000', type: 'city', pinyin: 'lian yun gang shi', py: 'lygs', prefix: 'l',
  },
  {
    id: 320800, name: '淮安市', pid: '320000', type: 'city', pinyin: 'huai an shi', py: 'has', prefix: 'h',
  },
  {
    id: 320900, name: '盐城市', pid: '320000', type: 'city', pinyin: 'yan cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 321000, name: '扬州市', pid: '320000', type: 'city', pinyin: 'yang zhou shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 321100, name: '镇江市', pid: '320000', type: 'city', pinyin: 'zhen jiang shi', py: 'zjs', prefix: 'z',
  },
  {
    id: 321200, name: '泰州市', pid: '320000', type: 'city', pinyin: 'tai zhou shi', py: 'tzs', prefix: 't',
  },
  {
    id: 321300, name: '宿迁市', pid: '320000', type: 'city', pinyin: 'su qian shi', py: 'sqs', prefix: 's',
  },
  {
    id: 330100, name: '杭州市', pid: '330000', type: 'city', pinyin: 'hang zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 330200, name: '宁波市', pid: '330000', type: 'city', pinyin: 'ning bo shi', py: 'nbs', prefix: 'n',
  },
  {
    id: 330300, name: '温州市', pid: '330000', type: 'city', pinyin: 'wen zhou shi', py: 'wzs', prefix: 'w',
  },
  {
    id: 330400, name: '嘉兴市', pid: '330000', type: 'city', pinyin: 'jia xing shi', py: 'jxs', prefix: 'j',
  },
  {
    id: 330500, name: '湖州市', pid: '330000', type: 'city', pinyin: 'hu zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 330600, name: '绍兴市', pid: '330000', type: 'city', pinyin: 'shao xing shi', py: 'sxs', prefix: 's',
  },
  {
    id: 330700, name: '金华市', pid: '330000', type: 'city', pinyin: 'jin hua shi', py: 'jhs', prefix: 'j',
  },
  {
    id: 330800, name: '衢州市', pid: '330000', type: 'city', pinyin: 'qu zhou shi', py: 'qzs', prefix: 'q',
  },
  {
    id: 330900, name: '舟山市', pid: '330000', type: 'city', pinyin: 'zhou shan shi', py: 'zss', prefix: 'z',
  },
  {
    id: 331000, name: '台州市', pid: '330000', type: 'city', pinyin: 'tai zhou shi', py: 'tzs', prefix: 't',
  },
  {
    id: 331100, name: '丽水市', pid: '330000', type: 'city', pinyin: 'li shui shi', py: 'lss', prefix: 'l',
  },
  {
    id: 340100, name: '合肥市', pid: '340000', type: 'city', pinyin: 'he fei shi', py: 'hfs', prefix: 'h',
  },
  {
    id: 340200, name: '芜湖市', pid: '340000', type: 'city', pinyin: 'wu hu shi', py: 'whs', prefix: 'w',
  },
  {
    id: 340300, name: '蚌埠市', pid: '340000', type: 'city', pinyin: 'beng bu shi', py: 'bbs', prefix: 'b',
  },
  {
    id: 340400, name: '淮南市', pid: '340000', type: 'city', pinyin: 'huai nan shi', py: 'hns', prefix: 'h',
  },
  {
    id: 340500, name: '马鞍山市', pid: '340000', type: 'city', pinyin: 'ma an shan shi', py: 'mass', prefix: 'm',
  },
  {
    id: 340600, name: '淮北市', pid: '340000', type: 'city', pinyin: 'huai bei shi', py: 'hbs', prefix: 'h',
  },
  {
    id: 340700, name: '铜陵市', pid: '340000', type: 'city', pinyin: 'tong ling shi', py: 'tls', prefix: 't',
  },
  {
    id: 340800, name: '安庆市', pid: '340000', type: 'city', pinyin: 'an qing shi', py: 'aqs', prefix: 'a',
  },
  {
    id: 341000, name: '黄山市', pid: '340000', type: 'city', pinyin: 'huang shan shi', py: 'hss', prefix: 'h',
  },
  {
    id: 341100, name: '滁州市', pid: '340000', type: 'city', pinyin: 'chu zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 341200, name: '阜阳市', pid: '340000', type: 'city', pinyin: 'fu yang shi', py: 'fys', prefix: 'f',
  },
  {
    id: 341300, name: '宿州市', pid: '340000', type: 'city', pinyin: 'su zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 341500, name: '六安市', pid: '340000', type: 'city', pinyin: 'liu an shi', py: 'las', prefix: 'l',
  },
  {
    id: 341600, name: '亳州市', pid: '340000', type: 'city', pinyin: 'bo zhou shi', py: 'bzs', prefix: 'b',
  },
  {
    id: 341700, name: '池州市', pid: '340000', type: 'city', pinyin: 'chi zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 341800, name: '宣城市', pid: '340000', type: 'city', pinyin: 'xuan cheng shi', py: 'xcs', prefix: 'x',
  },
  {
    id: 350100, name: '福州市', pid: '350000', type: 'city', pinyin: 'fu zhou shi', py: 'fzs', prefix: 'f',
  },
  {
    id: 350200, name: '厦门市', pid: '350000', type: 'city', pinyin: 'xia men shi', py: 'xms', prefix: 'x',
  },
  {
    id: 350300, name: '莆田市', pid: '350000', type: 'city', pinyin: 'pu tian shi', py: 'pts', prefix: 'p',
  },
  {
    id: 350400, name: '三明市', pid: '350000', type: 'city', pinyin: 'san ming shi', py: 'sms', prefix: 's',
  },
  {
    id: 350500, name: '泉州市', pid: '350000', type: 'city', pinyin: 'quan zhou shi', py: 'qzs', prefix: 'q',
  },
  {
    id: 350600, name: '漳州市', pid: '350000', type: 'city', pinyin: 'zhang zhou shi', py: 'zzs', prefix: 'z',
  },
  {
    id: 350700, name: '南平市', pid: '350000', type: 'city', pinyin: 'nan ping shi', py: 'nps', prefix: 'n',
  },
  {
    id: 350800, name: '龙岩市', pid: '350000', type: 'city', pinyin: 'long yan shi', py: 'lys', prefix: 'l',
  },
  {
    id: 350900, name: '宁德市', pid: '350000', type: 'city', pinyin: 'ning de shi', py: 'nds', prefix: 'n',
  },
  {
    id: 360100, name: '南昌市', pid: '360000', type: 'city', pinyin: 'nan chang shi', py: 'ncs', prefix: 'n',
  },
  {
    id: 360200, name: '景德镇市', pid: '360000', type: 'city', pinyin: 'jing de zhen shi', py: 'jdzs', prefix: 'j',
  },
  {
    id: 360300, name: '萍乡市', pid: '360000', type: 'city', pinyin: 'ping xiang shi', py: 'pxs', prefix: 'p',
  },
  {
    id: 360400, name: '九江市', pid: '360000', type: 'city', pinyin: 'jiu jiang shi', py: 'jjs', prefix: 'j',
  },
  {
    id: 360500, name: '新余市', pid: '360000', type: 'city', pinyin: 'xin yu shi', py: 'xys', prefix: 'x',
  },
  {
    id: 360600, name: '鹰潭市', pid: '360000', type: 'city', pinyin: 'ying tan shi', py: 'yts', prefix: 'y',
  },
  {
    id: 360700, name: '赣州市', pid: '360000', type: 'city', pinyin: 'gan zhou shi', py: 'gzs', prefix: 'g',
  },
  {
    id: 360800, name: '吉安市', pid: '360000', type: 'city', pinyin: 'ji an shi', py: 'jas', prefix: 'j',
  },
  {
    id: 360900, name: '宜春市', pid: '360000', type: 'city', pinyin: 'yi chun shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 361000, name: '抚州市', pid: '360000', type: 'city', pinyin: 'fu zhou shi', py: 'fzs', prefix: 'f',
  },
  {
    id: 361100, name: '上饶市', pid: '360000', type: 'city', pinyin: 'shang rao shi', py: 'srs', prefix: 's',
  },
  {
    id: 370100, name: '济南市', pid: '370000', type: 'city', pinyin: 'ji nan shi', py: 'jns', prefix: 'j',
  },
  {
    id: 370200, name: '青岛市', pid: '370000', type: 'city', pinyin: 'qing dao shi', py: 'qds', prefix: 'q',
  },
  {
    id: 370300, name: '淄博市', pid: '370000', type: 'city', pinyin: 'zi bo shi', py: 'zbs', prefix: 'z',
  },
  {
    id: 370400, name: '枣庄市', pid: '370000', type: 'city', pinyin: 'zao zhuang shi', py: 'zzs', prefix: 'z',
  },
  {
    id: 370500, name: '东营市', pid: '370000', type: 'city', pinyin: 'dong ying shi', py: 'dys', prefix: 'd',
  },
  {
    id: 370600, name: '烟台市', pid: '370000', type: 'city', pinyin: 'yan tai shi', py: 'yts', prefix: 'y',
  },
  {
    id: 370700, name: '潍坊市', pid: '370000', type: 'city', pinyin: 'wei fang shi', py: 'wfs', prefix: 'w',
  },
  {
    id: 370800, name: '济宁市', pid: '370000', type: 'city', pinyin: 'ji ning shi', py: 'jns', prefix: 'j',
  },
  {
    id: 370900, name: '泰安市', pid: '370000', type: 'city', pinyin: 'tai an shi', py: 'tas', prefix: 't',
  },
  {
    id: 371000, name: '威海市', pid: '370000', type: 'city', pinyin: 'wei hai shi', py: 'whs', prefix: 'w',
  },
  {
    id: 371100, name: '日照市', pid: '370000', type: 'city', pinyin: 'ri zhao shi', py: 'rzs', prefix: 'r',
  },
  {
    id: 371200, name: '莱芜市', pid: '370000', type: 'city', pinyin: 'lai wu shi', py: 'lws', prefix: 'l',
  },
  {
    id: 371300, name: '临沂市', pid: '370000', type: 'city', pinyin: 'lin yi shi', py: 'lys', prefix: 'l',
  },
  {
    id: 371400, name: '德州市', pid: '370000', type: 'city', pinyin: 'de zhou shi', py: 'dzs', prefix: 'd',
  },
  {
    id: 371500, name: '聊城市', pid: '370000', type: 'city', pinyin: 'liao cheng shi', py: 'lcs', prefix: 'l',
  },
  {
    id: 371600, name: '滨州市', pid: '370000', type: 'city', pinyin: 'bin zhou shi', py: 'bzs', prefix: 'b',
  },
  {
    id: 371700, name: '菏泽市', pid: '370000', type: 'city', pinyin: 'he ze shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 410100, name: '郑州市', pid: '410000', type: 'city', pinyin: 'zheng zhou shi', py: 'zzs', prefix: 'z',
  },
  {
    id: 410200, name: '开封市', pid: '410000', type: 'city', pinyin: 'kai feng shi', py: 'kfs', prefix: 'k',
  },
  {
    id: 410300, name: '洛阳市', pid: '410000', type: 'city', pinyin: 'luo yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 410400, name: '平顶山市', pid: '410000', type: 'city', pinyin: 'ping ding shan shi', py: 'pdss', prefix: 'p',
  },
  {
    id: 410500, name: '安阳市', pid: '410000', type: 'city', pinyin: 'an yang shi', py: 'ays', prefix: 'a',
  },
  {
    id: 410600, name: '鹤壁市', pid: '410000', type: 'city', pinyin: 'he bi shi', py: 'hbs', prefix: 'h',
  },
  {
    id: 410700, name: '新乡市', pid: '410000', type: 'city', pinyin: 'xin xiang shi', py: 'xxs', prefix: 'x',
  },
  {
    id: 410800, name: '焦作市', pid: '410000', type: 'city', pinyin: 'jiao zuo shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 410900, name: '濮阳市', pid: '410000', type: 'city', pinyin: 'pu yang shi', py: 'pys', prefix: 'p',
  },
  {
    id: 411000, name: '许昌市', pid: '410000', type: 'city', pinyin: 'xu chang shi', py: 'xcs', prefix: 'x',
  },
  {
    id: 411100, name: '漯河市', pid: '410000', type: 'city', pinyin: 'luo he shi', py: 'lhs', prefix: 'l',
  },
  {
    id: 411200, name: '三门峡市', pid: '410000', type: 'city', pinyin: 'san men xia shi', py: 'smxs', prefix: 's',
  },
  {
    id: 411300, name: '南阳市', pid: '410000', type: 'city', pinyin: 'nan yang shi', py: 'nys', prefix: 'n',
  },
  {
    id: 411400, name: '商丘市', pid: '410000', type: 'city', pinyin: 'shang qiu shi', py: 'sqs', prefix: 's',
  },
  {
    id: 411500, name: '信阳市', pid: '410000', type: 'city', pinyin: 'xin yang shi', py: 'xys', prefix: 'x',
  },
  {
    id: 411600, name: '周口市', pid: '410000', type: 'city', pinyin: 'zhou kou shi', py: 'zks', prefix: 'z',
  },
  {
    id: 411700, name: '驻马店市', pid: '410000', type: 'city', pinyin: 'zhu ma dian shi', py: 'zmds', prefix: 'z',
  },
  {
    id: 419000, name: '省直辖县级行政区划', pid: '410000', type: 'city', pinyin: 'sheng zhi xia xian ji xing zheng qu hua', py: 'szxxjxzqh', prefix: 's',
  },
  {
    id: 420100, name: '武汉市', pid: '420000', type: 'city', pinyin: 'wu han shi', py: 'whs', prefix: 'w',
  },
  {
    id: 420200, name: '黄石市', pid: '420000', type: 'city', pinyin: 'huang shi shi', py: 'hss', prefix: 'h',
  },
  {
    id: 420300, name: '十堰市', pid: '420000', type: 'city', pinyin: 'shi yan shi', py: 'sys', prefix: 's',
  },
  {
    id: 420500, name: '宜昌市', pid: '420000', type: 'city', pinyin: 'yi chang shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 420600, name: '襄阳市', pid: '420000', type: 'city', pinyin: 'xiang yang shi', py: 'xys', prefix: 'x',
  },
  {
    id: 420700, name: '鄂州市', pid: '420000', type: 'city', pinyin: 'e zhou shi', py: 'ezs', prefix: 'e',
  },
  {
    id: 420800, name: '荆门市', pid: '420000', type: 'city', pinyin: 'jing men shi', py: 'jms', prefix: 'j',
  },
  {
    id: 420900, name: '孝感市', pid: '420000', type: 'city', pinyin: 'xiao gan shi', py: 'xgs', prefix: 'x',
  },
  {
    id: 421000, name: '荆州市', pid: '420000', type: 'city', pinyin: 'jing zhou shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 421100, name: '黄冈市', pid: '420000', type: 'city', pinyin: 'huang gang shi', py: 'hgs', prefix: 'h',
  },
  {
    id: 421200, name: '咸宁市', pid: '420000', type: 'city', pinyin: 'xian ning shi', py: 'xns', prefix: 'x',
  },
  {
    id: 421300, name: '随州市', pid: '420000', type: 'city', pinyin: 'sui zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 422800, name: '恩施土家族苗族自治州', pid: '420000', type: 'city', pinyin: 'en shi tu jia zu miao zu zi zhi zhou', py: 'estjzmzzzz', prefix: 'e',
  },
  {
    id: 429000, name: '省直辖县级行政区划', pid: '420000', type: 'city', pinyin: 'sheng zhi xia xian ji xing zheng qu hua', py: 'szxxjxzqh', prefix: 's',
  },
  {
    id: 430100, name: '长沙市', pid: '430000', type: 'city', pinyin: 'chang sha shi', py: 'css', prefix: 'c',
  },
  {
    id: 430200, name: '株洲市', pid: '430000', type: 'city', pinyin: 'zhu zhou shi', py: 'zzs', prefix: 'z',
  },
  {
    id: 430300, name: '湘潭市', pid: '430000', type: 'city', pinyin: 'xiang tan shi', py: 'xts', prefix: 'x',
  },
  {
    id: 430400, name: '衡阳市', pid: '430000', type: 'city', pinyin: 'heng yang shi', py: 'hys', prefix: 'h',
  },
  {
    id: 430500, name: '邵阳市', pid: '430000', type: 'city', pinyin: 'shao yang shi', py: 'sys', prefix: 's',
  },
  {
    id: 430600, name: '岳阳市', pid: '430000', type: 'city', pinyin: 'yue yang shi', py: 'yys', prefix: 'y',
  },
  {
    id: 430700, name: '常德市', pid: '430000', type: 'city', pinyin: 'chang de shi', py: 'cds', prefix: 'c',
  },
  {
    id: 430800, name: '张家界市', pid: '430000', type: 'city', pinyin: 'zhang jia jie shi', py: 'zjjs', prefix: 'z',
  },
  {
    id: 430900, name: '益阳市', pid: '430000', type: 'city', pinyin: 'yi yang shi', py: 'yys', prefix: 'y',
  },
  {
    id: 431000, name: '郴州市', pid: '430000', type: 'city', pinyin: 'chen zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 431100, name: '永州市', pid: '430000', type: 'city', pinyin: 'yong zhou shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 431200, name: '怀化市', pid: '430000', type: 'city', pinyin: 'huai hua shi', py: 'hhs', prefix: 'h',
  },
  {
    id: 431300, name: '娄底市', pid: '430000', type: 'city', pinyin: 'lou di shi', py: 'lds', prefix: 'l',
  },
  {
    id: 433100, name: '湘西土家族苗族自治州', pid: '430000', type: 'city', pinyin: 'xiang xi tu jia zu miao zu zi zhi zhou', py: 'xxtjzmzzzz', prefix: 'x',
  },
  {
    id: 440100, name: '广州市', pid: '440000', type: 'city', pinyin: 'guang zhou shi', py: 'gzs', prefix: 'g',
  },
  {
    id: 440200, name: '韶关市', pid: '440000', type: 'city', pinyin: 'shao guan shi', py: 'sgs', prefix: 's',
  },
  {
    id: 440300, name: '深圳市', pid: '440000', type: 'city', pinyin: 'shen zhen shi', py: 'szs', prefix: 's',
  },
  {
    id: 440400, name: '珠海市', pid: '440000', type: 'city', pinyin: 'zhu hai shi', py: 'zhs', prefix: 'z',
  },
  {
    id: 440500, name: '汕头市', pid: '440000', type: 'city', pinyin: 'shan tou shi', py: 'sts', prefix: 's',
  },
  {
    id: 440600, name: '佛山市', pid: '440000', type: 'city', pinyin: 'fo shan shi', py: 'fss', prefix: 'f',
  },
  {
    id: 440700, name: '江门市', pid: '440000', type: 'city', pinyin: 'jiang men shi', py: 'jms', prefix: 'j',
  },
  {
    id: 440800, name: '湛江市', pid: '440000', type: 'city', pinyin: 'zhan jiang shi', py: 'zjs', prefix: 'z',
  },
  {
    id: 440900, name: '茂名市', pid: '440000', type: 'city', pinyin: 'mao ming shi', py: 'mms', prefix: 'm',
  },
  {
    id: 441200, name: '肇庆市', pid: '440000', type: 'city', pinyin: 'zhao qing shi', py: 'zqs', prefix: 'z',
  },
  {
    id: 441300, name: '惠州市', pid: '440000', type: 'city', pinyin: 'hui zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 441400, name: '梅州市', pid: '440000', type: 'city', pinyin: 'mei zhou shi', py: 'mzs', prefix: 'm',
  },
  {
    id: 441500, name: '汕尾市', pid: '440000', type: 'city', pinyin: 'shan wei shi', py: 'sws', prefix: 's',
  },
  {
    id: 441600, name: '河源市', pid: '440000', type: 'city', pinyin: 'he yuan shi', py: 'hys', prefix: 'h',
  },
  {
    id: 441700, name: '阳江市', pid: '440000', type: 'city', pinyin: 'yang jiang shi', py: 'yjs', prefix: 'y',
  },
  {
    id: 441800, name: '清远市', pid: '440000', type: 'city', pinyin: 'qing yuan shi', py: 'qys', prefix: 'q',
  },
  {
    id: 441900, name: '东莞市', pid: '440000', type: 'city', pinyin: 'dong guan shi', py: 'dgs', prefix: 'd',
  },
  {
    id: 442000, name: '中山市', pid: '440000', type: 'city', pinyin: 'zhong shan shi', py: 'zss', prefix: 'z',
  },
  {
    id: 445100, name: '潮州市', pid: '440000', type: 'city', pinyin: 'chao zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 445200, name: '揭阳市', pid: '440000', type: 'city', pinyin: 'jie yang shi', py: 'jys', prefix: 'j',
  },
  {
    id: 445300, name: '云浮市', pid: '440000', type: 'city', pinyin: 'yun fu shi', py: 'yfs', prefix: 'y',
  },
  {
    id: 450100, name: '南宁市', pid: '450000', type: 'city', pinyin: 'nan ning shi', py: 'nns', prefix: 'n',
  },
  {
    id: 450200, name: '柳州市', pid: '450000', type: 'city', pinyin: 'liu zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 450300, name: '桂林市', pid: '450000', type: 'city', pinyin: 'gui lin shi', py: 'gls', prefix: 'g',
  },
  {
    id: 450400, name: '梧州市', pid: '450000', type: 'city', pinyin: 'wu zhou shi', py: 'wzs', prefix: 'w',
  },
  {
    id: 450500, name: '北海市', pid: '450000', type: 'city', pinyin: 'bei hai shi', py: 'bhs', prefix: 'b',
  },
  {
    id: 450600, name: '防城港市', pid: '450000', type: 'city', pinyin: 'fang cheng gang shi', py: 'fcgs', prefix: 'f',
  },
  {
    id: 450700, name: '钦州市', pid: '450000', type: 'city', pinyin: 'qin zhou shi', py: 'qzs', prefix: 'q',
  },
  {
    id: 450800, name: '贵港市', pid: '450000', type: 'city', pinyin: 'gui gang shi', py: 'ggs', prefix: 'g',
  },
  {
    id: 450900, name: '玉林市', pid: '450000', type: 'city', pinyin: 'yu lin shi', py: 'yls', prefix: 'y',
  },
  {
    id: 451000, name: '百色市', pid: '450000', type: 'city', pinyin: 'bai se shi', py: 'bss', prefix: 'b',
  },
  {
    id: 451100, name: '贺州市', pid: '450000', type: 'city', pinyin: 'he zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 451200, name: '河池市', pid: '450000', type: 'city', pinyin: 'he chi shi', py: 'hcs', prefix: 'h',
  },
  {
    id: 451300, name: '来宾市', pid: '450000', type: 'city', pinyin: 'lai bin shi', py: 'lbs', prefix: 'l',
  },
  {
    id: 451400, name: '崇左市', pid: '450000', type: 'city', pinyin: 'chong zuo shi', py: 'czs', prefix: 'c',
  },
  {
    id: 460100, name: '海口市', pid: '460000', type: 'city', pinyin: 'hai kou shi', py: 'hks', prefix: 'h',
  },
  {
    id: 460200, name: '三亚市', pid: '460000', type: 'city', pinyin: 'san ya shi', py: 'sys', prefix: 's',
  },
  {
    id: 460300, name: '三沙市', pid: '460000', type: 'city', pinyin: 'san sha shi', py: 'sss', prefix: 's',
  },
  {
    id: 469000, name: '省直辖县级行政区划', pid: '460000', type: 'city', pinyin: 'sheng zhi xia xian ji xing zheng qu hua', py: 'szxxjxzqh', prefix: 's',
  },
  {
    id: 500100, name: '重庆市', pid: '500000', type: 'city', pinyin: 'chong qing shi', py: 'cqs', prefix: 'c',
  },
  {
    id: 510100, name: '成都市', pid: '510000', type: 'city', pinyin: 'cheng dou shi', py: 'cds', prefix: 'c',
  },
  {
    id: 510300, name: '自贡市', pid: '510000', type: 'city', pinyin: 'zi gong shi', py: 'zgs', prefix: 'z',
  },
  {
    id: 510400, name: '攀枝花市', pid: '510000', type: 'city', pinyin: 'pan zhi hua shi', py: 'pzhs', prefix: 'p',
  },
  {
    id: 510500, name: '泸州市', pid: '510000', type: 'city', pinyin: 'lu zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 510600, name: '德阳市', pid: '510000', type: 'city', pinyin: 'de yang shi', py: 'dys', prefix: 'd',
  },
  {
    id: 510700, name: '绵阳市', pid: '510000', type: 'city', pinyin: 'mian yang shi', py: 'mys', prefix: 'm',
  },
  {
    id: 510800, name: '广元市', pid: '510000', type: 'city', pinyin: 'guang yuan shi', py: 'gys', prefix: 'g',
  },
  {
    id: 510900, name: '遂宁市', pid: '510000', type: 'city', pinyin: 'sui ning shi', py: 'sns', prefix: 's',
  },
  {
    id: 511000, name: '内江市', pid: '510000', type: 'city', pinyin: 'nei jiang shi', py: 'njs', prefix: 'n',
  },
  {
    id: 511100, name: '乐山市', pid: '510000', type: 'city', pinyin: 'le shan shi', py: 'lss', prefix: 'l',
  },
  {
    id: 511300, name: '南充市', pid: '510000', type: 'city', pinyin: 'nan chong shi', py: 'ncs', prefix: 'n',
  },
  {
    id: 511400, name: '眉山市', pid: '510000', type: 'city', pinyin: 'mei shan shi', py: 'mss', prefix: 'm',
  },
  {
    id: 511500, name: '宜宾市', pid: '510000', type: 'city', pinyin: 'yi bin shi', py: 'ybs', prefix: 'y',
  },
  {
    id: 511600, name: '广安市', pid: '510000', type: 'city', pinyin: 'guang an shi', py: 'gas', prefix: 'g',
  },
  {
    id: 511700, name: '达州市', pid: '510000', type: 'city', pinyin: 'da zhou shi', py: 'dzs', prefix: 'd',
  },
  {
    id: 511800, name: '雅安市', pid: '510000', type: 'city', pinyin: 'ya an shi', py: 'yas', prefix: 'y',
  },
  {
    id: 511900, name: '巴中市', pid: '510000', type: 'city', pinyin: 'ba zhong shi', py: 'bzs', prefix: 'b',
  },
  {
    id: 512000, name: '资阳市', pid: '510000', type: 'city', pinyin: 'zi yang shi', py: 'zys', prefix: 'z',
  },
  {
    id: 513200, name: '阿坝藏族羌族自治州', pid: '510000', type: 'city', pinyin: 'a ba zang zu qiang zu zi zhi zhou', py: 'abzzqzzzz', prefix: 'a',
  },
  {
    id: 513300, name: '甘孜藏族自治州', pid: '510000', type: 'city', pinyin: 'gan zi zang zu zi zhi zhou', py: 'gzzzzzz', prefix: 'g',
  },
  {
    id: 513400, name: '凉山彝族自治州', pid: '510000', type: 'city', pinyin: 'liang shan yi zu zi zhi zhou', py: 'lsyzzzz', prefix: 'l',
  },
  {
    id: 520100, name: '贵阳市', pid: '520000', type: 'city', pinyin: 'gui yang shi', py: 'gys', prefix: 'g',
  },
  {
    id: 520200, name: '六盘水市', pid: '520000', type: 'city', pinyin: 'liu pan shui shi', py: 'lpss', prefix: 'l',
  },
  {
    id: 520300, name: '遵义市', pid: '520000', type: 'city', pinyin: 'zun yi shi', py: 'zys', prefix: 'z',
  },
  {
    id: 520400, name: '安顺市', pid: '520000', type: 'city', pinyin: 'an shun shi', py: 'ass', prefix: 'a',
  },
  {
    id: 520500, name: '毕节市', pid: '520000', type: 'city', pinyin: 'bi jie shi', py: 'bjs', prefix: 'b',
  },
  {
    id: 520600, name: '铜仁市', pid: '520000', type: 'city', pinyin: 'tong ren shi', py: 'trs', prefix: 't',
  },
  {
    id: 522300, name: '黔西南布依族苗族自治州', pid: '520000', type: 'city', pinyin: 'qian xi nan bu yi zu miao zu zi zhi zhou', py: 'qxnbyzmzzzz', prefix: 'q',
  },
  {
    id: 522600, name: '黔东南苗族侗族自治州', pid: '520000', type: 'city', pinyin: 'qian dong nan miao zu dong zu zi zhi zhou', py: 'qdnmzdzzzz', prefix: 'q',
  },
  {
    id: 522700, name: '黔南布依族苗族自治州', pid: '520000', type: 'city', pinyin: 'qian nan bu yi zu miao zu zi zhi zhou', py: 'qnbyzmzzzz', prefix: 'q',
  },
  {
    id: 530100, name: '昆明市', pid: '530000', type: 'city', pinyin: 'kun ming shi', py: 'kms', prefix: 'k',
  },
  {
    id: 530300, name: '曲靖市', pid: '530000', type: 'city', pinyin: 'qu jing shi', py: 'qjs', prefix: 'q',
  },
  {
    id: 530400, name: '玉溪市', pid: '530000', type: 'city', pinyin: 'yu xi shi', py: 'yxs', prefix: 'y',
  },
  {
    id: 530500, name: '保山市', pid: '530000', type: 'city', pinyin: 'bao shan shi', py: 'bss', prefix: 'b',
  },
  {
    id: 530600, name: '昭通市', pid: '530000', type: 'city', pinyin: 'zhao tong shi', py: 'zts', prefix: 'z',
  },
  {
    id: 530700, name: '丽江市', pid: '530000', type: 'city', pinyin: 'li jiang shi', py: 'ljs', prefix: 'l',
  },
  {
    id: 530800, name: '普洱市', pid: '530000', type: 'city', pinyin: 'pu er shi', py: 'pes', prefix: 'p',
  },
  {
    id: 530900, name: '临沧市', pid: '530000', type: 'city', pinyin: 'lin cang shi', py: 'lcs', prefix: 'l',
  },
  {
    id: 532300, name: '楚雄彝族自治州', pid: '530000', type: 'city', pinyin: 'chu xiong yi zu zi zhi zhou', py: 'cxyzzzz', prefix: 'c',
  },
  {
    id: 532500, name: '红河哈尼族彝族自治州', pid: '530000', type: 'city', pinyin: 'hong he ha ni zu yi zu zi zhi zhou', py: 'hhhnzyzzzz', prefix: 'h',
  },
  {
    id: 532600, name: '文山壮族苗族自治州', pid: '530000', type: 'city', pinyin: 'wen shan zhuang zu miao zu zi zhi zhou', py: 'wszzmzzzz', prefix: 'w',
  },
  {
    id: 532800, name: '西双版纳傣族自治州', pid: '530000', type: 'city', pinyin: 'xi shuang ban na dai zu zi zhi zhou', py: 'xsbndzzzz', prefix: 'x',
  },
  {
    id: 532900, name: '大理白族自治州', pid: '530000', type: 'city', pinyin: 'da li bai zu zi zhi zhou', py: 'dlbzzzz', prefix: 'd',
  },
  {
    id: 533100, name: '德宏傣族景颇族自治州', pid: '530000', type: 'city', pinyin: 'de hong dai zu jing po zu zi zhi zhou', py: 'dhdzjpzzzz', prefix: 'd',
  },
  {
    id: 533300, name: '怒江傈僳族自治州', pid: '530000', type: 'city', pinyin: 'nu jiang li su zu zi zhi zhou', py: 'njlszzzz', prefix: 'n',
  },
  {
    id: 533400, name: '迪庆藏族自治州', pid: '530000', type: 'city', pinyin: 'di qing zang zu zi zhi zhou', py: 'dqzzzzz', prefix: 'd',
  },
  {
    id: 540100, name: '拉萨市', pid: '540000', type: 'city', pinyin: 'la sa shi', py: 'lss', prefix: 'l',
  },
  {
    id: 542100, name: '昌都地区', pid: '540000', type: 'city', pinyin: 'chang dou di qu', py: 'cddq', prefix: 'c',
  },
  {
    id: 542200, name: '山南地区', pid: '540000', type: 'city', pinyin: 'shan nan di qu', py: 'sndq', prefix: 's',
  },
  {
    id: 542300, name: '日喀则地区', pid: '540000', type: 'city', pinyin: 'ri ka ze di qu', py: 'rkzdq', prefix: 'r',
  },
  {
    id: 542400, name: '那曲地区', pid: '540000', type: 'city', pinyin: 'na qu di qu', py: 'nqdq', prefix: 'n',
  },
  {
    id: 542500, name: '阿里地区', pid: '540000', type: 'city', pinyin: 'a li di qu', py: 'aldq', prefix: 'a',
  },
  {
    id: 542600, name: '林芝地区', pid: '540000', type: 'city', pinyin: 'lin zhi di qu', py: 'lzdq', prefix: 'l',
  },
  {
    id: 610100, name: '西安市', pid: '610000', type: 'city', pinyin: 'xi an shi', py: 'xas', prefix: 'x',
  },
  {
    id: 610200, name: '铜川市', pid: '610000', type: 'city', pinyin: 'tong chuan shi', py: 'tcs', prefix: 't',
  },
  {
    id: 610300, name: '宝鸡市', pid: '610000', type: 'city', pinyin: 'bao ji shi', py: 'bjs', prefix: 'b',
  },
  {
    id: 610400, name: '咸阳市', pid: '610000', type: 'city', pinyin: 'xian yang shi', py: 'xys', prefix: 'x',
  },
  {
    id: 610500, name: '渭南市', pid: '610000', type: 'city', pinyin: 'wei nan shi', py: 'wns', prefix: 'w',
  },
  {
    id: 610600, name: '延安市', pid: '610000', type: 'city', pinyin: 'yan an shi', py: 'yas', prefix: 'y',
  },
  {
    id: 610700, name: '汉中市', pid: '610000', type: 'city', pinyin: 'han zhong shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 610800, name: '榆林市', pid: '610000', type: 'city', pinyin: 'yu lin shi', py: 'yls', prefix: 'y',
  },
  {
    id: 610900, name: '安康市', pid: '610000', type: 'city', pinyin: 'an kang shi', py: 'aks', prefix: 'a',
  },
  {
    id: 611000, name: '商洛市', pid: '610000', type: 'city', pinyin: 'shang luo shi', py: 'sls', prefix: 's',
  },
  {
    id: 620100, name: '兰州市', pid: '620000', type: 'city', pinyin: 'lan zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 620200, name: '嘉峪关市', pid: '620000', type: 'city', pinyin: 'jia yu guan shi', py: 'jygs', prefix: 'j',
  },
  {
    id: 620300, name: '金昌市', pid: '620000', type: 'city', pinyin: 'jin chang shi', py: 'jcs', prefix: 'j',
  },
  {
    id: 620400, name: '白银市', pid: '620000', type: 'city', pinyin: 'bai yin shi', py: 'bys', prefix: 'b',
  },
  {
    id: 620500, name: '天水市', pid: '620000', type: 'city', pinyin: 'tian shui shi', py: 'tss', prefix: 't',
  },
  {
    id: 620600, name: '武威市', pid: '620000', type: 'city', pinyin: 'wu wei shi', py: 'wws', prefix: 'w',
  },
  {
    id: 620700, name: '张掖市', pid: '620000', type: 'city', pinyin: 'zhang ye shi', py: 'zys', prefix: 'z',
  },
  {
    id: 620800, name: '平凉市', pid: '620000', type: 'city', pinyin: 'ping liang shi', py: 'pls', prefix: 'p',
  },
  {
    id: 620900, name: '酒泉市', pid: '620000', type: 'city', pinyin: 'jiu quan shi', py: 'jqs', prefix: 'j',
  },
  {
    id: 621000, name: '庆阳市', pid: '620000', type: 'city', pinyin: 'qing yang shi', py: 'qys', prefix: 'q',
  },
  {
    id: 621100, name: '定西市', pid: '620000', type: 'city', pinyin: 'ding xi shi', py: 'dxs', prefix: 'd',
  },
  {
    id: 621200, name: '陇南市', pid: '620000', type: 'city', pinyin: 'long nan shi', py: 'lns', prefix: 'l',
  },
  {
    id: 622900, name: '临夏回族自治州', pid: '620000', type: 'city', pinyin: 'lin xia hui zu zi zhi zhou', py: 'lxhzzzz', prefix: 'l',
  },
  {
    id: 623000, name: '甘南藏族自治州', pid: '620000', type: 'city', pinyin: 'gan nan zang zu zi zhi zhou', py: 'gnzzzzz', prefix: 'g',
  },
  {
    id: 630100, name: '西宁市', pid: '630000', type: 'city', pinyin: 'xi ning shi', py: 'xns', prefix: 'x',
  },
  {
    id: 630200, name: '海东市', pid: '630000', type: 'city', pinyin: 'hai dong shi', py: 'hds', prefix: 'h',
  },
  {
    id: 632200, name: '海北藏族自治州', pid: '630000', type: 'city', pinyin: 'hai bei zang zu zi zhi zhou', py: 'hbzzzzz', prefix: 'h',
  },
  {
    id: 632300, name: '黄南藏族自治州', pid: '630000', type: 'city', pinyin: 'huang nan zang zu zi zhi zhou', py: 'hnzzzzz', prefix: 'h',
  },
  {
    id: 632500, name: '海南藏族自治州', pid: '630000', type: 'city', pinyin: 'hai nan zang zu zi zhi zhou', py: 'hnzzzzz', prefix: 'h',
  },
  {
    id: 632600, name: '果洛藏族自治州', pid: '630000', type: 'city', pinyin: 'guo luo zang zu zi zhi zhou', py: 'glzzzzz', prefix: 'g',
  },
  {
    id: 632700, name: '玉树藏族自治州', pid: '630000', type: 'city', pinyin: 'yu shu zang zu zi zhi zhou', py: 'yszzzzz', prefix: 'y',
  },
  {
    id: 632800, name: '海西蒙古族藏族自治州', pid: '630000', type: 'city', pinyin: 'hai xi meng gu zu zang zu zi zhi zhou', py: 'hxmgzzzzzz', prefix: 'h',
  },
  {
    id: 640100, name: '银川市', pid: '640000', type: 'city', pinyin: 'yin chuan shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 640200, name: '石嘴山市', pid: '640000', type: 'city', pinyin: 'shi zui shan shi', py: 'szss', prefix: 's',
  },
  {
    id: 640300, name: '吴忠市', pid: '640000', type: 'city', pinyin: 'wu zhong shi', py: 'wzs', prefix: 'w',
  },
  {
    id: 640400, name: '固原市', pid: '640000', type: 'city', pinyin: 'gu yuan shi', py: 'gys', prefix: 'g',
  },
  {
    id: 640500, name: '中卫市', pid: '640000', type: 'city', pinyin: 'zhong wei shi', py: 'zws', prefix: 'z',
  },
  {
    id: 650100, name: '乌鲁木齐市', pid: '650000', type: 'city', pinyin: 'wu lu mu qi shi', py: 'wlmqs', prefix: 'w',
  },
  {
    id: 650200, name: '克拉玛依市', pid: '650000', type: 'city', pinyin: 'ke la ma yi shi', py: 'klmys', prefix: 'k',
  },
  {
    id: 652100, name: '吐鲁番地区', pid: '650000', type: 'city', pinyin: 'tu lu fan di qu', py: 'tlfdq', prefix: 't',
  },
  {
    id: 652200, name: '哈密地区', pid: '650000', type: 'city', pinyin: 'ha mi di qu', py: 'hmdq', prefix: 'h',
  },
  {
    id: 652300, name: '昌吉回族自治州', pid: '650000', type: 'city', pinyin: 'chang ji hui zu zi zhi zhou', py: 'cjhzzzz', prefix: 'c',
  },
  {
    id: 652700, name: '博尔塔拉蒙古自治州', pid: '650000', type: 'city', pinyin: 'bo er ta la meng gu zi zhi zhou', py: 'betlmgzzz', prefix: 'b',
  },
  {
    id: 652800, name: '巴音郭楞蒙古自治州', pid: '650000', type: 'city', pinyin: 'ba yin guo leng meng gu zi zhi zhou', py: 'byglmgzzz', prefix: 'b',
  },
  {
    id: 652900, name: '阿克苏地区', pid: '650000', type: 'city', pinyin: 'a ke su di qu', py: 'aksdq', prefix: 'a',
  },
  {
    id: 653000, name: '克孜勒苏柯尔克孜自治州', pid: '650000', type: 'city', pinyin: 'ke zi le su ke er ke zi zi zhi zhou', py: 'kzlskekzzzz', prefix: 'k',
  },
  {
    id: 653100, name: '喀什地区', pid: '650000', type: 'city', pinyin: 'ka shi di qu', py: 'ksdq', prefix: 'k',
  },
  {
    id: 653200, name: '和田地区', pid: '650000', type: 'city', pinyin: 'he tian di qu', py: 'htdq', prefix: 'h',
  },
  {
    id: 654000, name: '伊犁哈萨克自治州', pid: '650000', type: 'city', pinyin: 'yi li ha sa ke zi zhi zhou', py: 'ylhskzzz', prefix: 'y',
  },
  {
    id: 654200, name: '塔城地区', pid: '650000', type: 'city', pinyin: 'ta cheng di qu', py: 'tcdq', prefix: 't',
  },
  {
    id: 654300, name: '阿勒泰地区', pid: '650000', type: 'city', pinyin: 'a le tai di qu', py: 'altdq', prefix: 'a',
  },
  {
    id: 659000, name: '直辖县', pid: '650000', type: 'city', pinyin: 'zhi xia xian', py: 'zxx', prefix: 'z',
  },
  {
    id: 710100, name: '台北市', pid: '710000', type: 'city', pinyin: 'tai bei shi', py: 'tbs', prefix: 't',
  },
  {
    id: 710200, name: '高雄市', pid: '710000', type: 'city', pinyin: 'gao xiong shi', py: 'gxs', prefix: 'g',
  },
  {
    id: 710300, name: '台南市', pid: '710000', type: 'city', pinyin: 'tai nan shi', py: 'tns', prefix: 't',
  },
  {
    id: 710400, name: '台中市', pid: '710000', type: 'city', pinyin: 'tai zhong shi', py: 'tzs', prefix: 't',
  },
  {
    id: 710500, name: '金门县', pid: '710000', type: 'city', pinyin: 'jin men xian', py: 'jmx', prefix: 'j',
  },
  {
    id: 710600, name: '南投县', pid: '710000', type: 'city', pinyin: 'nan tou xian', py: 'ntx', prefix: 'n',
  },
  {
    id: 710700, name: '基隆市', pid: '710000', type: 'city', pinyin: 'ji long shi', py: 'jls', prefix: 'j',
  },
  {
    id: 710800, name: '新竹市', pid: '710000', type: 'city', pinyin: 'xin zhu shi', py: 'xzs', prefix: 'x',
  },
  {
    id: 710900, name: '嘉义市', pid: '710000', type: 'city', pinyin: 'jia yi shi', py: 'jys', prefix: 'j',
  },
  {
    id: 711100, name: '新北市', pid: '710000', type: 'city', pinyin: 'xin bei shi', py: 'xbs', prefix: 'x',
  },
  {
    id: 711200, name: '宜兰县', pid: '710000', type: 'city', pinyin: 'yi lan xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 711300, name: '新竹县', pid: '710000', type: 'city', pinyin: 'xin zhu xian', py: 'xzx', prefix: 'x',
  },
  {
    id: 711400, name: '桃园县', pid: '710000', type: 'city', pinyin: 'tao yuan xian', py: 'tyx', prefix: 't',
  },
  {
    id: 711500, name: '苗栗县', pid: '710000', type: 'city', pinyin: 'miao li xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 711700, name: '彰化县', pid: '710000', type: 'city', pinyin: 'zhang hua xian', py: 'zhx', prefix: 'z',
  },
  {
    id: 711900, name: '嘉义县', pid: '710000', type: 'city', pinyin: 'jia yi xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 712100, name: '云林县', pid: '710000', type: 'city', pinyin: 'yun lin xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 712400, name: '屏东县', pid: '710000', type: 'city', pinyin: 'ping dong xian', py: 'pdx', prefix: 'p',
  },
  {
    id: 712500, name: '台东县', pid: '710000', type: 'city', pinyin: 'tai dong xian', py: 'tdx', prefix: 't',
  },
  {
    id: 712600, name: '花莲县', pid: '710000', type: 'city', pinyin: 'hua lian xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 712700, name: '澎湖县', pid: '710000', type: 'city', pinyin: 'peng hu xian', py: 'phx', prefix: 'p',
  },
  {
    id: 712800, name: '连江县', pid: '710000', type: 'city', pinyin: 'lian jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 810100, name: '香港岛', pid: '810000', type: 'city', pinyin: 'xiang gang dao', py: 'xgd', prefix: 'x',
  },
  {
    id: 810200, name: '九龙', pid: '810000', type: 'city', pinyin: 'jiu long', py: 'jl', prefix: 'j',
  },
  {
    id: 810300, name: '新界', pid: '810000', type: 'city', pinyin: 'xin jie', py: 'xj', prefix: 'x',
  },
];
const area = [
  {
    id: 110101, name: '东城区', pid: '110100', type: 'district', pinyin: 'dong cheng qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 110102, name: '西城区', pid: '110100', type: 'district', pinyin: 'xi cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 110105, name: '朝阳区', pid: '110100', type: 'district', pinyin: 'chao yang qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 110106, name: '丰台区', pid: '110100', type: 'district', pinyin: 'feng tai qu', py: 'ftq', prefix: 'f',
  },
  {
    id: 110107, name: '石景山区', pid: '110100', type: 'district', pinyin: 'shi jing shan qu', py: 'sjsq', prefix: 's',
  },
  {
    id: 110108, name: '海淀区', pid: '110100', type: 'district', pinyin: 'hai dian qu', py: 'hdq', prefix: 'h',
  },
  {
    id: 110109, name: '门头沟区', pid: '110100', type: 'district', pinyin: 'men tou gou qu', py: 'mtgq', prefix: 'm',
  },
  {
    id: 110111, name: '房山区', pid: '110100', type: 'district', pinyin: 'fang shan qu', py: 'fsq', prefix: 'f',
  },
  {
    id: 110112, name: '通州区', pid: '110100', type: 'district', pinyin: 'tong zhou qu', py: 'tzq', prefix: 't',
  },
  {
    id: 110113, name: '顺义区', pid: '110100', type: 'district', pinyin: 'shun yi qu', py: 'syq', prefix: 's',
  },
  {
    id: 110114, name: '昌平区', pid: '110100', type: 'district', pinyin: 'chang ping qu', py: 'cpq', prefix: 'c',
  },
  {
    id: 110115, name: '大兴区', pid: '110100', type: 'district', pinyin: 'da xing qu', py: 'dxq', prefix: 'd',
  },
  {
    id: 110116, name: '怀柔区', pid: '110100', type: 'district', pinyin: 'huai rou qu', py: 'hrq', prefix: 'h',
  },
  {
    id: 110117, name: '平谷区', pid: '110100', type: 'district', pinyin: 'ping gu qu', py: 'pgq', prefix: 'p',
  },
  {
    id: 110228, name: '密云县', pid: '110200', type: 'district', pinyin: 'mi yun xian', py: 'myx', prefix: 'm',
  },
  {
    id: 110229, name: '延庆县', pid: '110200', type: 'district', pinyin: 'yan qing xian', py: 'yqx', prefix: 'y',
  },
  {
    id: 120101, name: '和平区', pid: '120100', type: 'district', pinyin: 'he ping qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 120102, name: '河东区', pid: '120100', type: 'district', pinyin: 'he dong qu', py: 'hdq', prefix: 'h',
  },
  {
    id: 120103, name: '河西区', pid: '120100', type: 'district', pinyin: 'he xi qu', py: 'hxq', prefix: 'h',
  },
  {
    id: 120104, name: '南开区', pid: '120100', type: 'district', pinyin: 'nan kai qu', py: 'nkq', prefix: 'n',
  },
  {
    id: 120105, name: '河北区', pid: '120100', type: 'district', pinyin: 'he bei qu', py: 'hbq', prefix: 'h',
  },
  {
    id: 120106, name: '红桥区', pid: '120100', type: 'district', pinyin: 'hong qiao qu', py: 'hqq', prefix: 'h',
  },
  {
    id: 120110, name: '东丽区', pid: '120100', type: 'district', pinyin: 'dong li qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 120111, name: '西青区', pid: '120100', type: 'district', pinyin: 'xi qing qu', py: 'xqq', prefix: 'x',
  },
  {
    id: 120112, name: '津南区', pid: '120100', type: 'district', pinyin: 'jin nan qu', py: 'jnq', prefix: 'j',
  },
  {
    id: 120113, name: '北辰区', pid: '120100', type: 'district', pinyin: 'bei chen qu', py: 'bcq', prefix: 'b',
  },
  {
    id: 120114, name: '武清区', pid: '120100', type: 'district', pinyin: 'wu qing qu', py: 'wqq', prefix: 'w',
  },
  {
    id: 120115, name: '宝坻区', pid: '120100', type: 'district', pinyin: 'bao chi qu', py: 'bcq', prefix: 'b',
  },
  {
    id: 120116, name: '滨海新区', pid: '120100', type: 'district', pinyin: 'bin hai xin qu', py: 'bhxq', prefix: 'b',
  },
  {
    id: 120221, name: '宁河县', pid: '120200', type: 'district', pinyin: 'ning he xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 120223, name: '静海县', pid: '120200', type: 'district', pinyin: 'jing hai xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 120225, name: '蓟县', pid: '120200', type: 'district', pinyin: 'ji xian', py: 'jx', prefix: 'j',
  },
  {
    id: 130102, name: '长安区', pid: '130100', type: 'district', pinyin: 'chang an qu', py: 'caq', prefix: 'c',
  },
  {
    id: 130103, name: '桥东区', pid: '130100', type: 'district', pinyin: 'qiao dong qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 130104, name: '桥西区', pid: '130100', type: 'district', pinyin: 'qiao xi qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 130105, name: '新华区', pid: '130100', type: 'district', pinyin: 'xin hua qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 130107, name: '井陉矿区', pid: '130100', type: 'district', pinyin: 'jing xing kuang qu', py: 'jxkq', prefix: 'j',
  },
  {
    id: 130108, name: '裕华区', pid: '130100', type: 'district', pinyin: 'yu hua qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 130121, name: '井陉县', pid: '130100', type: 'district', pinyin: 'jing xing xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 130123, name: '正定县', pid: '130100', type: 'district', pinyin: 'zheng ding xian', py: 'zdx', prefix: 'z',
  },
  {
    id: 130124, name: '栾城县', pid: '130100', type: 'district', pinyin: 'luan cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 130125, name: '行唐县', pid: '130100', type: 'district', pinyin: 'xing tang xian', py: 'xtx', prefix: 'x',
  },
  {
    id: 130126, name: '灵寿县', pid: '130100', type: 'district', pinyin: 'ling shou xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 130127, name: '高邑县', pid: '130100', type: 'district', pinyin: 'gao yi xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 130128, name: '深泽县', pid: '130100', type: 'district', pinyin: 'shen ze xian', py: 'szx', prefix: 's',
  },
  {
    id: 130129, name: '赞皇县', pid: '130100', type: 'district', pinyin: 'zan huang xian', py: 'zhx', prefix: 'z',
  },
  {
    id: 130130, name: '无极县', pid: '130100', type: 'district', pinyin: 'wu ji xian', py: 'wjx', prefix: 'w',
  },
  {
    id: 130131, name: '平山县', pid: '130100', type: 'district', pinyin: 'ping shan xian', py: 'psx', prefix: 'p',
  },
  {
    id: 130132, name: '元氏县', pid: '130100', type: 'district', pinyin: 'yuan shi xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 130133, name: '赵县', pid: '130100', type: 'district', pinyin: 'zhao xian', py: 'zx', prefix: 'z',
  },
  {
    id: 130181, name: '辛集市', pid: '130100', type: 'district', pinyin: 'xin ji shi', py: 'xjs', prefix: 'x',
  },
  {
    id: 130182, name: '藁城市', pid: '130100', type: 'district', pinyin: 'gao cheng shi', py: 'gcs', prefix: 'g',
  },
  {
    id: 130183, name: '晋州市', pid: '130100', type: 'district', pinyin: 'jin zhou shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 130184, name: '新乐市', pid: '130100', type: 'district', pinyin: 'xin le shi', py: 'xls', prefix: 'x',
  },
  {
    id: 130185, name: '鹿泉市', pid: '130100', type: 'district', pinyin: 'lu quan shi', py: 'lqs', prefix: 'l',
  },
  {
    id: 130202, name: '路南区', pid: '130200', type: 'district', pinyin: 'lu nan qu', py: 'lnq', prefix: 'l',
  },
  {
    id: 130203, name: '路北区', pid: '130200', type: 'district', pinyin: 'lu bei qu', py: 'lbq', prefix: 'l',
  },
  {
    id: 130204, name: '古冶区', pid: '130200', type: 'district', pinyin: 'gu ye qu', py: 'gyq', prefix: 'g',
  },
  {
    id: 130205, name: '开平区', pid: '130200', type: 'district', pinyin: 'kai ping qu', py: 'kpq', prefix: 'k',
  },
  {
    id: 130207, name: '丰南区', pid: '130200', type: 'district', pinyin: 'feng nan qu', py: 'fnq', prefix: 'f',
  },
  {
    id: 130208, name: '丰润区', pid: '130200', type: 'district', pinyin: 'feng run qu', py: 'frq', prefix: 'f',
  },
  {
    id: 130209, name: '曹妃甸区', pid: '130200', type: 'district', pinyin: 'cao fei dian qu', py: 'cfdq', prefix: 'c',
  },
  {
    id: 130223, name: '滦县', pid: '130200', type: 'district', pinyin: 'luan xian', py: 'lx', prefix: 'l',
  },
  {
    id: 130224, name: '滦南县', pid: '130200', type: 'district', pinyin: 'luan nan xian', py: 'lnx', prefix: 'l',
  },
  {
    id: 130225, name: '乐亭县', pid: '130200', type: 'district', pinyin: 'le ting xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 130227, name: '迁西县', pid: '130200', type: 'district', pinyin: 'qian xi xian', py: 'qxx', prefix: 'q',
  },
  {
    id: 130229, name: '玉田县', pid: '130200', type: 'district', pinyin: 'yu tian xian', py: 'ytx', prefix: 'y',
  },
  {
    id: 130281, name: '遵化市', pid: '130200', type: 'district', pinyin: 'zun hua shi', py: 'zhs', prefix: 'z',
  },
  {
    id: 130283, name: '迁安市', pid: '130200', type: 'district', pinyin: 'qian an shi', py: 'qas', prefix: 'q',
  },
  {
    id: 130302, name: '海港区', pid: '130300', type: 'district', pinyin: 'hai gang qu', py: 'hgq', prefix: 'h',
  },
  {
    id: 130303, name: '山海关区', pid: '130300', type: 'district', pinyin: 'shan hai guan qu', py: 'shgq', prefix: 's',
  },
  {
    id: 130304, name: '北戴河区', pid: '130300', type: 'district', pinyin: 'bei dai he qu', py: 'bdhq', prefix: 'b',
  },
  {
    id: 130321, name: '青龙满族自治县', pid: '130300', type: 'district', pinyin: 'qing long man zu zi zhi xian', py: 'qlmzzzx', prefix: 'q',
  },
  {
    id: 130322, name: '昌黎县', pid: '130300', type: 'district', pinyin: 'chang li xian', py: 'clx', prefix: 'c',
  },
  {
    id: 130323, name: '抚宁县', pid: '130300', type: 'district', pinyin: 'fu ning xian', py: 'fnx', prefix: 'f',
  },
  {
    id: 130324, name: '卢龙县', pid: '130300', type: 'district', pinyin: 'lu long xian', py: 'llx', prefix: 'l',
  },
  {
    id: 130402, name: '邯山区', pid: '130400', type: 'district', pinyin: 'han shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 130403, name: '丛台区', pid: '130400', type: 'district', pinyin: 'cong tai qu', py: 'ctq', prefix: 'c',
  },
  {
    id: 130404, name: '复兴区', pid: '130400', type: 'district', pinyin: 'fu xing qu', py: 'fxq', prefix: 'f',
  },
  {
    id: 130406, name: '峰峰矿区', pid: '130400', type: 'district', pinyin: 'feng feng kuang qu', py: 'ffkq', prefix: 'f',
  },
  {
    id: 130421, name: '邯郸县', pid: '130400', type: 'district', pinyin: 'han dan xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 130423, name: '临漳县', pid: '130400', type: 'district', pinyin: 'lin zhang xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 130424, name: '成安县', pid: '130400', type: 'district', pinyin: 'cheng an xian', py: 'cax', prefix: 'c',
  },
  {
    id: 130425, name: '大名县', pid: '130400', type: 'district', pinyin: 'da ming xian', py: 'dmx', prefix: 'd',
  },
  {
    id: 130426, name: '涉县', pid: '130400', type: 'district', pinyin: 'she xian', py: 'sx', prefix: 's',
  },
  {
    id: 130427, name: '磁县', pid: '130400', type: 'district', pinyin: 'ci xian', py: 'cx', prefix: 'c',
  },
  {
    id: 130428, name: '肥乡县', pid: '130400', type: 'district', pinyin: 'fei xiang xian', py: 'fxx', prefix: 'f',
  },
  {
    id: 130429, name: '永年县', pid: '130400', type: 'district', pinyin: 'yong nian xian', py: 'ynx', prefix: 'y',
  },
  {
    id: 130430, name: '邱县', pid: '130400', type: 'district', pinyin: 'qiu xian', py: 'qx', prefix: 'q',
  },
  {
    id: 130431, name: '鸡泽县', pid: '130400', type: 'district', pinyin: 'ji ze xian', py: 'jzx', prefix: 'j',
  },
  {
    id: 130432, name: '广平县', pid: '130400', type: 'district', pinyin: 'guang ping xian', py: 'gpx', prefix: 'g',
  },
  {
    id: 130433, name: '馆陶县', pid: '130400', type: 'district', pinyin: 'guan tao xian', py: 'gtx', prefix: 'g',
  },
  {
    id: 130434, name: '魏县', pid: '130400', type: 'district', pinyin: 'wei xian', py: 'wx', prefix: 'w',
  },
  {
    id: 130435, name: '曲周县', pid: '130400', type: 'district', pinyin: 'qu zhou xian', py: 'qzx', prefix: 'q',
  },
  {
    id: 130481, name: '武安市', pid: '130400', type: 'district', pinyin: 'wu an shi', py: 'was', prefix: 'w',
  },
  {
    id: 130502, name: '桥东区', pid: '130500', type: 'district', pinyin: 'qiao dong qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 130503, name: '桥西区', pid: '130500', type: 'district', pinyin: 'qiao xi qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 130521, name: '邢台县', pid: '130500', type: 'district', pinyin: 'xing tai xian', py: 'xtx', prefix: 'x',
  },
  {
    id: 130522, name: '临城县', pid: '130500', type: 'district', pinyin: 'lin cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 130523, name: '内丘县', pid: '130500', type: 'district', pinyin: 'nei qiu xian', py: 'nqx', prefix: 'n',
  },
  {
    id: 130524, name: '柏乡县', pid: '130500', type: 'district', pinyin: 'bo xiang xian', py: 'bxx', prefix: 'b',
  },
  {
    id: 130525, name: '隆尧县', pid: '130500', type: 'district', pinyin: 'long yao xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 130526, name: '任县', pid: '130500', type: 'district', pinyin: 'ren xian', py: 'rx', prefix: 'r',
  },
  {
    id: 130527, name: '南和县', pid: '130500', type: 'district', pinyin: 'nan he xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 130528, name: '宁晋县', pid: '130500', type: 'district', pinyin: 'ning jin xian', py: 'njx', prefix: 'n',
  },
  {
    id: 130529, name: '巨鹿县', pid: '130500', type: 'district', pinyin: 'ju lu xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 130530, name: '新河县', pid: '130500', type: 'district', pinyin: 'xin he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 130531, name: '广宗县', pid: '130500', type: 'district', pinyin: 'guang zong xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 130532, name: '平乡县', pid: '130500', type: 'district', pinyin: 'ping xiang xian', py: 'pxx', prefix: 'p',
  },
  {
    id: 130533, name: '威县', pid: '130500', type: 'district', pinyin: 'wei xian', py: 'wx', prefix: 'w',
  },
  {
    id: 130534, name: '清河县', pid: '130500', type: 'district', pinyin: 'qing he xian', py: 'qhx', prefix: 'q',
  },
  {
    id: 130535, name: '临西县', pid: '130500', type: 'district', pinyin: 'lin xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 130581, name: '南宫市', pid: '130500', type: 'district', pinyin: 'nan gong shi', py: 'ngs', prefix: 'n',
  },
  {
    id: 130582, name: '沙河市', pid: '130500', type: 'district', pinyin: 'sha he shi', py: 'shs', prefix: 's',
  },
  {
    id: 130602, name: '新市区', pid: '130600', type: 'district', pinyin: 'xin shi qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 130603, name: '北市区', pid: '130600', type: 'district', pinyin: 'bei shi qu', py: 'bsq', prefix: 'b',
  },
  {
    id: 130604, name: '南市区', pid: '130600', type: 'district', pinyin: 'nan shi qu', py: 'nsq', prefix: 'n',
  },
  {
    id: 130621, name: '满城县', pid: '130600', type: 'district', pinyin: 'man cheng xian', py: 'mcx', prefix: 'm',
  },
  {
    id: 130622, name: '清苑县', pid: '130600', type: 'district', pinyin: 'qing yuan xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 130623, name: '涞水县', pid: '130600', type: 'district', pinyin: 'lai shui xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 130624, name: '阜平县', pid: '130600', type: 'district', pinyin: 'fu ping xian', py: 'fpx', prefix: 'f',
  },
  {
    id: 130625, name: '徐水县', pid: '130600', type: 'district', pinyin: 'xu shui xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 130626, name: '定兴县', pid: '130600', type: 'district', pinyin: 'ding xing xian', py: 'dxx', prefix: 'd',
  },
  {
    id: 130627, name: '唐县', pid: '130600', type: 'district', pinyin: 'tang xian', py: 'tx', prefix: 't',
  },
  {
    id: 130628, name: '高阳县', pid: '130600', type: 'district', pinyin: 'gao yang xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 130629, name: '容城县', pid: '130600', type: 'district', pinyin: 'rong cheng xian', py: 'rcx', prefix: 'r',
  },
  {
    id: 130630, name: '涞源县', pid: '130600', type: 'district', pinyin: 'lai yuan xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 130631, name: '望都县', pid: '130600', type: 'district', pinyin: 'wang dou xian', py: 'wdx', prefix: 'w',
  },
  {
    id: 130632, name: '安新县', pid: '130600', type: 'district', pinyin: 'an xin xian', py: 'axx', prefix: 'a',
  },
  {
    id: 130633, name: '易县', pid: '130600', type: 'district', pinyin: 'yi xian', py: 'yx', prefix: 'y',
  },
  {
    id: 130634, name: '曲阳县', pid: '130600', type: 'district', pinyin: 'qu yang xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 130635, name: '蠡县', pid: '130600', type: 'district', pinyin: 'li xian', py: 'lx', prefix: 'l',
  },
  {
    id: 130636, name: '顺平县', pid: '130600', type: 'district', pinyin: 'shun ping xian', py: 'spx', prefix: 's',
  },
  {
    id: 130637, name: '博野县', pid: '130600', type: 'district', pinyin: 'bo ye xian', py: 'byx', prefix: 'b',
  },
  {
    id: 130638, name: '雄县', pid: '130600', type: 'district', pinyin: 'xiong xian', py: 'xx', prefix: 'x',
  },
  {
    id: 130681, name: '涿州市', pid: '130600', type: 'district', pinyin: 'zhuo zhou shi', py: 'zzs', prefix: 'z',
  },
  {
    id: 130682, name: '定州市', pid: '130600', type: 'district', pinyin: 'ding zhou shi', py: 'dzs', prefix: 'd',
  },
  {
    id: 130683, name: '安国市', pid: '130600', type: 'district', pinyin: 'an guo shi', py: 'ags', prefix: 'a',
  },
  {
    id: 130684, name: '高碑店市', pid: '130600', type: 'district', pinyin: 'gao bei dian shi', py: 'gbds', prefix: 'g',
  },
  {
    id: 130702, name: '桥东区', pid: '130700', type: 'district', pinyin: 'qiao dong qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 130703, name: '桥西区', pid: '130700', type: 'district', pinyin: 'qiao xi qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 130705, name: '宣化区', pid: '130700', type: 'district', pinyin: 'xuan hua qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 130706, name: '下花园区', pid: '130700', type: 'district', pinyin: 'xia hua yuan qu', py: 'xhyq', prefix: 'x',
  },
  {
    id: 130721, name: '宣化县', pid: '130700', type: 'district', pinyin: 'xuan hua xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 130722, name: '张北县', pid: '130700', type: 'district', pinyin: 'zhang bei xian', py: 'zbx', prefix: 'z',
  },
  {
    id: 130723, name: '康保县', pid: '130700', type: 'district', pinyin: 'kang bao xian', py: 'kbx', prefix: 'k',
  },
  {
    id: 130724, name: '沽源县', pid: '130700', type: 'district', pinyin: 'gu yuan xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 130725, name: '尚义县', pid: '130700', type: 'district', pinyin: 'shang yi xian', py: 'syx', prefix: 's',
  },
  {
    id: 130726, name: '蔚县', pid: '130700', type: 'district', pinyin: 'yu xian', py: 'yx', prefix: 'y',
  },
  {
    id: 130727, name: '阳原县', pid: '130700', type: 'district', pinyin: 'yang yuan xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 130728, name: '怀安县', pid: '130700', type: 'district', pinyin: 'huai an xian', py: 'hax', prefix: 'h',
  },
  {
    id: 130729, name: '万全县', pid: '130700', type: 'district', pinyin: 'wan quan xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 130730, name: '怀来县', pid: '130700', type: 'district', pinyin: 'huai lai xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 130731, name: '涿鹿县', pid: '130700', type: 'district', pinyin: 'zhuo lu xian', py: 'zlx', prefix: 'z',
  },
  {
    id: 130732, name: '赤城县', pid: '130700', type: 'district', pinyin: 'chi cheng xian', py: 'ccx', prefix: 'c',
  },
  {
    id: 130733, name: '崇礼县', pid: '130700', type: 'district', pinyin: 'chong li xian', py: 'clx', prefix: 'c',
  },
  {
    id: 130802, name: '双桥区', pid: '130800', type: 'district', pinyin: 'shuang qiao qu', py: 'sqq', prefix: 's',
  },
  {
    id: 130803, name: '双滦区', pid: '130800', type: 'district', pinyin: 'shuang luan qu', py: 'slq', prefix: 's',
  },
  {
    id: 130804, name: '鹰手营子矿区', pid: '130800', type: 'district', pinyin: 'ying shou ying zi kuang qu', py: 'ysyzkq', prefix: 'y',
  },
  {
    id: 130821, name: '承德县', pid: '130800', type: 'district', pinyin: 'cheng de xian', py: 'cdx', prefix: 'c',
  },
  {
    id: 130822, name: '兴隆县', pid: '130800', type: 'district', pinyin: 'xing long xian', py: 'xlx', prefix: 'x',
  },
  {
    id: 130823, name: '平泉县', pid: '130800', type: 'district', pinyin: 'ping quan xian', py: 'pqx', prefix: 'p',
  },
  {
    id: 130824, name: '滦平县', pid: '130800', type: 'district', pinyin: 'luan ping xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 130825, name: '隆化县', pid: '130800', type: 'district', pinyin: 'long hua xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 130826, name: '丰宁满族自治县', pid: '130800', type: 'district', pinyin: 'feng ning man zu zi zhi xian', py: 'fnmzzzx', prefix: 'f',
  },
  {
    id: 130827, name: '宽城满族自治县', pid: '130800', type: 'district', pinyin: 'kuan cheng man zu zi zhi xian', py: 'kcmzzzx', prefix: 'k',
  },
  {
    id: 130828, name: '围场满族蒙古族自治县', pid: '130800', type: 'district', pinyin: 'wei chang man zu meng gu zu zi zhi xian', py: 'wcmzmgzzzx', prefix: 'w',
  },
  {
    id: 130902, name: '新华区', pid: '130900', type: 'district', pinyin: 'xin hua qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 130903, name: '运河区', pid: '130900', type: 'district', pinyin: 'yun he qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 130921, name: '沧县', pid: '130900', type: 'district', pinyin: 'cang xian', py: 'cx', prefix: 'c',
  },
  {
    id: 130922, name: '青县', pid: '130900', type: 'district', pinyin: 'qing xian', py: 'qx', prefix: 'q',
  },
  {
    id: 130923, name: '东光县', pid: '130900', type: 'district', pinyin: 'dong guang xian', py: 'dgx', prefix: 'd',
  },
  {
    id: 130924, name: '海兴县', pid: '130900', type: 'district', pinyin: 'hai xing xian', py: 'hxx', prefix: 'h',
  },
  {
    id: 130925, name: '盐山县', pid: '130900', type: 'district', pinyin: 'yan shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 130926, name: '肃宁县', pid: '130900', type: 'district', pinyin: 'su ning xian', py: 'snx', prefix: 's',
  },
  {
    id: 130927, name: '南皮县', pid: '130900', type: 'district', pinyin: 'nan pi xian', py: 'npx', prefix: 'n',
  },
  {
    id: 130928, name: '吴桥县', pid: '130900', type: 'district', pinyin: 'wu qiao xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 130929, name: '献县', pid: '130900', type: 'district', pinyin: 'xian xian', py: 'xx', prefix: 'x',
  },
  {
    id: 130930, name: '孟村回族自治县', pid: '130900', type: 'district', pinyin: 'meng cun hui zu zi zhi xian', py: 'mchzzzx', prefix: 'm',
  },
  {
    id: 130981, name: '泊头市', pid: '130900', type: 'district', pinyin: 'bo tou shi', py: 'bts', prefix: 'b',
  },
  {
    id: 130982, name: '任丘市', pid: '130900', type: 'district', pinyin: 'ren qiu shi', py: 'rqs', prefix: 'r',
  },
  {
    id: 130983, name: '黄骅市', pid: '130900', type: 'district', pinyin: 'huang hua shi', py: 'hhs', prefix: 'h',
  },
  {
    id: 130984, name: '河间市', pid: '130900', type: 'district', pinyin: 'he jian shi', py: 'hjs', prefix: 'h',
  },
  {
    id: 131002, name: '安次区', pid: '131000', type: 'district', pinyin: 'an ci qu', py: 'acq', prefix: 'a',
  },
  {
    id: 131003, name: '广阳区', pid: '131000', type: 'district', pinyin: 'guang yang qu', py: 'gyq', prefix: 'g',
  },
  {
    id: 131022, name: '固安县', pid: '131000', type: 'district', pinyin: 'gu an xian', py: 'gax', prefix: 'g',
  },
  {
    id: 131023, name: '永清县', pid: '131000', type: 'district', pinyin: 'yong qing xian', py: 'yqx', prefix: 'y',
  },
  {
    id: 131024, name: '香河县', pid: '131000', type: 'district', pinyin: 'xiang he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 131025, name: '大城县', pid: '131000', type: 'district', pinyin: 'da cheng xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 131026, name: '文安县', pid: '131000', type: 'district', pinyin: 'wen an xian', py: 'wax', prefix: 'w',
  },
  {
    id: 131028, name: '大厂回族自治县', pid: '131000', type: 'district', pinyin: 'da chang hui zu zi zhi xian', py: 'dchzzzx', prefix: 'd',
  },
  {
    id: 131081, name: '霸州市', pid: '131000', type: 'district', pinyin: 'ba zhou shi', py: 'bzs', prefix: 'b',
  },
  {
    id: 131082, name: '三河市', pid: '131000', type: 'district', pinyin: 'san he shi', py: 'shs', prefix: 's',
  },
  {
    id: 131102, name: '桃城区', pid: '131100', type: 'district', pinyin: 'tao cheng qu', py: 'tcq', prefix: 't',
  },
  {
    id: 131121, name: '枣强县', pid: '131100', type: 'district', pinyin: 'zao qiang xian', py: 'zqx', prefix: 'z',
  },
  {
    id: 131122, name: '武邑县', pid: '131100', type: 'district', pinyin: 'wu yi xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 131123, name: '武强县', pid: '131100', type: 'district', pinyin: 'wu qiang xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 131124, name: '饶阳县', pid: '131100', type: 'district', pinyin: 'rao yang xian', py: 'ryx', prefix: 'r',
  },
  {
    id: 131125, name: '安平县', pid: '131100', type: 'district', pinyin: 'an ping xian', py: 'apx', prefix: 'a',
  },
  {
    id: 131126, name: '故城县', pid: '131100', type: 'district', pinyin: 'gu cheng xian', py: 'gcx', prefix: 'g',
  },
  {
    id: 131127, name: '景县', pid: '131100', type: 'district', pinyin: 'jing xian', py: 'jx', prefix: 'j',
  },
  {
    id: 131128, name: '阜城县', pid: '131100', type: 'district', pinyin: 'fu cheng xian', py: 'fcx', prefix: 'f',
  },
  {
    id: 131181, name: '冀州市', pid: '131100', type: 'district', pinyin: 'ji zhou shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 131182, name: '深州市', pid: '131100', type: 'district', pinyin: 'shen zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 140105, name: '小店区', pid: '140100', type: 'district', pinyin: 'xiao dian qu', py: 'xdq', prefix: 'x',
  },
  {
    id: 140106, name: '迎泽区', pid: '140100', type: 'district', pinyin: 'ying ze qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 140107, name: '杏花岭区', pid: '140100', type: 'district', pinyin: 'xing hua ling qu', py: 'xhlq', prefix: 'x',
  },
  {
    id: 140108, name: '尖草坪区', pid: '140100', type: 'district', pinyin: 'jian cao ping qu', py: 'jcpq', prefix: 'j',
  },
  {
    id: 140109, name: '万柏林区', pid: '140100', type: 'district', pinyin: 'wan bo lin qu', py: 'wblq', prefix: 'w',
  },
  {
    id: 140110, name: '晋源区', pid: '140100', type: 'district', pinyin: 'jin yuan qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 140121, name: '清徐县', pid: '140100', type: 'district', pinyin: 'qing xu xian', py: 'qxx', prefix: 'q',
  },
  {
    id: 140122, name: '阳曲县', pid: '140100', type: 'district', pinyin: 'yang qu xian', py: 'yqx', prefix: 'y',
  },
  {
    id: 140123, name: '娄烦县', pid: '140100', type: 'district', pinyin: 'lou fan xian', py: 'lfx', prefix: 'l',
  },
  {
    id: 140181, name: '古交市', pid: '140100', type: 'district', pinyin: 'gu jiao shi', py: 'gjs', prefix: 'g',
  },
  {
    id: 140202, name: '城区', pid: '140200', type: 'district', pinyin: 'cheng qu', py: 'cq', prefix: 'c',
  },
  {
    id: 140203, name: '矿区', pid: '140200', type: 'district', pinyin: 'kuang qu', py: 'kq', prefix: 'k',
  },
  {
    id: 140211, name: '南郊区', pid: '140200', type: 'district', pinyin: 'nan jiao qu', py: 'njq', prefix: 'n',
  },
  {
    id: 140212, name: '新荣区', pid: '140200', type: 'district', pinyin: 'xin rong qu', py: 'xrq', prefix: 'x',
  },
  {
    id: 140221, name: '阳高县', pid: '140200', type: 'district', pinyin: 'yang gao xian', py: 'ygx', prefix: 'y',
  },
  {
    id: 140222, name: '天镇县', pid: '140200', type: 'district', pinyin: 'tian zhen xian', py: 'tzx', prefix: 't',
  },
  {
    id: 140223, name: '广灵县', pid: '140200', type: 'district', pinyin: 'guang ling xian', py: 'glx', prefix: 'g',
  },
  {
    id: 140224, name: '灵丘县', pid: '140200', type: 'district', pinyin: 'ling qiu xian', py: 'lqx', prefix: 'l',
  },
  {
    id: 140225, name: '浑源县', pid: '140200', type: 'district', pinyin: 'hun yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 140226, name: '左云县', pid: '140200', type: 'district', pinyin: 'zuo yun xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 140227, name: '大同县', pid: '140200', type: 'district', pinyin: 'da tong xian', py: 'dtx', prefix: 'd',
  },
  {
    id: 140302, name: '城区', pid: '140300', type: 'district', pinyin: 'cheng qu', py: 'cq', prefix: 'c',
  },
  {
    id: 140303, name: '矿区', pid: '140300', type: 'district', pinyin: 'kuang qu', py: 'kq', prefix: 'k',
  },
  {
    id: 140311, name: '郊区', pid: '140300', type: 'district', pinyin: 'jiao qu', py: 'jq', prefix: 'j',
  },
  {
    id: 140321, name: '平定县', pid: '140300', type: 'district', pinyin: 'ping ding xian', py: 'pdx', prefix: 'p',
  },
  {
    id: 140322, name: '盂县', pid: '140300', type: 'district', pinyin: 'yu xian', py: 'yx', prefix: 'y',
  },
  {
    id: 140402, name: '城区', pid: '140400', type: 'district', pinyin: 'cheng qu', py: 'cq', prefix: 'c',
  },
  {
    id: 140411, name: '郊区', pid: '140400', type: 'district', pinyin: 'jiao qu', py: 'jq', prefix: 'j',
  },
  {
    id: 140421, name: '长治县', pid: '140400', type: 'district', pinyin: 'chang zhi xian', py: 'czx', prefix: 'c',
  },
  {
    id: 140423, name: '襄垣县', pid: '140400', type: 'district', pinyin: 'xiang yuan xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 140424, name: '屯留县', pid: '140400', type: 'district', pinyin: 'tun liu xian', py: 'tlx', prefix: 't',
  },
  {
    id: 140425, name: '平顺县', pid: '140400', type: 'district', pinyin: 'ping shun xian', py: 'psx', prefix: 'p',
  },
  {
    id: 140426, name: '黎城县', pid: '140400', type: 'district', pinyin: 'li cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 140427, name: '壶关县', pid: '140400', type: 'district', pinyin: 'hu guan xian', py: 'hgx', prefix: 'h',
  },
  {
    id: 140428, name: '长子县', pid: '140400', type: 'district', pinyin: 'zhang zi xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 140429, name: '武乡县', pid: '140400', type: 'district', pinyin: 'wu xiang xian', py: 'wxx', prefix: 'w',
  },
  {
    id: 140430, name: '沁县', pid: '140400', type: 'district', pinyin: 'qin xian', py: 'qx', prefix: 'q',
  },
  {
    id: 140431, name: '沁源县', pid: '140400', type: 'district', pinyin: 'qin yuan xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 140481, name: '潞城市', pid: '140400', type: 'district', pinyin: 'lu cheng shi', py: 'lcs', prefix: 'l',
  },
  {
    id: 140502, name: '城区', pid: '140500', type: 'district', pinyin: 'cheng qu', py: 'cq', prefix: 'c',
  },
  {
    id: 140521, name: '沁水县', pid: '140500', type: 'district', pinyin: 'qin shui xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 140522, name: '阳城县', pid: '140500', type: 'district', pinyin: 'yang cheng xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 140524, name: '陵川县', pid: '140500', type: 'district', pinyin: 'ling chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 140525, name: '泽州县', pid: '140500', type: 'district', pinyin: 'ze zhou xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 140581, name: '高平市', pid: '140500', type: 'district', pinyin: 'gao ping shi', py: 'gps', prefix: 'g',
  },
  {
    id: 140602, name: '朔城区', pid: '140600', type: 'district', pinyin: 'shuo cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 140603, name: '平鲁区', pid: '140600', type: 'district', pinyin: 'ping lu qu', py: 'plq', prefix: 'p',
  },
  {
    id: 140621, name: '山阴县', pid: '140600', type: 'district', pinyin: 'shan yin xian', py: 'syx', prefix: 's',
  },
  {
    id: 140622, name: '应县', pid: '140600', type: 'district', pinyin: 'ying xian', py: 'yx', prefix: 'y',
  },
  {
    id: 140623, name: '右玉县', pid: '140600', type: 'district', pinyin: 'you yu xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 140624, name: '怀仁县', pid: '140600', type: 'district', pinyin: 'huai ren xian', py: 'hrx', prefix: 'h',
  },
  {
    id: 140702, name: '榆次区', pid: '140700', type: 'district', pinyin: 'yu ci qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 140721, name: '榆社县', pid: '140700', type: 'district', pinyin: 'yu she xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 140722, name: '左权县', pid: '140700', type: 'district', pinyin: 'zuo quan xian', py: 'zqx', prefix: 'z',
  },
  {
    id: 140723, name: '和顺县', pid: '140700', type: 'district', pinyin: 'he shun xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 140724, name: '昔阳县', pid: '140700', type: 'district', pinyin: 'xi yang xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 140725, name: '寿阳县', pid: '140700', type: 'district', pinyin: 'shou yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 140726, name: '太谷县', pid: '140700', type: 'district', pinyin: 'tai gu xian', py: 'tgx', prefix: 't',
  },
  {
    id: 140727, name: '祁县', pid: '140700', type: 'district', pinyin: 'qi xian', py: 'qx', prefix: 'q',
  },
  {
    id: 140728, name: '平遥县', pid: '140700', type: 'district', pinyin: 'ping yao xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 140729, name: '灵石县', pid: '140700', type: 'district', pinyin: 'ling shi xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 140781, name: '介休市', pid: '140700', type: 'district', pinyin: 'jie xiu shi', py: 'jxs', prefix: 'j',
  },
  {
    id: 140802, name: '盐湖区', pid: '140800', type: 'district', pinyin: 'yan hu qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 140821, name: '临猗县', pid: '140800', type: 'district', pinyin: 'lin yi xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 140822, name: '万荣县', pid: '140800', type: 'district', pinyin: 'wan rong xian', py: 'wrx', prefix: 'w',
  },
  {
    id: 140823, name: '闻喜县', pid: '140800', type: 'district', pinyin: 'wen xi xian', py: 'wxx', prefix: 'w',
  },
  {
    id: 140824, name: '稷山县', pid: '140800', type: 'district', pinyin: 'ji shan xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 140825, name: '新绛县', pid: '140800', type: 'district', pinyin: 'xin jiang xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 140826, name: '绛县', pid: '140800', type: 'district', pinyin: 'jiang xian', py: 'jx', prefix: 'j',
  },
  {
    id: 140827, name: '垣曲县', pid: '140800', type: 'district', pinyin: 'yuan qu xian', py: 'yqx', prefix: 'y',
  },
  {
    id: 140828, name: '夏县', pid: '140800', type: 'district', pinyin: 'xia xian', py: 'xx', prefix: 'x',
  },
  {
    id: 140829, name: '平陆县', pid: '140800', type: 'district', pinyin: 'ping lu xian', py: 'plx', prefix: 'p',
  },
  {
    id: 140830, name: '芮城县', pid: '140800', type: 'district', pinyin: 'rui cheng xian', py: 'rcx', prefix: 'r',
  },
  {
    id: 140881, name: '永济市', pid: '140800', type: 'district', pinyin: 'yong ji shi', py: 'yjs', prefix: 'y',
  },
  {
    id: 140882, name: '河津市', pid: '140800', type: 'district', pinyin: 'he jin shi', py: 'hjs', prefix: 'h',
  },
  {
    id: 140902, name: '忻府区', pid: '140900', type: 'district', pinyin: 'xin fu qu', py: 'xfq', prefix: 'x',
  },
  {
    id: 140921, name: '定襄县', pid: '140900', type: 'district', pinyin: 'ding xiang xian', py: 'dxx', prefix: 'd',
  },
  {
    id: 140922, name: '五台县', pid: '140900', type: 'district', pinyin: 'wu tai xian', py: 'wtx', prefix: 'w',
  },
  {
    id: 140923, name: '代县', pid: '140900', type: 'district', pinyin: 'dai xian', py: 'dx', prefix: 'd',
  },
  {
    id: 140924, name: '繁峙县', pid: '140900', type: 'district', pinyin: 'fan zhi xian', py: 'fzx', prefix: 'f',
  },
  {
    id: 140925, name: '宁武县', pid: '140900', type: 'district', pinyin: 'ning wu xian', py: 'nwx', prefix: 'n',
  },
  {
    id: 140926, name: '静乐县', pid: '140900', type: 'district', pinyin: 'jing le xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 140927, name: '神池县', pid: '140900', type: 'district', pinyin: 'shen chi xian', py: 'scx', prefix: 's',
  },
  {
    id: 140928, name: '五寨县', pid: '140900', type: 'district', pinyin: 'wu zhai xian', py: 'wzx', prefix: 'w',
  },
  {
    id: 140929, name: '岢岚县', pid: '140900', type: 'district', pinyin: 'ke lan xian', py: 'klx', prefix: 'k',
  },
  {
    id: 140930, name: '河曲县', pid: '140900', type: 'district', pinyin: 'he qu xian', py: 'hqx', prefix: 'h',
  },
  {
    id: 140931, name: '保德县', pid: '140900', type: 'district', pinyin: 'bao de xian', py: 'bdx', prefix: 'b',
  },
  {
    id: 140932, name: '偏关县', pid: '140900', type: 'district', pinyin: 'pian guan xian', py: 'pgx', prefix: 'p',
  },
  {
    id: 140981, name: '原平市', pid: '140900', type: 'district', pinyin: 'yuan ping shi', py: 'yps', prefix: 'y',
  },
  {
    id: 141002, name: '尧都区', pid: '141000', type: 'district', pinyin: 'yao dou qu', py: 'ydq', prefix: 'y',
  },
  {
    id: 141021, name: '曲沃县', pid: '141000', type: 'district', pinyin: 'qu wo xian', py: 'qwx', prefix: 'q',
  },
  {
    id: 141022, name: '翼城县', pid: '141000', type: 'district', pinyin: 'yi cheng xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 141023, name: '襄汾县', pid: '141000', type: 'district', pinyin: 'xiang fen xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 141024, name: '洪洞县', pid: '141000', type: 'district', pinyin: 'hong dong xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 141025, name: '古县', pid: '141000', type: 'district', pinyin: 'gu xian', py: 'gx', prefix: 'g',
  },
  {
    id: 141026, name: '安泽县', pid: '141000', type: 'district', pinyin: 'an ze xian', py: 'azx', prefix: 'a',
  },
  {
    id: 141027, name: '浮山县', pid: '141000', type: 'district', pinyin: 'fu shan xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 141028, name: '吉县', pid: '141000', type: 'district', pinyin: 'ji xian', py: 'jx', prefix: 'j',
  },
  {
    id: 141029, name: '乡宁县', pid: '141000', type: 'district', pinyin: 'xiang ning xian', py: 'xnx', prefix: 'x',
  },
  {
    id: 141030, name: '大宁县', pid: '141000', type: 'district', pinyin: 'da ning xian', py: 'dnx', prefix: 'd',
  },
  {
    id: 141031, name: '隰县', pid: '141000', type: 'district', pinyin: 'xi xian', py: 'xx', prefix: 'x',
  },
  {
    id: 141032, name: '永和县', pid: '141000', type: 'district', pinyin: 'yong he xian', py: 'yhx', prefix: 'y',
  },
  {
    id: 141033, name: '蒲县', pid: '141000', type: 'district', pinyin: 'pu xian', py: 'px', prefix: 'p',
  },
  {
    id: 141034, name: '汾西县', pid: '141000', type: 'district', pinyin: 'fen xi xian', py: 'fxx', prefix: 'f',
  },
  {
    id: 141081, name: '侯马市', pid: '141000', type: 'district', pinyin: 'hou ma shi', py: 'hms', prefix: 'h',
  },
  {
    id: 141082, name: '霍州市', pid: '141000', type: 'district', pinyin: 'huo zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 141102, name: '离石区', pid: '141100', type: 'district', pinyin: 'li shi qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 141121, name: '文水县', pid: '141100', type: 'district', pinyin: 'wen shui xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 141122, name: '交城县', pid: '141100', type: 'district', pinyin: 'jiao cheng xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 141123, name: '兴县', pid: '141100', type: 'district', pinyin: 'xing xian', py: 'xx', prefix: 'x',
  },
  {
    id: 141124, name: '临县', pid: '141100', type: 'district', pinyin: 'lin xian', py: 'lx', prefix: 'l',
  },
  {
    id: 141125, name: '柳林县', pid: '141100', type: 'district', pinyin: 'liu lin xian', py: 'llx', prefix: 'l',
  },
  {
    id: 141126, name: '石楼县', pid: '141100', type: 'district', pinyin: 'shi lou xian', py: 'slx', prefix: 's',
  },
  {
    id: 141127, name: '岚县', pid: '141100', type: 'district', pinyin: 'lan xian', py: 'lx', prefix: 'l',
  },
  {
    id: 141128, name: '方山县', pid: '141100', type: 'district', pinyin: 'fang shan xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 141129, name: '中阳县', pid: '141100', type: 'district', pinyin: 'zhong yang xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 141130, name: '交口县', pid: '141100', type: 'district', pinyin: 'jiao kou xian', py: 'jkx', prefix: 'j',
  },
  {
    id: 141181, name: '孝义市', pid: '141100', type: 'district', pinyin: 'xiao yi shi', py: 'xys', prefix: 'x',
  },
  {
    id: 141182, name: '汾阳市', pid: '141100', type: 'district', pinyin: 'fen yang shi', py: 'fys', prefix: 'f',
  },
  {
    id: 150102, name: '新城区', pid: '150100', type: 'district', pinyin: 'xin cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 150103, name: '回民区', pid: '150100', type: 'district', pinyin: 'hui min qu', py: 'hmq', prefix: 'h',
  },
  {
    id: 150104, name: '玉泉区', pid: '150100', type: 'district', pinyin: 'yu quan qu', py: 'yqq', prefix: 'y',
  },
  {
    id: 150105, name: '赛罕区', pid: '150100', type: 'district', pinyin: 'sai han qu', py: 'shq', prefix: 's',
  },
  {
    id: 150121, name: '土默特左旗', pid: '150100', type: 'district', pinyin: 'tu mo te zuo qi', py: 'tmtzq', prefix: 't',
  },
  {
    id: 150122, name: '托克托县', pid: '150100', type: 'district', pinyin: 'tuo ke tuo xian', py: 'tktx', prefix: 't',
  },
  {
    id: 150123, name: '和林格尔县', pid: '150100', type: 'district', pinyin: 'he lin ge er xian', py: 'hlgex', prefix: 'h',
  },
  {
    id: 150124, name: '清水河县', pid: '150100', type: 'district', pinyin: 'qing shui he xian', py: 'qshx', prefix: 'q',
  },
  {
    id: 150125, name: '武川县', pid: '150100', type: 'district', pinyin: 'wu chuan xian', py: 'wcx', prefix: 'w',
  },
  {
    id: 150202, name: '东河区', pid: '150200', type: 'district', pinyin: 'dong he qu', py: 'dhq', prefix: 'd',
  },
  {
    id: 150203, name: '昆都仑区', pid: '150200', type: 'district', pinyin: 'kun dou lun qu', py: 'kdlq', prefix: 'k',
  },
  {
    id: 150204, name: '青山区', pid: '150200', type: 'district', pinyin: 'qing shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 150205, name: '石拐区', pid: '150200', type: 'district', pinyin: 'shi guai qu', py: 'sgq', prefix: 's',
  },
  {
    id: 150206, name: '白云鄂博矿区', pid: '150200', type: 'district', pinyin: 'bai yun e bo kuang qu', py: 'byebkq', prefix: 'b',
  },
  {
    id: 150207, name: '九原区', pid: '150200', type: 'district', pinyin: 'jiu yuan qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 150221, name: '土默特右旗', pid: '150200', type: 'district', pinyin: 'tu mo te you qi', py: 'tmtyq', prefix: 't',
  },
  {
    id: 150222, name: '固阳县', pid: '150200', type: 'district', pinyin: 'gu yang xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 150223, name: '达尔罕茂明安联合旗', pid: '150200', type: 'district', pinyin: 'da er han mao ming an lian he qi', py: 'dehmmalhq', prefix: 'd',
  },
  {
    id: 150302, name: '海勃湾区', pid: '150300', type: 'district', pinyin: 'hai bo wan qu', py: 'hbwq', prefix: 'h',
  },
  {
    id: 150303, name: '海南区', pid: '150300', type: 'district', pinyin: 'hai nan qu', py: 'hnq', prefix: 'h',
  },
  {
    id: 150304, name: '乌达区', pid: '150300', type: 'district', pinyin: 'wu da qu', py: 'wdq', prefix: 'w',
  },
  {
    id: 150402, name: '红山区', pid: '150400', type: 'district', pinyin: 'hong shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 150403, name: '元宝山区', pid: '150400', type: 'district', pinyin: 'yuan bao shan qu', py: 'ybsq', prefix: 'y',
  },
  {
    id: 150404, name: '松山区', pid: '150400', type: 'district', pinyin: 'song shan qu', py: 'ssq', prefix: 's',
  },
  {
    id: 150421, name: '阿鲁科尔沁旗', pid: '150400', type: 'district', pinyin: 'a lu ke er qin qi', py: 'alkeqq', prefix: 'a',
  },
  {
    id: 150422, name: '巴林左旗', pid: '150400', type: 'district', pinyin: 'ba lin zuo qi', py: 'blzq', prefix: 'b',
  },
  {
    id: 150423, name: '巴林右旗', pid: '150400', type: 'district', pinyin: 'ba lin you qi', py: 'blyq', prefix: 'b',
  },
  {
    id: 150424, name: '林西县', pid: '150400', type: 'district', pinyin: 'lin xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 150425, name: '克什克腾旗', pid: '150400', type: 'district', pinyin: 'ke shen ke teng qi', py: 'ksktq', prefix: 'k',
  },
  {
    id: 150426, name: '翁牛特旗', pid: '150400', type: 'district', pinyin: 'weng niu te qi', py: 'wntq', prefix: 'w',
  },
  {
    id: 150428, name: '喀喇沁旗', pid: '150400', type: 'district', pinyin: 'ka la qin qi', py: 'klqq', prefix: 'k',
  },
  {
    id: 150429, name: '宁城县', pid: '150400', type: 'district', pinyin: 'ning cheng xian', py: 'ncx', prefix: 'n',
  },
  {
    id: 150430, name: '敖汉旗', pid: '150400', type: 'district', pinyin: 'ao han qi', py: 'ahq', prefix: 'a',
  },
  {
    id: 150502, name: '科尔沁区', pid: '150500', type: 'district', pinyin: 'ke er qin qu', py: 'keqq', prefix: 'k',
  },
  {
    id: 150521, name: '科尔沁左翼中旗', pid: '150500', type: 'district', pinyin: 'ke er qin zuo yi zhong qi', py: 'keqzyzq', prefix: 'k',
  },
  {
    id: 150522, name: '科尔沁左翼后旗', pid: '150500', type: 'district', pinyin: 'ke er qin zuo yi hou qi', py: 'keqzyhq', prefix: 'k',
  },
  {
    id: 150523, name: '开鲁县', pid: '150500', type: 'district', pinyin: 'kai lu xian', py: 'klx', prefix: 'k',
  },
  {
    id: 150524, name: '库伦旗', pid: '150500', type: 'district', pinyin: 'ku lun qi', py: 'klq', prefix: 'k',
  },
  {
    id: 150525, name: '奈曼旗', pid: '150500', type: 'district', pinyin: 'nai man qi', py: 'nmq', prefix: 'n',
  },
  {
    id: 150526, name: '扎鲁特旗', pid: '150500', type: 'district', pinyin: 'zha lu te qi', py: 'zltq', prefix: 'z',
  },
  {
    id: 150581, name: '霍林郭勒市', pid: '150500', type: 'district', pinyin: 'huo lin guo le shi', py: 'hlgls', prefix: 'h',
  },
  {
    id: 150602, name: '东胜区', pid: '150600', type: 'district', pinyin: 'dong sheng qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 150621, name: '达拉特旗', pid: '150600', type: 'district', pinyin: 'da la te qi', py: 'dltq', prefix: 'd',
  },
  {
    id: 150622, name: '准格尔旗', pid: '150600', type: 'district', pinyin: 'zhun ge er qi', py: 'zgeq', prefix: 'z',
  },
  {
    id: 150623, name: '鄂托克前旗', pid: '150600', type: 'district', pinyin: 'e tuo ke qian qi', py: 'etkqq', prefix: 'e',
  },
  {
    id: 150624, name: '鄂托克旗', pid: '150600', type: 'district', pinyin: 'e tuo ke qi', py: 'etkq', prefix: 'e',
  },
  {
    id: 150625, name: '杭锦旗', pid: '150600', type: 'district', pinyin: 'hang jin qi', py: 'hjq', prefix: 'h',
  },
  {
    id: 150626, name: '乌审旗', pid: '150600', type: 'district', pinyin: 'wu shen qi', py: 'wsq', prefix: 'w',
  },
  {
    id: 150627, name: '伊金霍洛旗', pid: '150600', type: 'district', pinyin: 'yi jin huo luo qi', py: 'yjhlq', prefix: 'y',
  },
  {
    id: 150702, name: '海拉尔区', pid: '150700', type: 'district', pinyin: 'hai la er qu', py: 'hleq', prefix: 'h',
  },
  {
    id: 150703, name: '扎赉诺尔区', pid: '150700', type: 'district', pinyin: 'zha lai nuo er qu', py: 'zlneq', prefix: 'z',
  },
  {
    id: 150721, name: '阿荣旗', pid: '150700', type: 'district', pinyin: 'a rong qi', py: 'arq', prefix: 'a',
  },
  {
    id: 150722, name: '莫力达瓦达斡尔族自治旗', pid: '150700', type: 'district', pinyin: 'mo li da wa da wo er zu zi zhi qi', py: 'mldwdwezzzq', prefix: 'm',
  },
  {
    id: 150723, name: '鄂伦春自治旗', pid: '150700', type: 'district', pinyin: 'e lun chun zi zhi qi', py: 'elczzq', prefix: 'e',
  },
  {
    id: 150724, name: '鄂温克族自治旗', pid: '150700', type: 'district', pinyin: 'e wen ke zu zi zhi qi', py: 'ewkzzzq', prefix: 'e',
  },
  {
    id: 150725, name: '陈巴尔虎旗', pid: '150700', type: 'district', pinyin: 'chen ba er hu qi', py: 'cbehq', prefix: 'c',
  },
  {
    id: 150726, name: '新巴尔虎左旗', pid: '150700', type: 'district', pinyin: 'xin ba er hu zuo qi', py: 'xbehzq', prefix: 'x',
  },
  {
    id: 150727, name: '新巴尔虎右旗', pid: '150700', type: 'district', pinyin: 'xin ba er hu you qi', py: 'xbehyq', prefix: 'x',
  },
  {
    id: 150781, name: '满洲里市', pid: '150700', type: 'district', pinyin: 'man zhou li shi', py: 'mzls', prefix: 'm',
  },
  {
    id: 150782, name: '牙克石市', pid: '150700', type: 'district', pinyin: 'ya ke shi shi', py: 'ykss', prefix: 'y',
  },
  {
    id: 150783, name: '扎兰屯市', pid: '150700', type: 'district', pinyin: 'zha lan tun shi', py: 'zlts', prefix: 'z',
  },
  {
    id: 150784, name: '额尔古纳市', pid: '150700', type: 'district', pinyin: 'e er gu na shi', py: 'eegns', prefix: 'e',
  },
  {
    id: 150785, name: '根河市', pid: '150700', type: 'district', pinyin: 'gen he shi', py: 'ghs', prefix: 'g',
  },
  {
    id: 150802, name: '临河区', pid: '150800', type: 'district', pinyin: 'lin he qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 150821, name: '五原县', pid: '150800', type: 'district', pinyin: 'wu yuan xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 150822, name: '磴口县', pid: '150800', type: 'district', pinyin: 'deng kou xian', py: 'dkx', prefix: 'd',
  },
  {
    id: 150823, name: '乌拉特前旗', pid: '150800', type: 'district', pinyin: 'wu la te qian qi', py: 'wltqq', prefix: 'w',
  },
  {
    id: 150824, name: '乌拉特中旗', pid: '150800', type: 'district', pinyin: 'wu la te zhong qi', py: 'wltzq', prefix: 'w',
  },
  {
    id: 150825, name: '乌拉特后旗', pid: '150800', type: 'district', pinyin: 'wu la te hou qi', py: 'wlthq', prefix: 'w',
  },
  {
    id: 150826, name: '杭锦后旗', pid: '150800', type: 'district', pinyin: 'hang jin hou qi', py: 'hjhq', prefix: 'h',
  },
  {
    id: 150902, name: '集宁区', pid: '150900', type: 'district', pinyin: 'ji ning qu', py: 'jnq', prefix: 'j',
  },
  {
    id: 150921, name: '卓资县', pid: '150900', type: 'district', pinyin: 'zhuo zi xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 150922, name: '化德县', pid: '150900', type: 'district', pinyin: 'hua de xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 150923, name: '商都县', pid: '150900', type: 'district', pinyin: 'shang dou xian', py: 'sdx', prefix: 's',
  },
  {
    id: 150924, name: '兴和县', pid: '150900', type: 'district', pinyin: 'xing he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 150925, name: '凉城县', pid: '150900', type: 'district', pinyin: 'liang cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 150926, name: '察哈尔右翼前旗', pid: '150900', type: 'district', pinyin: 'cha ha er you yi qian qi', py: 'cheyyqq', prefix: 'c',
  },
  {
    id: 150927, name: '察哈尔右翼中旗', pid: '150900', type: 'district', pinyin: 'cha ha er you yi zhong qi', py: 'cheyyzq', prefix: 'c',
  },
  {
    id: 150928, name: '察哈尔右翼后旗', pid: '150900', type: 'district', pinyin: 'cha ha er you yi hou qi', py: 'cheyyhq', prefix: 'c',
  },
  {
    id: 150929, name: '四子王旗', pid: '150900', type: 'district', pinyin: 'si zi wang qi', py: 'szwq', prefix: 's',
  },
  {
    id: 150981, name: '丰镇市', pid: '150900', type: 'district', pinyin: 'feng zhen shi', py: 'fzs', prefix: 'f',
  },
  {
    id: 152201, name: '乌兰浩特市', pid: '152200', type: 'district', pinyin: 'wu lan hao te shi', py: 'wlhts', prefix: 'w',
  },
  {
    id: 152202, name: '阿尔山市', pid: '152200', type: 'district', pinyin: 'a er shan shi', py: 'aess', prefix: 'a',
  },
  {
    id: 152221, name: '科尔沁右翼前旗', pid: '152200', type: 'district', pinyin: 'ke er qin you yi qian qi', py: 'keqyyqq', prefix: 'k',
  },
  {
    id: 152222, name: '科尔沁右翼中旗', pid: '152200', type: 'district', pinyin: 'ke er qin you yi zhong qi', py: 'keqyyzq', prefix: 'k',
  },
  {
    id: 152223, name: '扎赉特旗', pid: '152200', type: 'district', pinyin: 'zha lai te qi', py: 'zltq', prefix: 'z',
  },
  {
    id: 152224, name: '突泉县', pid: '152200', type: 'district', pinyin: 'tu quan xian', py: 'tqx', prefix: 't',
  },
  {
    id: 152501, name: '二连浩特市', pid: '152500', type: 'district', pinyin: 'er lian hao te shi', py: 'elhts', prefix: 'e',
  },
  {
    id: 152502, name: '锡林浩特市', pid: '152500', type: 'district', pinyin: 'xi lin hao te shi', py: 'xlhts', prefix: 'x',
  },
  {
    id: 152522, name: '阿巴嘎旗', pid: '152500', type: 'district', pinyin: 'a ba ga qi', py: 'abgq', prefix: 'a',
  },
  {
    id: 152523, name: '苏尼特左旗', pid: '152500', type: 'district', pinyin: 'su ni te zuo qi', py: 'sntzq', prefix: 's',
  },
  {
    id: 152524, name: '苏尼特右旗', pid: '152500', type: 'district', pinyin: 'su ni te you qi', py: 'sntyq', prefix: 's',
  },
  {
    id: 152525, name: '东乌珠穆沁旗', pid: '152500', type: 'district', pinyin: 'dong wu zhu mu qin qi', py: 'dwzmqq', prefix: 'd',
  },
  {
    id: 152526, name: '西乌珠穆沁旗', pid: '152500', type: 'district', pinyin: 'xi wu zhu mu qin qi', py: 'xwzmqq', prefix: 'x',
  },
  {
    id: 152527, name: '太仆寺旗', pid: '152500', type: 'district', pinyin: 'tai pu si qi', py: 'tpsq', prefix: 't',
  },
  {
    id: 152528, name: '镶黄旗', pid: '152500', type: 'district', pinyin: 'xiang huang qi', py: 'xhq', prefix: 'x',
  },
  {
    id: 152529, name: '正镶白旗', pid: '152500', type: 'district', pinyin: 'zheng xiang bai qi', py: 'zxbq', prefix: 'z',
  },
  {
    id: 152530, name: '正蓝旗', pid: '152500', type: 'district', pinyin: 'zheng lan qi', py: 'zlq', prefix: 'z',
  },
  {
    id: 152531, name: '多伦县', pid: '152500', type: 'district', pinyin: 'duo lun xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 152921, name: '阿拉善左旗', pid: '152900', type: 'district', pinyin: 'a la shan zuo qi', py: 'alszq', prefix: 'a',
  },
  {
    id: 152922, name: '阿拉善右旗', pid: '152900', type: 'district', pinyin: 'a la shan you qi', py: 'alsyq', prefix: 'a',
  },
  {
    id: 152923, name: '额济纳旗', pid: '152900', type: 'district', pinyin: 'e ji na qi', py: 'ejnq', prefix: 'e',
  },
  {
    id: 210102, name: '和平区', pid: '210100', type: 'district', pinyin: 'he ping qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 210103, name: '沈河区', pid: '210100', type: 'district', pinyin: 'shen he qu', py: 'shq', prefix: 's',
  },
  {
    id: 210104, name: '大东区', pid: '210100', type: 'district', pinyin: 'da dong qu', py: 'ddq', prefix: 'd',
  },
  {
    id: 210105, name: '皇姑区', pid: '210100', type: 'district', pinyin: 'huang gu qu', py: 'hgq', prefix: 'h',
  },
  {
    id: 210106, name: '铁西区', pid: '210100', type: 'district', pinyin: 'tie xi qu', py: 'txq', prefix: 't',
  },
  {
    id: 210111, name: '苏家屯区', pid: '210100', type: 'district', pinyin: 'su jia tun qu', py: 'sjtq', prefix: 's',
  },
  {
    id: 210112, name: '东陵区', pid: '210100', type: 'district', pinyin: 'dong ling qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 210113, name: '沈北新区', pid: '210100', type: 'district', pinyin: 'shen bei xin qu', py: 'sbxq', prefix: 's',
  },
  {
    id: 210114, name: '于洪区', pid: '210100', type: 'district', pinyin: 'yu hong qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 210122, name: '辽中县', pid: '210100', type: 'district', pinyin: 'liao zhong xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 210123, name: '康平县', pid: '210100', type: 'district', pinyin: 'kang ping xian', py: 'kpx', prefix: 'k',
  },
  {
    id: 210124, name: '法库县', pid: '210100', type: 'district', pinyin: 'fa ku xian', py: 'fkx', prefix: 'f',
  },
  {
    id: 210181, name: '新民市', pid: '210100', type: 'district', pinyin: 'xin min shi', py: 'xms', prefix: 'x',
  },
  {
    id: 210202, name: '中山区', pid: '210200', type: 'district', pinyin: 'zhong shan qu', py: 'zsq', prefix: 'z',
  },
  {
    id: 210203, name: '西岗区', pid: '210200', type: 'district', pinyin: 'xi gang qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 210204, name: '沙河口区', pid: '210200', type: 'district', pinyin: 'sha he kou qu', py: 'shkq', prefix: 's',
  },
  {
    id: 210211, name: '甘井子区', pid: '210200', type: 'district', pinyin: 'gan jing zi qu', py: 'gjzq', prefix: 'g',
  },
  {
    id: 210212, name: '旅顺口区', pid: '210200', type: 'district', pinyin: 'lv shun kou qu', py: 'lskq', prefix: 'l',
  },
  {
    id: 210213, name: '金州区', pid: '210200', type: 'district', pinyin: 'jin zhou qu', py: 'jzq', prefix: 'j',
  },
  {
    id: 210224, name: '长海县', pid: '210200', type: 'district', pinyin: 'chang hai xian', py: 'chx', prefix: 'c',
  },
  {
    id: 210281, name: '瓦房店市', pid: '210200', type: 'district', pinyin: 'wa fang dian shi', py: 'wfds', prefix: 'w',
  },
  {
    id: 210282, name: '普兰店市', pid: '210200', type: 'district', pinyin: 'pu lan dian shi', py: 'plds', prefix: 'p',
  },
  {
    id: 210283, name: '庄河市', pid: '210200', type: 'district', pinyin: 'zhuang he shi', py: 'zhs', prefix: 'z',
  },
  {
    id: 210302, name: '铁东区', pid: '210300', type: 'district', pinyin: 'tie dong qu', py: 'tdq', prefix: 't',
  },
  {
    id: 210303, name: '铁西区', pid: '210300', type: 'district', pinyin: 'tie xi qu', py: 'txq', prefix: 't',
  },
  {
    id: 210304, name: '立山区', pid: '210300', type: 'district', pinyin: 'li shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 210311, name: '千山区', pid: '210300', type: 'district', pinyin: 'qian shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 210321, name: '台安县', pid: '210300', type: 'district', pinyin: 'tai an xian', py: 'tax', prefix: 't',
  },
  {
    id: 210323, name: '岫岩满族自治县', pid: '210300', type: 'district', pinyin: 'xiu yan man zu zi zhi xian', py: 'xymzzzx', prefix: 'x',
  },
  {
    id: 210381, name: '海城市', pid: '210300', type: 'district', pinyin: 'hai cheng shi', py: 'hcs', prefix: 'h',
  },
  {
    id: 210402, name: '新抚区', pid: '210400', type: 'district', pinyin: 'xin fu qu', py: 'xfq', prefix: 'x',
  },
  {
    id: 210403, name: '东洲区', pid: '210400', type: 'district', pinyin: 'dong zhou qu', py: 'dzq', prefix: 'd',
  },
  {
    id: 210404, name: '望花区', pid: '210400', type: 'district', pinyin: 'wang hua qu', py: 'whq', prefix: 'w',
  },
  {
    id: 210411, name: '顺城区', pid: '210400', type: 'district', pinyin: 'shun cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 210421, name: '抚顺县', pid: '210400', type: 'district', pinyin: 'fu shun xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 210422, name: '新宾满族自治县', pid: '210400', type: 'district', pinyin: 'xin bin man zu zi zhi xian', py: 'xbmzzzx', prefix: 'x',
  },
  {
    id: 210423, name: '清原满族自治县', pid: '210400', type: 'district', pinyin: 'qing yuan man zu zi zhi xian', py: 'qymzzzx', prefix: 'q',
  },
  {
    id: 210502, name: '平山区', pid: '210500', type: 'district', pinyin: 'ping shan qu', py: 'psq', prefix: 'p',
  },
  {
    id: 210503, name: '溪湖区', pid: '210500', type: 'district', pinyin: 'xi hu qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 210504, name: '明山区', pid: '210500', type: 'district', pinyin: 'ming shan qu', py: 'msq', prefix: 'm',
  },
  {
    id: 210505, name: '南芬区', pid: '210500', type: 'district', pinyin: 'nan fen qu', py: 'nfq', prefix: 'n',
  },
  {
    id: 210521, name: '本溪满族自治县', pid: '210500', type: 'district', pinyin: 'ben xi man zu zi zhi xian', py: 'bxmzzzx', prefix: 'b',
  },
  {
    id: 210522, name: '桓仁满族自治县', pid: '210500', type: 'district', pinyin: 'huan ren man zu zi zhi xian', py: 'hrmzzzx', prefix: 'h',
  },
  {
    id: 210602, name: '元宝区', pid: '210600', type: 'district', pinyin: 'yuan bao qu', py: 'ybq', prefix: 'y',
  },
  {
    id: 210603, name: '振兴区', pid: '210600', type: 'district', pinyin: 'zhen xing qu', py: 'zxq', prefix: 'z',
  },
  {
    id: 210604, name: '振安区', pid: '210600', type: 'district', pinyin: 'zhen an qu', py: 'zaq', prefix: 'z',
  },
  {
    id: 210624, name: '宽甸满族自治县', pid: '210600', type: 'district', pinyin: 'kuan dian man zu zi zhi xian', py: 'kdmzzzx', prefix: 'k',
  },
  {
    id: 210681, name: '东港市', pid: '210600', type: 'district', pinyin: 'dong gang shi', py: 'dgs', prefix: 'd',
  },
  {
    id: 210682, name: '凤城市', pid: '210600', type: 'district', pinyin: 'feng cheng shi', py: 'fcs', prefix: 'f',
  },
  {
    id: 210702, name: '古塔区', pid: '210700', type: 'district', pinyin: 'gu ta qu', py: 'gtq', prefix: 'g',
  },
  {
    id: 210703, name: '凌河区', pid: '210700', type: 'district', pinyin: 'ling he qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 210711, name: '太和区', pid: '210700', type: 'district', pinyin: 'tai he qu', py: 'thq', prefix: 't',
  },
  {
    id: 210726, name: '黑山县', pid: '210700', type: 'district', pinyin: 'hei shan xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 210727, name: '义县', pid: '210700', type: 'district', pinyin: 'yi xian', py: 'yx', prefix: 'y',
  },
  {
    id: 210781, name: '凌海市', pid: '210700', type: 'district', pinyin: 'ling hai shi', py: 'lhs', prefix: 'l',
  },
  {
    id: 210782, name: '北镇市', pid: '210700', type: 'district', pinyin: 'bei zhen shi', py: 'bzs', prefix: 'b',
  },
  {
    id: 210802, name: '站前区', pid: '210800', type: 'district', pinyin: 'zhan qian qu', py: 'zqq', prefix: 'z',
  },
  {
    id: 210803, name: '西市区', pid: '210800', type: 'district', pinyin: 'xi shi qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 210804, name: '鲅鱼圈区', pid: '210800', type: 'district', pinyin: 'ba yu quan qu', py: 'byqq', prefix: 'b',
  },
  {
    id: 210811, name: '老边区', pid: '210800', type: 'district', pinyin: 'lao bian qu', py: 'lbq', prefix: 'l',
  },
  {
    id: 210881, name: '盖州市', pid: '210800', type: 'district', pinyin: 'gai zhou shi', py: 'gzs', prefix: 'g',
  },
  {
    id: 210882, name: '大石桥市', pid: '210800', type: 'district', pinyin: 'da shi qiao shi', py: 'dsqs', prefix: 'd',
  },
  {
    id: 210902, name: '海州区', pid: '210900', type: 'district', pinyin: 'hai zhou qu', py: 'hzq', prefix: 'h',
  },
  {
    id: 210903, name: '新邱区', pid: '210900', type: 'district', pinyin: 'xin qiu qu', py: 'xqq', prefix: 'x',
  },
  {
    id: 210904, name: '太平区', pid: '210900', type: 'district', pinyin: 'tai ping qu', py: 'tpq', prefix: 't',
  },
  {
    id: 210905, name: '清河门区', pid: '210900', type: 'district', pinyin: 'qing he men qu', py: 'qhmq', prefix: 'q',
  },
  {
    id: 210911, name: '细河区', pid: '210900', type: 'district', pinyin: 'xi he qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 210921, name: '阜新蒙古族自治县', pid: '210900', type: 'district', pinyin: 'fu xin meng gu zu zi zhi xian', py: 'fxmgzzzx', prefix: 'f',
  },
  {
    id: 210922, name: '彰武县', pid: '210900', type: 'district', pinyin: 'zhang wu xian', py: 'zwx', prefix: 'z',
  },
  {
    id: 211002, name: '白塔区', pid: '211000', type: 'district', pinyin: 'bai ta qu', py: 'btq', prefix: 'b',
  },
  {
    id: 211003, name: '文圣区', pid: '211000', type: 'district', pinyin: 'wen sheng qu', py: 'wsq', prefix: 'w',
  },
  {
    id: 211004, name: '宏伟区', pid: '211000', type: 'district', pinyin: 'hong wei qu', py: 'hwq', prefix: 'h',
  },
  {
    id: 211005, name: '弓长岭区', pid: '211000', type: 'district', pinyin: 'gong chang ling qu', py: 'gclq', prefix: 'c',
  },
  {
    id: 211011, name: '太子河区', pid: '211000', type: 'district', pinyin: 'tai zi he qu', py: 'tzhq', prefix: 't',
  },
  {
    id: 211021, name: '辽阳县', pid: '211000', type: 'district', pinyin: 'liao yang xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 211081, name: '灯塔市', pid: '211000', type: 'district', pinyin: 'deng ta shi', py: 'dts', prefix: 'd',
  },
  {
    id: 211102, name: '双台子区', pid: '211100', type: 'district', pinyin: 'shuang tai zi qu', py: 'stzq', prefix: 's',
  },
  {
    id: 211103, name: '兴隆台区', pid: '211100', type: 'district', pinyin: 'xing long tai qu', py: 'xltq', prefix: 'x',
  },
  {
    id: 211121, name: '大洼县', pid: '211100', type: 'district', pinyin: 'da wa xian', py: 'dwx', prefix: 'd',
  },
  {
    id: 211122, name: '盘山县', pid: '211100', type: 'district', pinyin: 'pan shan xian', py: 'psx', prefix: 'p',
  },
  {
    id: 211202, name: '银州区', pid: '211200', type: 'district', pinyin: 'yin zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 211204, name: '清河区', pid: '211200', type: 'district', pinyin: 'qing he qu', py: 'qhq', prefix: 'q',
  },
  {
    id: 211221, name: '铁岭县', pid: '211200', type: 'district', pinyin: 'tie ling xian', py: 'tlx', prefix: 't',
  },
  {
    id: 211223, name: '西丰县', pid: '211200', type: 'district', pinyin: 'xi feng xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 211224, name: '昌图县', pid: '211200', type: 'district', pinyin: 'chang tu xian', py: 'ctx', prefix: 'c',
  },
  {
    id: 211281, name: '调兵山市', pid: '211200', type: 'district', pinyin: 'diao bing shan shi', py: 'dbss', prefix: 'd',
  },
  {
    id: 211282, name: '开原市', pid: '211200', type: 'district', pinyin: 'kai yuan shi', py: 'kys', prefix: 'k',
  },
  {
    id: 211302, name: '双塔区', pid: '211300', type: 'district', pinyin: 'shuang ta qu', py: 'stq', prefix: 's',
  },
  {
    id: 211303, name: '龙城区', pid: '211300', type: 'district', pinyin: 'long cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 211321, name: '朝阳县', pid: '211300', type: 'district', pinyin: 'chao yang xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 211322, name: '建平县', pid: '211300', type: 'district', pinyin: 'jian ping xian', py: 'jpx', prefix: 'j',
  },
  {
    id: 211324, name: '喀喇沁左翼蒙古族自治县', pid: '211300', type: 'district', pinyin: 'ka la qin zuo yi meng gu zu zi zhi xian', py: 'klqzymgzzzx', prefix: 'k',
  },
  {
    id: 211381, name: '北票市', pid: '211300', type: 'district', pinyin: 'bei piao shi', py: 'bps', prefix: 'b',
  },
  {
    id: 211382, name: '凌源市', pid: '211300', type: 'district', pinyin: 'ling yuan shi', py: 'lys', prefix: 'l',
  },
  {
    id: 211402, name: '连山区', pid: '211400', type: 'district', pinyin: 'lian shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 211403, name: '龙港区', pid: '211400', type: 'district', pinyin: 'long gang qu', py: 'lgq', prefix: 'l',
  },
  {
    id: 211404, name: '南票区', pid: '211400', type: 'district', pinyin: 'nan piao qu', py: 'npq', prefix: 'n',
  },
  {
    id: 211421, name: '绥中县', pid: '211400', type: 'district', pinyin: 'sui zhong xian', py: 'szx', prefix: 's',
  },
  {
    id: 211422, name: '建昌县', pid: '211400', type: 'district', pinyin: 'jian chang xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 211481, name: '兴城市', pid: '211400', type: 'district', pinyin: 'xing cheng shi', py: 'xcs', prefix: 'x',
  },
  {
    id: 220102, name: '南关区', pid: '220100', type: 'district', pinyin: 'nan guan qu', py: 'ngq', prefix: 'n',
  },
  {
    id: 220103, name: '宽城区', pid: '220100', type: 'district', pinyin: 'kuan cheng qu', py: 'kcq', prefix: 'k',
  },
  {
    id: 220104, name: '朝阳区', pid: '220100', type: 'district', pinyin: 'chao yang qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 220105, name: '二道区', pid: '220100', type: 'district', pinyin: 'er dao qu', py: 'edq', prefix: 'e',
  },
  {
    id: 220106, name: '绿园区', pid: '220100', type: 'district', pinyin: 'lv yuan qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 220112, name: '双阳区', pid: '220100', type: 'district', pinyin: 'shuang yang qu', py: 'syq', prefix: 's',
  },
  {
    id: 220122, name: '农安县', pid: '220100', type: 'district', pinyin: 'nong an xian', py: 'nax', prefix: 'n',
  },
  {
    id: 220181, name: '九台市', pid: '220100', type: 'district', pinyin: 'jiu tai shi', py: 'jts', prefix: 'j',
  },
  {
    id: 220182, name: '榆树市', pid: '220100', type: 'district', pinyin: 'yu shu shi', py: 'yss', prefix: 'y',
  },
  {
    id: 220183, name: '德惠市', pid: '220100', type: 'district', pinyin: 'de hui shi', py: 'dhs', prefix: 'd',
  },
  {
    id: 220202, name: '昌邑区', pid: '220200', type: 'district', pinyin: 'chang yi qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 220203, name: '龙潭区', pid: '220200', type: 'district', pinyin: 'long tan qu', py: 'ltq', prefix: 'l',
  },
  {
    id: 220204, name: '船营区', pid: '220200', type: 'district', pinyin: 'chuan ying qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 220211, name: '丰满区', pid: '220200', type: 'district', pinyin: 'feng man qu', py: 'fmq', prefix: 'f',
  },
  {
    id: 220221, name: '永吉县', pid: '220200', type: 'district', pinyin: 'yong ji xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 220281, name: '蛟河市', pid: '220200', type: 'district', pinyin: 'jiao he shi', py: 'jhs', prefix: 'j',
  },
  {
    id: 220282, name: '桦甸市', pid: '220200', type: 'district', pinyin: 'hua dian shi', py: 'hds', prefix: 'h',
  },
  {
    id: 220283, name: '舒兰市', pid: '220200', type: 'district', pinyin: 'shu lan shi', py: 'sls', prefix: 's',
  },
  {
    id: 220284, name: '磐石市', pid: '220200', type: 'district', pinyin: 'pan shi shi', py: 'pss', prefix: 'p',
  },
  {
    id: 220302, name: '铁西区', pid: '220300', type: 'district', pinyin: 'tie xi qu', py: 'txq', prefix: 't',
  },
  {
    id: 220303, name: '铁东区', pid: '220300', type: 'district', pinyin: 'tie dong qu', py: 'tdq', prefix: 't',
  },
  {
    id: 220322, name: '梨树县', pid: '220300', type: 'district', pinyin: 'li shu xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 220323, name: '伊通满族自治县', pid: '220300', type: 'district', pinyin: 'yi tong man zu zi zhi xian', py: 'ytmzzzx', prefix: 'y',
  },
  {
    id: 220381, name: '公主岭市', pid: '220300', type: 'district', pinyin: 'gong zhu ling shi', py: 'gzls', prefix: 'g',
  },
  {
    id: 220382, name: '双辽市', pid: '220300', type: 'district', pinyin: 'shuang liao shi', py: 'sls', prefix: 's',
  },
  {
    id: 220402, name: '龙山区', pid: '220400', type: 'district', pinyin: 'long shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 220403, name: '西安区', pid: '220400', type: 'district', pinyin: 'xi an qu', py: 'xaq', prefix: 'x',
  },
  {
    id: 220421, name: '东丰县', pid: '220400', type: 'district', pinyin: 'dong feng xian', py: 'dfx', prefix: 'd',
  },
  {
    id: 220422, name: '东辽县', pid: '220400', type: 'district', pinyin: 'dong liao xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 220502, name: '东昌区', pid: '220500', type: 'district', pinyin: 'dong chang qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 220503, name: '二道江区', pid: '220500', type: 'district', pinyin: 'er dao jiang qu', py: 'edjq', prefix: 'e',
  },
  {
    id: 220521, name: '通化县', pid: '220500', type: 'district', pinyin: 'tong hua xian', py: 'thx', prefix: 't',
  },
  {
    id: 220523, name: '辉南县', pid: '220500', type: 'district', pinyin: 'hui nan xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 220524, name: '柳河县', pid: '220500', type: 'district', pinyin: 'liu he xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 220581, name: '梅河口市', pid: '220500', type: 'district', pinyin: 'mei he kou shi', py: 'mhks', prefix: 'm',
  },
  {
    id: 220582, name: '集安市', pid: '220500', type: 'district', pinyin: 'ji an shi', py: 'jas', prefix: 'j',
  },
  {
    id: 220602, name: '浑江区', pid: '220600', type: 'district', pinyin: 'hun jiang qu', py: 'hjq', prefix: 'h',
  },
  {
    id: 220605, name: '江源区', pid: '220600', type: 'district', pinyin: 'jiang yuan qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 220621, name: '抚松县', pid: '220600', type: 'district', pinyin: 'fu song xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 220622, name: '靖宇县', pid: '220600', type: 'district', pinyin: 'jing yu xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 220623, name: '长白朝鲜族自治县', pid: '220600', type: 'district', pinyin: 'chang bai chao xian zu zi zhi xian', py: 'cbcxzzzx', prefix: 'c',
  },
  {
    id: 220681, name: '临江市', pid: '220600', type: 'district', pinyin: 'lin jiang shi', py: 'ljs', prefix: 'l',
  },
  {
    id: 220702, name: '宁江区', pid: '220700', type: 'district', pinyin: 'ning jiang qu', py: 'njq', prefix: 'n',
  },
  {
    id: 220721, name: '前郭尔罗斯蒙古族自治县', pid: '220700', type: 'district', pinyin: 'qian guo er luo si meng gu zu zi zhi xian', py: 'qgelsmgzzzx', prefix: 'q',
  },
  {
    id: 220722, name: '长岭县', pid: '220700', type: 'district', pinyin: 'chang ling xian', py: 'clx', prefix: 'c',
  },
  {
    id: 220723, name: '乾安县', pid: '220700', type: 'district', pinyin: 'qian an xian', py: 'qax', prefix: 'q',
  },
  {
    id: 220781, name: '扶余市', pid: '220700', type: 'district', pinyin: 'fu yu shi', py: 'fys', prefix: 'f',
  },
  {
    id: 220802, name: '洮北区', pid: '220800', type: 'district', pinyin: 'tao bei qu', py: 'tbq', prefix: 't',
  },
  {
    id: 220821, name: '镇赉县', pid: '220800', type: 'district', pinyin: 'zhen lai xian', py: 'zlx', prefix: 'z',
  },
  {
    id: 220822, name: '通榆县', pid: '220800', type: 'district', pinyin: 'tong yu xian', py: 'tyx', prefix: 't',
  },
  {
    id: 220881, name: '洮南市', pid: '220800', type: 'district', pinyin: 'tao nan shi', py: 'tns', prefix: 't',
  },
  {
    id: 220882, name: '大安市', pid: '220800', type: 'district', pinyin: 'da an shi', py: 'das', prefix: 'd',
  },
  {
    id: 222401, name: '延吉市', pid: '222400', type: 'district', pinyin: 'yan ji shi', py: 'yjs', prefix: 'y',
  },
  {
    id: 222402, name: '图们市', pid: '222400', type: 'district', pinyin: 'tu men shi', py: 'tms', prefix: 't',
  },
  {
    id: 222403, name: '敦化市', pid: '222400', type: 'district', pinyin: 'dun hua shi', py: 'dhs', prefix: 'd',
  },
  {
    id: 222404, name: '珲春市', pid: '222400', type: 'district', pinyin: 'hun chun shi', py: 'hcs', prefix: 'h',
  },
  {
    id: 222405, name: '龙井市', pid: '222400', type: 'district', pinyin: 'long jing shi', py: 'ljs', prefix: 'l',
  },
  {
    id: 222406, name: '和龙市', pid: '222400', type: 'district', pinyin: 'he long shi', py: 'hls', prefix: 'h',
  },
  {
    id: 222424, name: '汪清县', pid: '222400', type: 'district', pinyin: 'wang qing xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 222426, name: '安图县', pid: '222400', type: 'district', pinyin: 'an tu xian', py: 'atx', prefix: 'a',
  },
  {
    id: 230102, name: '道里区', pid: '230100', type: 'district', pinyin: 'dao li qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 230103, name: '南岗区', pid: '230100', type: 'district', pinyin: 'nan gang qu', py: 'ngq', prefix: 'n',
  },
  {
    id: 230104, name: '道外区', pid: '230100', type: 'district', pinyin: 'dao wai qu', py: 'dwq', prefix: 'd',
  },
  {
    id: 230108, name: '平房区', pid: '230100', type: 'district', pinyin: 'ping fang qu', py: 'pfq', prefix: 'p',
  },
  {
    id: 230109, name: '松北区', pid: '230100', type: 'district', pinyin: 'song bei qu', py: 'sbq', prefix: 's',
  },
  {
    id: 230110, name: '香坊区', pid: '230100', type: 'district', pinyin: 'xiang fang qu', py: 'xfq', prefix: 'x',
  },
  {
    id: 230111, name: '呼兰区', pid: '230100', type: 'district', pinyin: 'hu lan qu', py: 'hlq', prefix: 'h',
  },
  {
    id: 230112, name: '阿城区', pid: '230100', type: 'district', pinyin: 'a cheng qu', py: 'acq', prefix: 'a',
  },
  {
    id: 230123, name: '依兰县', pid: '230100', type: 'district', pinyin: 'yi lan xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 230124, name: '方正县', pid: '230100', type: 'district', pinyin: 'fang zheng xian', py: 'fzx', prefix: 'f',
  },
  {
    id: 230125, name: '宾县', pid: '230100', type: 'district', pinyin: 'bin xian', py: 'bx', prefix: 'b',
  },
  {
    id: 230126, name: '巴彦县', pid: '230100', type: 'district', pinyin: 'ba yan xian', py: 'byx', prefix: 'b',
  },
  {
    id: 230127, name: '木兰县', pid: '230100', type: 'district', pinyin: 'mu lan xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 230128, name: '通河县', pid: '230100', type: 'district', pinyin: 'tong he xian', py: 'thx', prefix: 't',
  },
  {
    id: 230129, name: '延寿县', pid: '230100', type: 'district', pinyin: 'yan shou xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 230182, name: '双城市', pid: '230100', type: 'district', pinyin: 'shuang cheng shi', py: 'scs', prefix: 's',
  },
  {
    id: 230183, name: '尚志市', pid: '230100', type: 'district', pinyin: 'shang zhi shi', py: 'szs', prefix: 's',
  },
  {
    id: 230184, name: '五常市', pid: '230100', type: 'district', pinyin: 'wu chang shi', py: 'wcs', prefix: 'w',
  },
  {
    id: 230202, name: '龙沙区', pid: '230200', type: 'district', pinyin: 'long sha qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 230203, name: '建华区', pid: '230200', type: 'district', pinyin: 'jian hua qu', py: 'jhq', prefix: 'j',
  },
  {
    id: 230204, name: '铁锋区', pid: '230200', type: 'district', pinyin: 'tie feng qu', py: 'tfq', prefix: 't',
  },
  {
    id: 230205, name: '昂昂溪区', pid: '230200', type: 'district', pinyin: 'ang ang xi qu', py: 'aaxq', prefix: 'a',
  },
  {
    id: 230206, name: '富拉尔基区', pid: '230200', type: 'district', pinyin: 'fu la er ji qu', py: 'flejq', prefix: 'f',
  },
  {
    id: 230207, name: '碾子山区', pid: '230200', type: 'district', pinyin: 'nian zi shan qu', py: 'nzsq', prefix: 'n',
  },
  {
    id: 230208, name: '梅里斯达斡尔族区', pid: '230200', type: 'district', pinyin: 'mei li si da wo er zu qu', py: 'mlsdwezq', prefix: 'm',
  },
  {
    id: 230221, name: '龙江县', pid: '230200', type: 'district', pinyin: 'long jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 230223, name: '依安县', pid: '230200', type: 'district', pinyin: 'yi an xian', py: 'yax', prefix: 'y',
  },
  {
    id: 230224, name: '泰来县', pid: '230200', type: 'district', pinyin: 'tai lai xian', py: 'tlx', prefix: 't',
  },
  {
    id: 230225, name: '甘南县', pid: '230200', type: 'district', pinyin: 'gan nan xian', py: 'gnx', prefix: 'g',
  },
  {
    id: 230227, name: '富裕县', pid: '230200', type: 'district', pinyin: 'fu yu xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 230229, name: '克山县', pid: '230200', type: 'district', pinyin: 'ke shan xian', py: 'ksx', prefix: 'k',
  },
  {
    id: 230230, name: '克东县', pid: '230200', type: 'district', pinyin: 'ke dong xian', py: 'kdx', prefix: 'k',
  },
  {
    id: 230231, name: '拜泉县', pid: '230200', type: 'district', pinyin: 'bai quan xian', py: 'bqx', prefix: 'b',
  },
  {
    id: 230281, name: '讷河市', pid: '230200', type: 'district', pinyin: 'ne he shi', py: 'nhs', prefix: 'n',
  },
  {
    id: 230302, name: '鸡冠区', pid: '230300', type: 'district', pinyin: 'ji guan qu', py: 'jgq', prefix: 'j',
  },
  {
    id: 230303, name: '恒山区', pid: '230300', type: 'district', pinyin: 'heng shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 230304, name: '滴道区', pid: '230300', type: 'district', pinyin: 'di dao qu', py: 'ddq', prefix: 'd',
  },
  {
    id: 230305, name: '梨树区', pid: '230300', type: 'district', pinyin: 'li shu qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 230306, name: '城子河区', pid: '230300', type: 'district', pinyin: 'cheng zi he qu', py: 'czhq', prefix: 'c',
  },
  {
    id: 230307, name: '麻山区', pid: '230300', type: 'district', pinyin: 'ma shan qu', py: 'msq', prefix: 'm',
  },
  {
    id: 230321, name: '鸡东县', pid: '230300', type: 'district', pinyin: 'ji dong xian', py: 'jdx', prefix: 'j',
  },
  {
    id: 230381, name: '虎林市', pid: '230300', type: 'district', pinyin: 'hu lin shi', py: 'hls', prefix: 'h',
  },
  {
    id: 230382, name: '密山市', pid: '230300', type: 'district', pinyin: 'mi shan shi', py: 'mss', prefix: 'm',
  },
  {
    id: 230402, name: '向阳区', pid: '230400', type: 'district', pinyin: 'xiang yang qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 230403, name: '工农区', pid: '230400', type: 'district', pinyin: 'gong nong qu', py: 'gnq', prefix: 'g',
  },
  {
    id: 230404, name: '南山区', pid: '230400', type: 'district', pinyin: 'nan shan qu', py: 'nsq', prefix: 'n',
  },
  {
    id: 230405, name: '兴安区', pid: '230400', type: 'district', pinyin: 'xing an qu', py: 'xaq', prefix: 'x',
  },
  {
    id: 230406, name: '东山区', pid: '230400', type: 'district', pinyin: 'dong shan qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 230407, name: '兴山区', pid: '230400', type: 'district', pinyin: 'xing shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 230421, name: '萝北县', pid: '230400', type: 'district', pinyin: 'luo bei xian', py: 'lbx', prefix: 'l',
  },
  {
    id: 230422, name: '绥滨县', pid: '230400', type: 'district', pinyin: 'sui bin xian', py: 'sbx', prefix: 's',
  },
  {
    id: 230502, name: '尖山区', pid: '230500', type: 'district', pinyin: 'jian shan qu', py: 'jsq', prefix: 'j',
  },
  {
    id: 230503, name: '岭东区', pid: '230500', type: 'district', pinyin: 'ling dong qu', py: 'ldq', prefix: 'l',
  },
  {
    id: 230505, name: '四方台区', pid: '230500', type: 'district', pinyin: 'si fang tai qu', py: 'sftq', prefix: 's',
  },
  {
    id: 230506, name: '宝山区', pid: '230500', type: 'district', pinyin: 'bao shan qu', py: 'bsq', prefix: 'b',
  },
  {
    id: 230521, name: '集贤县', pid: '230500', type: 'district', pinyin: 'ji xian xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 230522, name: '友谊县', pid: '230500', type: 'district', pinyin: 'you yi xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 230523, name: '宝清县', pid: '230500', type: 'district', pinyin: 'bao qing xian', py: 'bqx', prefix: 'b',
  },
  {
    id: 230524, name: '饶河县', pid: '230500', type: 'district', pinyin: 'rao he xian', py: 'rhx', prefix: 'r',
  },
  {
    id: 230602, name: '萨尔图区', pid: '230600', type: 'district', pinyin: 'sa er tu qu', py: 'setq', prefix: 's',
  },
  {
    id: 230603, name: '龙凤区', pid: '230600', type: 'district', pinyin: 'long feng qu', py: 'lfq', prefix: 'l',
  },
  {
    id: 230604, name: '让胡路区', pid: '230600', type: 'district', pinyin: 'rang hu lu qu', py: 'rhlq', prefix: 'r',
  },
  {
    id: 230605, name: '红岗区', pid: '230600', type: 'district', pinyin: 'hong gang qu', py: 'hgq', prefix: 'h',
  },
  {
    id: 230606, name: '大同区', pid: '230600', type: 'district', pinyin: 'da tong qu', py: 'dtq', prefix: 'd',
  },
  {
    id: 230621, name: '肇州县', pid: '230600', type: 'district', pinyin: 'zhao zhou xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 230622, name: '肇源县', pid: '230600', type: 'district', pinyin: 'zhao yuan xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 230623, name: '林甸县', pid: '230600', type: 'district', pinyin: 'lin dian xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 230624, name: '杜尔伯特蒙古族自治县', pid: '230600', type: 'district', pinyin: 'du er bo te meng gu zu zi zhi xian', py: 'debtmgzzzx', prefix: 'd',
  },
  {
    id: 230702, name: '伊春区', pid: '230700', type: 'district', pinyin: 'yi chun qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 230703, name: '南岔区', pid: '230700', type: 'district', pinyin: 'nan cha qu', py: 'ncq', prefix: 'n',
  },
  {
    id: 230704, name: '友好区', pid: '230700', type: 'district', pinyin: 'you hao qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 230705, name: '西林区', pid: '230700', type: 'district', pinyin: 'xi lin qu', py: 'xlq', prefix: 'x',
  },
  {
    id: 230706, name: '翠峦区', pid: '230700', type: 'district', pinyin: 'cui luan qu', py: 'clq', prefix: 'c',
  },
  {
    id: 230707, name: '新青区', pid: '230700', type: 'district', pinyin: 'xin qing qu', py: 'xqq', prefix: 'x',
  },
  {
    id: 230708, name: '美溪区', pid: '230700', type: 'district', pinyin: 'mei xi qu', py: 'mxq', prefix: 'm',
  },
  {
    id: 230709, name: '金山屯区', pid: '230700', type: 'district', pinyin: 'jin shan tun qu', py: 'jstq', prefix: 'j',
  },
  {
    id: 230710, name: '五营区', pid: '230700', type: 'district', pinyin: 'wu ying qu', py: 'wyq', prefix: 'w',
  },
  {
    id: 230711, name: '乌马河区', pid: '230700', type: 'district', pinyin: 'wu ma he qu', py: 'wmhq', prefix: 'w',
  },
  {
    id: 230712, name: '汤旺河区', pid: '230700', type: 'district', pinyin: 'tang wang he qu', py: 'twhq', prefix: 't',
  },
  {
    id: 230713, name: '带岭区', pid: '230700', type: 'district', pinyin: 'dai ling qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 230714, name: '乌伊岭区', pid: '230700', type: 'district', pinyin: 'wu yi ling qu', py: 'wylq', prefix: 'w',
  },
  {
    id: 230715, name: '红星区', pid: '230700', type: 'district', pinyin: 'hong xing qu', py: 'hxq', prefix: 'h',
  },
  {
    id: 230716, name: '上甘岭区', pid: '230700', type: 'district', pinyin: 'shang gan ling qu', py: 'sglq', prefix: 's',
  },
  {
    id: 230722, name: '嘉荫县', pid: '230700', type: 'district', pinyin: 'jia yin xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 230781, name: '铁力市', pid: '230700', type: 'district', pinyin: 'tie li shi', py: 'tls', prefix: 't',
  },
  {
    id: 230803, name: '向阳区', pid: '230800', type: 'district', pinyin: 'xiang yang qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 230804, name: '前进区', pid: '230800', type: 'district', pinyin: 'qian jin qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 230805, name: '东风区', pid: '230800', type: 'district', pinyin: 'dong feng qu', py: 'dfq', prefix: 'd',
  },
  {
    id: 230811, name: '郊区', pid: '230800', type: 'district', pinyin: 'jiao qu', py: 'jq', prefix: 'j',
  },
  {
    id: 230822, name: '桦南县', pid: '230800', type: 'district', pinyin: 'hua nan xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 230826, name: '桦川县', pid: '230800', type: 'district', pinyin: 'hua chuan xian', py: 'hcx', prefix: 'h',
  },
  {
    id: 230828, name: '汤原县', pid: '230800', type: 'district', pinyin: 'tang yuan xian', py: 'tyx', prefix: 't',
  },
  {
    id: 230833, name: '抚远县', pid: '230800', type: 'district', pinyin: 'fu yuan xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 230881, name: '同江市', pid: '230800', type: 'district', pinyin: 'tong jiang shi', py: 'tjs', prefix: 't',
  },
  {
    id: 230882, name: '富锦市', pid: '230800', type: 'district', pinyin: 'fu jin shi', py: 'fjs', prefix: 'f',
  },
  {
    id: 230902, name: '新兴区', pid: '230900', type: 'district', pinyin: 'xin xing qu', py: 'xxq', prefix: 'x',
  },
  {
    id: 230903, name: '桃山区', pid: '230900', type: 'district', pinyin: 'tao shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 230904, name: '茄子河区', pid: '230900', type: 'district', pinyin: 'qie zi he qu', py: 'qzhq', prefix: 'q',
  },
  {
    id: 230921, name: '勃利县', pid: '230900', type: 'district', pinyin: 'bo li xian', py: 'blx', prefix: 'b',
  },
  {
    id: 231002, name: '东安区', pid: '231000', type: 'district', pinyin: 'dong an qu', py: 'daq', prefix: 'd',
  },
  {
    id: 231003, name: '阳明区', pid: '231000', type: 'district', pinyin: 'yang ming qu', py: 'ymq', prefix: 'y',
  },
  {
    id: 231004, name: '爱民区', pid: '231000', type: 'district', pinyin: 'ai min qu', py: 'amq', prefix: 'a',
  },
  {
    id: 231005, name: '西安区', pid: '231000', type: 'district', pinyin: 'xi an qu', py: 'xaq', prefix: 'x',
  },
  {
    id: 231024, name: '东宁县', pid: '231000', type: 'district', pinyin: 'dong ning xian', py: 'dnx', prefix: 'd',
  },
  {
    id: 231025, name: '林口县', pid: '231000', type: 'district', pinyin: 'lin kou xian', py: 'lkx', prefix: 'l',
  },
  {
    id: 231081, name: '绥芬河市', pid: '231000', type: 'district', pinyin: 'sui fen he shi', py: 'sfhs', prefix: 's',
  },
  {
    id: 231083, name: '海林市', pid: '231000', type: 'district', pinyin: 'hai lin shi', py: 'hls', prefix: 'h',
  },
  {
    id: 231084, name: '宁安市', pid: '231000', type: 'district', pinyin: 'ning an shi', py: 'nas', prefix: 'n',
  },
  {
    id: 231085, name: '穆棱市', pid: '231000', type: 'district', pinyin: 'mu leng shi', py: 'mls', prefix: 'm',
  },
  {
    id: 231102, name: '爱辉区', pid: '231100', type: 'district', pinyin: 'ai hui qu', py: 'ahq', prefix: 'a',
  },
  {
    id: 231121, name: '嫩江县', pid: '231100', type: 'district', pinyin: 'nen jiang xian', py: 'njx', prefix: 'n',
  },
  {
    id: 231123, name: '逊克县', pid: '231100', type: 'district', pinyin: 'xun ke xian', py: 'xkx', prefix: 'x',
  },
  {
    id: 231124, name: '孙吴县', pid: '231100', type: 'district', pinyin: 'sun wu xian', py: 'swx', prefix: 's',
  },
  {
    id: 231181, name: '北安市', pid: '231100', type: 'district', pinyin: 'bei an shi', py: 'bas', prefix: 'b',
  },
  {
    id: 231182, name: '五大连池市', pid: '231100', type: 'district', pinyin: 'wu da lian chi shi', py: 'wdlcs', prefix: 'w',
  },
  {
    id: 231202, name: '北林区', pid: '231200', type: 'district', pinyin: 'bei lin qu', py: 'blq', prefix: 'b',
  },
  {
    id: 231221, name: '望奎县', pid: '231200', type: 'district', pinyin: 'wang kui xian', py: 'wkx', prefix: 'w',
  },
  {
    id: 231222, name: '兰西县', pid: '231200', type: 'district', pinyin: 'lan xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 231223, name: '青冈县', pid: '231200', type: 'district', pinyin: 'qing gang xian', py: 'qgx', prefix: 'q',
  },
  {
    id: 231224, name: '庆安县', pid: '231200', type: 'district', pinyin: 'qing an xian', py: 'qax', prefix: 'q',
  },
  {
    id: 231225, name: '明水县', pid: '231200', type: 'district', pinyin: 'ming shui xian', py: 'msx', prefix: 'm',
  },
  {
    id: 231226, name: '绥棱县', pid: '231200', type: 'district', pinyin: 'sui leng xian', py: 'slx', prefix: 's',
  },
  {
    id: 231281, name: '安达市', pid: '231200', type: 'district', pinyin: 'an da shi', py: 'ads', prefix: 'a',
  },
  {
    id: 231282, name: '肇东市', pid: '231200', type: 'district', pinyin: 'zhao dong shi', py: 'zds', prefix: 'z',
  },
  {
    id: 231283, name: '海伦市', pid: '231200', type: 'district', pinyin: 'hai lun shi', py: 'hls', prefix: 'h',
  },
  {
    id: 232721, name: '呼玛县', pid: '232700', type: 'district', pinyin: 'hu ma xian', py: 'hmx', prefix: 'h',
  },
  {
    id: 232722, name: '塔河县', pid: '232700', type: 'district', pinyin: 'ta he xian', py: 'thx', prefix: 't',
  },
  {
    id: 232723, name: '漠河县', pid: '232700', type: 'district', pinyin: 'mo he xian', py: 'mhx', prefix: 'm',
  },
  {
    id: 310101, name: '黄浦区', pid: '310100', type: 'district', pinyin: 'huang pu qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 310104, name: '徐汇区', pid: '310100', type: 'district', pinyin: 'xu hui qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 310105, name: '长宁区', pid: '310100', type: 'district', pinyin: 'chang ning qu', py: 'cnq', prefix: 'c',
  },
  {
    id: 310106, name: '静安区', pid: '310100', type: 'district', pinyin: 'jing an qu', py: 'jaq', prefix: 'j',
  },
  {
    id: 310107, name: '普陀区', pid: '310100', type: 'district', pinyin: 'pu tuo qu', py: 'ptq', prefix: 'p',
  },
  {
    id: 310108, name: '闸北区', pid: '310100', type: 'district', pinyin: 'zha bei qu', py: 'zbq', prefix: 'z',
  },
  {
    id: 310109, name: '虹口区', pid: '310100', type: 'district', pinyin: 'hong kou qu', py: 'hkq', prefix: 'h',
  },
  {
    id: 310110, name: '杨浦区', pid: '310100', type: 'district', pinyin: 'yang pu qu', py: 'ypq', prefix: 'y',
  },
  {
    id: 310112, name: '闵行区', pid: '310100', type: 'district', pinyin: 'min xing qu', py: 'mxq', prefix: 'm',
  },
  {
    id: 310113, name: '宝山区', pid: '310100', type: 'district', pinyin: 'bao shan qu', py: 'bsq', prefix: 'b',
  },
  {
    id: 310114, name: '嘉定区', pid: '310100', type: 'district', pinyin: 'jia ding qu', py: 'jdq', prefix: 'j',
  },
  {
    id: 310115, name: '浦东新区', pid: '310100', type: 'district', pinyin: 'pu dong xin qu', py: 'pdxq', prefix: 'p',
  },
  {
    id: 310116, name: '金山区', pid: '310100', type: 'district', pinyin: 'jin shan qu', py: 'jsq', prefix: 'j',
  },
  {
    id: 310117, name: '松江区', pid: '310100', type: 'district', pinyin: 'song jiang qu', py: 'sjq', prefix: 's',
  },
  {
    id: 310118, name: '青浦区', pid: '310100', type: 'district', pinyin: 'qing pu qu', py: 'qpq', prefix: 'q',
  },
  {
    id: 310120, name: '奉贤区', pid: '310100', type: 'district', pinyin: 'feng xian qu', py: 'fxq', prefix: 'f',
  },
  {
    id: 310230, name: '崇明县', pid: '310200', type: 'district', pinyin: 'chong ming xian', py: 'cmx', prefix: 'c',
  },
  {
    id: 320102, name: '玄武区', pid: '320100', type: 'district', pinyin: 'xuan wu qu', py: 'xwq', prefix: 'x',
  },
  {
    id: 320104, name: '秦淮区', pid: '320100', type: 'district', pinyin: 'qin huai qu', py: 'qhq', prefix: 'q',
  },
  {
    id: 320105, name: '建邺区', pid: '320100', type: 'district', pinyin: 'jian ye qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 320106, name: '鼓楼区', pid: '320100', type: 'district', pinyin: 'gu lou qu', py: 'glq', prefix: 'g',
  },
  {
    id: 320111, name: '浦口区', pid: '320100', type: 'district', pinyin: 'pu kou qu', py: 'pkq', prefix: 'p',
  },
  {
    id: 320113, name: '栖霞区', pid: '320100', type: 'district', pinyin: 'qi xia qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 320114, name: '雨花台区', pid: '320100', type: 'district', pinyin: 'yu hua tai qu', py: 'yhtq', prefix: 'y',
  },
  {
    id: 320115, name: '江宁区', pid: '320100', type: 'district', pinyin: 'jiang ning qu', py: 'jnq', prefix: 'j',
  },
  {
    id: 320116, name: '六合区', pid: '320100', type: 'district', pinyin: 'liu he qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 320117, name: '溧水区', pid: '320100', type: 'district', pinyin: 'li shui qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 320118, name: '高淳区', pid: '320100', type: 'district', pinyin: 'gao chun qu', py: 'gcq', prefix: 'g',
  },
  {
    id: 320202, name: '崇安区', pid: '320200', type: 'district', pinyin: 'chong an qu', py: 'caq', prefix: 'c',
  },
  {
    id: 320203, name: '南长区', pid: '320200', type: 'district', pinyin: 'nan chang qu', py: 'ncq', prefix: 'c',
  },
  {
    id: 320204, name: '北塘区', pid: '320200', type: 'district', pinyin: 'bei tang qu', py: 'btq', prefix: 'b',
  },
  {
    id: 320205, name: '锡山区', pid: '320200', type: 'district', pinyin: 'xi shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 320206, name: '惠山区', pid: '320200', type: 'district', pinyin: 'hui shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 320211, name: '滨湖区', pid: '320200', type: 'district', pinyin: 'bin hu qu', py: 'bhq', prefix: 'b',
  },
  {
    id: 320281, name: '江阴市', pid: '320200', type: 'district', pinyin: 'jiang yin shi', py: 'jys', prefix: 'j',
  },
  {
    id: 320282, name: '宜兴市', pid: '320200', type: 'district', pinyin: 'yi xing shi', py: 'yxs', prefix: 'y',
  },
  {
    id: 320302, name: '鼓楼区', pid: '320300', type: 'district', pinyin: 'gu lou qu', py: 'glq', prefix: 'g',
  },
  {
    id: 320303, name: '云龙区', pid: '320300', type: 'district', pinyin: 'yun long qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 320305, name: '贾汪区', pid: '320300', type: 'district', pinyin: 'jia wang qu', py: 'jwq', prefix: 'j',
  },
  {
    id: 320311, name: '泉山区', pid: '320300', type: 'district', pinyin: 'quan shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 320312, name: '铜山区', pid: '320300', type: 'district', pinyin: 'tong shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 320321, name: '丰县', pid: '320300', type: 'district', pinyin: 'feng xian', py: 'fx', prefix: 'f',
  },
  {
    id: 320322, name: '沛县', pid: '320300', type: 'district', pinyin: 'pei xian', py: 'px', prefix: 'p',
  },
  {
    id: 320324, name: '睢宁县', pid: '320300', type: 'district', pinyin: 'sui ning xian', py: 'snx', prefix: 's',
  },
  {
    id: 320381, name: '新沂市', pid: '320300', type: 'district', pinyin: 'xin yi shi', py: 'xys', prefix: 'x',
  },
  {
    id: 320382, name: '邳州市', pid: '320300', type: 'district', pinyin: 'pi zhou shi', py: 'pzs', prefix: 'p',
  },
  {
    id: 320402, name: '天宁区', pid: '320400', type: 'district', pinyin: 'tian ning qu', py: 'tnq', prefix: 't',
  },
  {
    id: 320404, name: '钟楼区', pid: '320400', type: 'district', pinyin: 'zhong lou qu', py: 'zlq', prefix: 'z',
  },
  {
    id: 320405, name: '戚墅堰区', pid: '320400', type: 'district', pinyin: 'qi shu yan qu', py: 'qsyq', prefix: 'q',
  },
  {
    id: 320411, name: '新北区', pid: '320400', type: 'district', pinyin: 'xin bei qu', py: 'xbq', prefix: 'x',
  },
  {
    id: 320412, name: '武进区', pid: '320400', type: 'district', pinyin: 'wu jin qu', py: 'wjq', prefix: 'w',
  },
  {
    id: 320481, name: '溧阳市', pid: '320400', type: 'district', pinyin: 'li yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 320482, name: '金坛市', pid: '320400', type: 'district', pinyin: 'jin tan shi', py: 'jts', prefix: 'j',
  },
  {
    id: 320505, name: '高新区', pid: '320500', type: 'district', pinyin: 'gao xin qu', py: 'gxq', prefix: 'g',
  },
  {
    id: 320506, name: '吴中区', pid: '320500', type: 'district', pinyin: 'wu zhong qu', py: 'wzq', prefix: 'w',
  },
  {
    id: 320507, name: '相城区', pid: '320500', type: 'district', pinyin: 'xiang cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 320508, name: '姑苏区', pid: '320500', type: 'district', pinyin: 'gu su qu', py: 'gsq', prefix: 'g',
  },
  {
    id: 320510, name: '工业园区', pid: '320500', type: 'district', pinyin: 'gong ye yuan qu', py: 'gyyq', prefix: 'g',
  },
  {
    id: 320509, name: '吴江区', pid: '320500', type: 'district', pinyin: 'wu jiang qu', py: 'wjq', prefix: 'w',
  },
  {
    id: 320581, name: '常熟市', pid: '320500', type: 'district', pinyin: 'chang shu shi', py: 'css', prefix: 'c',
  },
  {
    id: 320582, name: '张家港市', pid: '320500', type: 'district', pinyin: 'zhang jia gang shi', py: 'zjgs', prefix: 'z',
  },
  {
    id: 320583, name: '昆山市', pid: '320500', type: 'district', pinyin: 'kun shan shi', py: 'kss', prefix: 'k',
  },
  {
    id: 320585, name: '太仓市', pid: '320500', type: 'district', pinyin: 'tai cang shi', py: 'tcs', prefix: 't',
  },
  {
    id: 320602, name: '崇川区', pid: '320600', type: 'district', pinyin: 'chong chuan qu', py: 'ccq', prefix: 'c',
  },
  {
    id: 320611, name: '港闸区', pid: '320600', type: 'district', pinyin: 'gang zha qu', py: 'gzq', prefix: 'g',
  },
  {
    id: 320612, name: '通州区', pid: '320600', type: 'district', pinyin: 'tong zhou qu', py: 'tzq', prefix: 't',
  },
  {
    id: 320621, name: '海安县', pid: '320600', type: 'district', pinyin: 'hai an xian', py: 'hax', prefix: 'h',
  },
  {
    id: 320623, name: '如东县', pid: '320600', type: 'district', pinyin: 'ru dong xian', py: 'rdx', prefix: 'r',
  },
  {
    id: 320681, name: '启东市', pid: '320600', type: 'district', pinyin: 'qi dong shi', py: 'qds', prefix: 'q',
  },
  {
    id: 320682, name: '如皋市', pid: '320600', type: 'district', pinyin: 'ru gao shi', py: 'rgs', prefix: 'r',
  },
  {
    id: 320684, name: '海门市', pid: '320600', type: 'district', pinyin: 'hai men shi', py: 'hms', prefix: 'h',
  },
  {
    id: 320703, name: '连云区', pid: '320700', type: 'district', pinyin: 'lian yun qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 320705, name: '新浦区', pid: '320700', type: 'district', pinyin: 'xin pu qu', py: 'xpq', prefix: 'x',
  },
  {
    id: 320706, name: '海州区', pid: '320700', type: 'district', pinyin: 'hai zhou qu', py: 'hzq', prefix: 'h',
  },
  {
    id: 320721, name: '赣榆县', pid: '320700', type: 'district', pinyin: 'gan yu xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 320722, name: '东海县', pid: '320700', type: 'district', pinyin: 'dong hai xian', py: 'dhx', prefix: 'd',
  },
  {
    id: 320723, name: '灌云县', pid: '320700', type: 'district', pinyin: 'guan yun xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 320724, name: '灌南县', pid: '320700', type: 'district', pinyin: 'guan nan xian', py: 'gnx', prefix: 'g',
  },
  {
    id: 320802, name: '清河区', pid: '320800', type: 'district', pinyin: 'qing he qu', py: 'qhq', prefix: 'q',
  },
  {
    id: 320803, name: '淮安区', pid: '320800', type: 'district', pinyin: 'huai an qu', py: 'haq', prefix: 'h',
  },
  {
    id: 320804, name: '淮阴区', pid: '320800', type: 'district', pinyin: 'huai yin qu', py: 'hyq', prefix: 'h',
  },
  {
    id: 320811, name: '清浦区', pid: '320800', type: 'district', pinyin: 'qing pu qu', py: 'qpq', prefix: 'q',
  },
  {
    id: 320826, name: '涟水县', pid: '320800', type: 'district', pinyin: 'lian shui xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 320829, name: '洪泽县', pid: '320800', type: 'district', pinyin: 'hong ze xian', py: 'hzx', prefix: 'h',
  },
  {
    id: 320830, name: '盱眙县', pid: '320800', type: 'district', pinyin: 'xu yi xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 320831, name: '金湖县', pid: '320800', type: 'district', pinyin: 'jin hu xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 320902, name: '亭湖区', pid: '320900', type: 'district', pinyin: 'ting hu qu', py: 'thq', prefix: 't',
  },
  {
    id: 320903, name: '盐都区', pid: '320900', type: 'district', pinyin: 'yan dou qu', py: 'ydq', prefix: 'y',
  },
  {
    id: 320921, name: '响水县', pid: '320900', type: 'district', pinyin: 'xiang shui xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 320922, name: '滨海县', pid: '320900', type: 'district', pinyin: 'bin hai xian', py: 'bhx', prefix: 'b',
  },
  {
    id: 320923, name: '阜宁县', pid: '320900', type: 'district', pinyin: 'fu ning xian', py: 'fnx', prefix: 'f',
  },
  {
    id: 320924, name: '射阳县', pid: '320900', type: 'district', pinyin: 'she yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 320925, name: '建湖县', pid: '320900', type: 'district', pinyin: 'jian hu xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 320981, name: '东台市', pid: '320900', type: 'district', pinyin: 'dong tai shi', py: 'dts', prefix: 'd',
  },
  {
    id: 320982, name: '大丰市', pid: '320900', type: 'district', pinyin: 'da feng shi', py: 'dfs', prefix: 'd',
  },
  {
    id: 321002, name: '广陵区', pid: '321000', type: 'district', pinyin: 'guang ling qu', py: 'glq', prefix: 'g',
  },
  {
    id: 321003, name: '邗江区', pid: '321000', type: 'district', pinyin: 'han jiang qu', py: 'hjq', prefix: 'h',
  },
  {
    id: 321012, name: '江都区', pid: '321000', type: 'district', pinyin: 'jiang dou qu', py: 'jdq', prefix: 'j',
  },
  {
    id: 321023, name: '宝应县', pid: '321000', type: 'district', pinyin: 'bao ying xian', py: 'byx', prefix: 'b',
  },
  {
    id: 321081, name: '仪征市', pid: '321000', type: 'district', pinyin: 'yi zheng shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 321084, name: '高邮市', pid: '321000', type: 'district', pinyin: 'gao you shi', py: 'gys', prefix: 'g',
  },
  {
    id: 321102, name: '京口区', pid: '321100', type: 'district', pinyin: 'jing kou qu', py: 'jkq', prefix: 'j',
  },
  {
    id: 321111, name: '润州区', pid: '321100', type: 'district', pinyin: 'run zhou qu', py: 'rzq', prefix: 'r',
  },
  {
    id: 321112, name: '丹徒区', pid: '321100', type: 'district', pinyin: 'dan tu qu', py: 'dtq', prefix: 'd',
  },
  {
    id: 321181, name: '丹阳市', pid: '321100', type: 'district', pinyin: 'dan yang shi', py: 'dys', prefix: 'd',
  },
  {
    id: 321182, name: '扬中市', pid: '321100', type: 'district', pinyin: 'yang zhong shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 321183, name: '句容市', pid: '321100', type: 'district', pinyin: 'ju rong shi', py: 'jrs', prefix: 'j',
  },
  {
    id: 321202, name: '海陵区', pid: '321200', type: 'district', pinyin: 'hai ling qu', py: 'hlq', prefix: 'h',
  },
  {
    id: 321203, name: '高港区', pid: '321200', type: 'district', pinyin: 'gao gang qu', py: 'ggq', prefix: 'g',
  },
  {
    id: 321204, name: '姜堰区', pid: '321200', type: 'district', pinyin: 'jiang yan qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 321281, name: '兴化市', pid: '321200', type: 'district', pinyin: 'xing hua shi', py: 'xhs', prefix: 'x',
  },
  {
    id: 321282, name: '靖江市', pid: '321200', type: 'district', pinyin: 'jing jiang shi', py: 'jjs', prefix: 'j',
  },
  {
    id: 321283, name: '泰兴市', pid: '321200', type: 'district', pinyin: 'tai xing shi', py: 'txs', prefix: 't',
  },
  {
    id: 321302, name: '宿城区', pid: '321300', type: 'district', pinyin: 'su cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 321311, name: '宿豫区', pid: '321300', type: 'district', pinyin: 'su yu qu', py: 'syq', prefix: 's',
  },
  {
    id: 321322, name: '沭阳县', pid: '321300', type: 'district', pinyin: 'shu yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 321323, name: '泗阳县', pid: '321300', type: 'district', pinyin: 'si yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 321324, name: '泗洪县', pid: '321300', type: 'district', pinyin: 'si hong xian', py: 'shx', prefix: 's',
  },
  {
    id: 330102, name: '上城区', pid: '330100', type: 'district', pinyin: 'shang cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 330103, name: '下城区', pid: '330100', type: 'district', pinyin: 'xia cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 330104, name: '江干区', pid: '330100', type: 'district', pinyin: 'jiang gan qu', py: 'jgq', prefix: 'j',
  },
  {
    id: 330105, name: '拱墅区', pid: '330100', type: 'district', pinyin: 'gong shu qu', py: 'gsq', prefix: 'g',
  },
  {
    id: 330106, name: '西湖区', pid: '330100', type: 'district', pinyin: 'xi hu qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 330108, name: '滨江区', pid: '330100', type: 'district', pinyin: 'bin jiang qu', py: 'bjq', prefix: 'b',
  },
  {
    id: 330109, name: '萧山区', pid: '330100', type: 'district', pinyin: 'xiao shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 330110, name: '余杭区', pid: '330100', type: 'district', pinyin: 'yu hang qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 330122, name: '桐庐县', pid: '330100', type: 'district', pinyin: 'tong lu xian', py: 'tlx', prefix: 't',
  },
  {
    id: 330127, name: '淳安县', pid: '330100', type: 'district', pinyin: 'chun an xian', py: 'cax', prefix: 'c',
  },
  {
    id: 330182, name: '建德市', pid: '330100', type: 'district', pinyin: 'jian de shi', py: 'jds', prefix: 'j',
  },
  {
    id: 330183, name: '富阳市', pid: '330100', type: 'district', pinyin: 'fu yang shi', py: 'fys', prefix: 'f',
  },
  {
    id: 330185, name: '临安市', pid: '330100', type: 'district', pinyin: 'lin an shi', py: 'las', prefix: 'l',
  },
  {
    id: 330203, name: '海曙区', pid: '330200', type: 'district', pinyin: 'hai shu qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 330204, name: '江东区', pid: '330200', type: 'district', pinyin: 'jiang dong qu', py: 'jdq', prefix: 'j',
  },
  {
    id: 330205, name: '江北区', pid: '330200', type: 'district', pinyin: 'jiang bei qu', py: 'jbq', prefix: 'j',
  },
  {
    id: 330206, name: '北仑区', pid: '330200', type: 'district', pinyin: 'bei lun qu', py: 'blq', prefix: 'b',
  },
  {
    id: 330211, name: '镇海区', pid: '330200', type: 'district', pinyin: 'zhen hai qu', py: 'zhq', prefix: 'z',
  },
  {
    id: 330212, name: '鄞州区', pid: '330200', type: 'district', pinyin: 'yin zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 330225, name: '象山县', pid: '330200', type: 'district', pinyin: 'xiang shan xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 330226, name: '宁海县', pid: '330200', type: 'district', pinyin: 'ning hai xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 330281, name: '余姚市', pid: '330200', type: 'district', pinyin: 'yu yao shi', py: 'yys', prefix: 'y',
  },
  {
    id: 330282, name: '慈溪市', pid: '330200', type: 'district', pinyin: 'ci xi shi', py: 'cxs', prefix: 'c',
  },
  {
    id: 330283, name: '奉化市', pid: '330200', type: 'district', pinyin: 'feng hua shi', py: 'fhs', prefix: 'f',
  },
  {
    id: 330302, name: '鹿城区', pid: '330300', type: 'district', pinyin: 'lu cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 330303, name: '龙湾区', pid: '330300', type: 'district', pinyin: 'long wan qu', py: 'lwq', prefix: 'l',
  },
  {
    id: 330304, name: '瓯海区', pid: '330300', type: 'district', pinyin: 'ou hai qu', py: 'ohq', prefix: 'o',
  },
  {
    id: 330322, name: '洞头县', pid: '330300', type: 'district', pinyin: 'dong tou xian', py: 'dtx', prefix: 'd',
  },
  {
    id: 330324, name: '永嘉县', pid: '330300', type: 'district', pinyin: 'yong jia xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 330326, name: '平阳县', pid: '330300', type: 'district', pinyin: 'ping yang xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 330327, name: '苍南县', pid: '330300', type: 'district', pinyin: 'cang nan xian', py: 'cnx', prefix: 'c',
  },
  {
    id: 330328, name: '文成县', pid: '330300', type: 'district', pinyin: 'wen cheng xian', py: 'wcx', prefix: 'w',
  },
  {
    id: 330329, name: '泰顺县', pid: '330300', type: 'district', pinyin: 'tai shun xian', py: 'tsx', prefix: 't',
  },
  {
    id: 330381, name: '瑞安市', pid: '330300', type: 'district', pinyin: 'rui an shi', py: 'ras', prefix: 'r',
  },
  {
    id: 330382, name: '乐清市', pid: '330300', type: 'district', pinyin: 'le qing shi', py: 'lqs', prefix: 'l',
  },
  {
    id: 330402, name: '南湖区', pid: '330400', type: 'district', pinyin: 'nan hu qu', py: 'nhq', prefix: 'n',
  },
  {
    id: 330411, name: '秀洲区', pid: '330400', type: 'district', pinyin: 'xiu zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 330421, name: '嘉善县', pid: '330400', type: 'district', pinyin: 'jia shan xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 330424, name: '海盐县', pid: '330400', type: 'district', pinyin: 'hai yan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 330481, name: '海宁市', pid: '330400', type: 'district', pinyin: 'hai ning shi', py: 'hns', prefix: 'h',
  },
  {
    id: 330482, name: '平湖市', pid: '330400', type: 'district', pinyin: 'ping hu shi', py: 'phs', prefix: 'p',
  },
  {
    id: 330483, name: '桐乡市', pid: '330400', type: 'district', pinyin: 'tong xiang shi', py: 'txs', prefix: 't',
  },
  {
    id: 330502, name: '吴兴区', pid: '330500', type: 'district', pinyin: 'wu xing qu', py: 'wxq', prefix: 'w',
  },
  {
    id: 330503, name: '南浔区', pid: '330500', type: 'district', pinyin: 'nan xun qu', py: 'nxq', prefix: 'n',
  },
  {
    id: 330521, name: '德清县', pid: '330500', type: 'district', pinyin: 'de qing xian', py: 'dqx', prefix: 'd',
  },
  {
    id: 330522, name: '长兴县', pid: '330500', type: 'district', pinyin: 'chang xing xian', py: 'cxx', prefix: 'c',
  },
  {
    id: 330523, name: '安吉县', pid: '330500', type: 'district', pinyin: 'an ji xian', py: 'ajx', prefix: 'a',
  },
  {
    id: 330602, name: '越城区', pid: '330600', type: 'district', pinyin: 'yue cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 330621, name: '绍兴县', pid: '330600', type: 'district', pinyin: 'shao xing xian', py: 'sxx', prefix: 's',
  },
  {
    id: 330624, name: '新昌县', pid: '330600', type: 'district', pinyin: 'xin chang xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 330681, name: '诸暨市', pid: '330600', type: 'district', pinyin: 'zhu ji shi', py: 'zjs', prefix: 'z',
  },
  {
    id: 330682, name: '上虞市', pid: '330600', type: 'district', pinyin: 'shang yu shi', py: 'sys', prefix: 's',
  },
  {
    id: 330683, name: '嵊州市', pid: '330600', type: 'district', pinyin: 'sheng zhou shi', py: 'szs', prefix: 's',
  },
  {
    id: 330702, name: '婺城区', pid: '330700', type: 'district', pinyin: 'wu cheng qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 330703, name: '金东区', pid: '330700', type: 'district', pinyin: 'jin dong qu', py: 'jdq', prefix: 'j',
  },
  {
    id: 330723, name: '武义县', pid: '330700', type: 'district', pinyin: 'wu yi xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 330726, name: '浦江县', pid: '330700', type: 'district', pinyin: 'pu jiang xian', py: 'pjx', prefix: 'p',
  },
  {
    id: 330727, name: '磐安县', pid: '330700', type: 'district', pinyin: 'pan an xian', py: 'pax', prefix: 'p',
  },
  {
    id: 330781, name: '兰溪市', pid: '330700', type: 'district', pinyin: 'lan xi shi', py: 'lxs', prefix: 'l',
  },
  {
    id: 330782, name: '义乌市', pid: '330700', type: 'district', pinyin: 'yi wu shi', py: 'yws', prefix: 'y',
  },
  {
    id: 330783, name: '东阳市', pid: '330700', type: 'district', pinyin: 'dong yang shi', py: 'dys', prefix: 'd',
  },
  {
    id: 330784, name: '永康市', pid: '330700', type: 'district', pinyin: 'yong kang shi', py: 'yks', prefix: 'y',
  },
  {
    id: 330802, name: '柯城区', pid: '330800', type: 'district', pinyin: 'ke cheng qu', py: 'kcq', prefix: 'k',
  },
  {
    id: 330803, name: '衢江区', pid: '330800', type: 'district', pinyin: 'qu jiang qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 330822, name: '常山县', pid: '330800', type: 'district', pinyin: 'chang shan xian', py: 'csx', prefix: 'c',
  },
  {
    id: 330824, name: '开化县', pid: '330800', type: 'district', pinyin: 'kai hua xian', py: 'khx', prefix: 'k',
  },
  {
    id: 330825, name: '龙游县', pid: '330800', type: 'district', pinyin: 'long you xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 330881, name: '江山市', pid: '330800', type: 'district', pinyin: 'jiang shan shi', py: 'jss', prefix: 'j',
  },
  {
    id: 330902, name: '定海区', pid: '330900', type: 'district', pinyin: 'ding hai qu', py: 'dhq', prefix: 'd',
  },
  {
    id: 330903, name: '普陀区', pid: '330900', type: 'district', pinyin: 'pu tuo qu', py: 'ptq', prefix: 'p',
  },
  {
    id: 330921, name: '岱山县', pid: '330900', type: 'district', pinyin: 'dai shan xian', py: 'dsx', prefix: 'd',
  },
  {
    id: 330922, name: '嵊泗县', pid: '330900', type: 'district', pinyin: 'sheng si xian', py: 'ssx', prefix: 's',
  },
  {
    id: 331002, name: '椒江区', pid: '331000', type: 'district', pinyin: 'jiao jiang qu', py: 'jjq', prefix: 'j',
  },
  {
    id: 331003, name: '黄岩区', pid: '331000', type: 'district', pinyin: 'huang yan qu', py: 'hyq', prefix: 'h',
  },
  {
    id: 331004, name: '路桥区', pid: '331000', type: 'district', pinyin: 'lu qiao qu', py: 'lqq', prefix: 'l',
  },
  {
    id: 331021, name: '玉环县', pid: '331000', type: 'district', pinyin: 'yu huan xian', py: 'yhx', prefix: 'y',
  },
  {
    id: 331022, name: '三门县', pid: '331000', type: 'district', pinyin: 'san men xian', py: 'smx', prefix: 's',
  },
  {
    id: 331023, name: '天台县', pid: '331000', type: 'district', pinyin: 'tian tai xian', py: 'ttx', prefix: 't',
  },
  {
    id: 331024, name: '仙居县', pid: '331000', type: 'district', pinyin: 'xian ju xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 331081, name: '温岭市', pid: '331000', type: 'district', pinyin: 'wen ling shi', py: 'wls', prefix: 'w',
  },
  {
    id: 331082, name: '临海市', pid: '331000', type: 'district', pinyin: 'lin hai shi', py: 'lhs', prefix: 'l',
  },
  {
    id: 331102, name: '莲都区', pid: '331100', type: 'district', pinyin: 'lian dou qu', py: 'ldq', prefix: 'l',
  },
  {
    id: 331121, name: '青田县', pid: '331100', type: 'district', pinyin: 'qing tian xian', py: 'qtx', prefix: 'q',
  },
  {
    id: 331122, name: '缙云县', pid: '331100', type: 'district', pinyin: 'jin yun xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 331123, name: '遂昌县', pid: '331100', type: 'district', pinyin: 'sui chang xian', py: 'scx', prefix: 's',
  },
  {
    id: 331124, name: '松阳县', pid: '331100', type: 'district', pinyin: 'song yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 331125, name: '云和县', pid: '331100', type: 'district', pinyin: 'yun he xian', py: 'yhx', prefix: 'y',
  },
  {
    id: 331126, name: '庆元县', pid: '331100', type: 'district', pinyin: 'qing yuan xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 331127, name: '景宁畲族自治县', pid: '331100', type: 'district', pinyin: 'jing ning she zu zi zhi xian', py: 'jnszzzx', prefix: 'j',
  },
  {
    id: 331181, name: '龙泉市', pid: '331100', type: 'district', pinyin: 'long quan shi', py: 'lqs', prefix: 'l',
  },
  {
    id: 340102, name: '瑶海区', pid: '340100', type: 'district', pinyin: 'yao hai qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 340103, name: '庐阳区', pid: '340100', type: 'district', pinyin: 'lu yang qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 340104, name: '蜀山区', pid: '340100', type: 'district', pinyin: 'shu shan qu', py: 'ssq', prefix: 's',
  },
  {
    id: 340111, name: '包河区', pid: '340100', type: 'district', pinyin: 'bao he qu', py: 'bhq', prefix: 'b',
  },
  {
    id: 340121, name: '长丰县', pid: '340100', type: 'district', pinyin: 'chang feng xian', py: 'cfx', prefix: 'c',
  },
  {
    id: 340122, name: '肥东县', pid: '340100', type: 'district', pinyin: 'fei dong xian', py: 'fdx', prefix: 'f',
  },
  {
    id: 340123, name: '肥西县', pid: '340100', type: 'district', pinyin: 'fei xi xian', py: 'fxx', prefix: 'f',
  },
  {
    id: 340124, name: '庐江县', pid: '340100', type: 'district', pinyin: 'lu jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 340181, name: '巢湖市', pid: '340100', type: 'district', pinyin: 'chao hu shi', py: 'chs', prefix: 'c',
  },
  {
    id: 340202, name: '镜湖区', pid: '340200', type: 'district', pinyin: 'jing hu qu', py: 'jhq', prefix: 'j',
  },
  {
    id: 340203, name: '弋江区', pid: '340200', type: 'district', pinyin: 'yi jiang qu', py: 'yjq', prefix: 'y',
  },
  {
    id: 340207, name: '鸠江区', pid: '340200', type: 'district', pinyin: 'jiu jiang qu', py: 'jjq', prefix: 'j',
  },
  {
    id: 340208, name: '三山区', pid: '340200', type: 'district', pinyin: 'san shan qu', py: 'ssq', prefix: 's',
  },
  {
    id: 340221, name: '芜湖县', pid: '340200', type: 'district', pinyin: 'wu hu xian', py: 'whx', prefix: 'w',
  },
  {
    id: 340222, name: '繁昌县', pid: '340200', type: 'district', pinyin: 'fan chang xian', py: 'fcx', prefix: 'f',
  },
  {
    id: 340223, name: '南陵县', pid: '340200', type: 'district', pinyin: 'nan ling xian', py: 'nlx', prefix: 'n',
  },
  {
    id: 340225, name: '无为县', pid: '340200', type: 'district', pinyin: 'wu wei xian', py: 'wwx', prefix: 'w',
  },
  {
    id: 340302, name: '龙子湖区', pid: '340300', type: 'district', pinyin: 'long zi hu qu', py: 'lzhq', prefix: 'l',
  },
  {
    id: 340303, name: '蚌山区', pid: '340300', type: 'district', pinyin: 'bang shan qu', py: 'bsq', prefix: 'b',
  },
  {
    id: 340304, name: '禹会区', pid: '340300', type: 'district', pinyin: 'yu hui qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 340311, name: '淮上区', pid: '340300', type: 'district', pinyin: 'huai shang qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 340321, name: '怀远县', pid: '340300', type: 'district', pinyin: 'huai yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 340322, name: '五河县', pid: '340300', type: 'district', pinyin: 'wu he xian', py: 'whx', prefix: 'w',
  },
  {
    id: 340323, name: '固镇县', pid: '340300', type: 'district', pinyin: 'gu zhen xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 340402, name: '大通区', pid: '340400', type: 'district', pinyin: 'da tong qu', py: 'dtq', prefix: 'd',
  },
  {
    id: 340403, name: '田家庵区', pid: '340400', type: 'district', pinyin: 'tian jia an qu', py: 'tjaq', prefix: 't',
  },
  {
    id: 340404, name: '谢家集区', pid: '340400', type: 'district', pinyin: 'xie jia ji qu', py: 'xjjq', prefix: 'x',
  },
  {
    id: 340405, name: '八公山区', pid: '340400', type: 'district', pinyin: 'ba gong shan qu', py: 'bgsq', prefix: 'b',
  },
  {
    id: 340406, name: '潘集区', pid: '340400', type: 'district', pinyin: 'pan ji qu', py: 'pjq', prefix: 'p',
  },
  {
    id: 340421, name: '凤台县', pid: '340400', type: 'district', pinyin: 'feng tai xian', py: 'ftx', prefix: 'f',
  },
  {
    id: 340503, name: '花山区', pid: '340500', type: 'district', pinyin: 'hua shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 340504, name: '雨山区', pid: '340500', type: 'district', pinyin: 'yu shan qu', py: 'ysq', prefix: 'y',
  },
  {
    id: 340506, name: '博望区', pid: '340500', type: 'district', pinyin: 'bo wang qu', py: 'bwq', prefix: 'b',
  },
  {
    id: 340521, name: '当涂县', pid: '340500', type: 'district', pinyin: 'dang tu xian', py: 'dtx', prefix: 'd',
  },
  {
    id: 340522, name: '含山县', pid: '340500', type: 'district', pinyin: 'han shan xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 340523, name: '和县', pid: '340500', type: 'district', pinyin: 'he xian', py: 'hx', prefix: 'h',
  },
  {
    id: 340602, name: '杜集区', pid: '340600', type: 'district', pinyin: 'du ji qu', py: 'djq', prefix: 'd',
  },
  {
    id: 340603, name: '相山区', pid: '340600', type: 'district', pinyin: 'xiang shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 340604, name: '烈山区', pid: '340600', type: 'district', pinyin: 'lie shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 340621, name: '濉溪县', pid: '340600', type: 'district', pinyin: 'sui xi xian', py: 'sxx', prefix: 's',
  },
  {
    id: 340702, name: '铜官山区', pid: '340700', type: 'district', pinyin: 'tong guan shan qu', py: 'tgsq', prefix: 't',
  },
  {
    id: 340703, name: '狮子山区', pid: '340700', type: 'district', pinyin: 'shi zi shan qu', py: 'szsq', prefix: 's',
  },
  {
    id: 340711, name: '郊区', pid: '340700', type: 'district', pinyin: 'jiao qu', py: 'jq', prefix: 'j',
  },
  {
    id: 340721, name: '铜陵县', pid: '340700', type: 'district', pinyin: 'tong ling xian', py: 'tlx', prefix: 't',
  },
  {
    id: 340802, name: '迎江区', pid: '340800', type: 'district', pinyin: 'ying jiang qu', py: 'yjq', prefix: 'y',
  },
  {
    id: 340803, name: '大观区', pid: '340800', type: 'district', pinyin: 'da guan qu', py: 'dgq', prefix: 'd',
  },
  {
    id: 340811, name: '宜秀区', pid: '340800', type: 'district', pinyin: 'yi xiu qu', py: 'yxq', prefix: 'y',
  },
  {
    id: 340822, name: '怀宁县', pid: '340800', type: 'district', pinyin: 'huai ning xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 340823, name: '枞阳县', pid: '340800', type: 'district', pinyin: 'zong yang xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 340824, name: '潜山县', pid: '340800', type: 'district', pinyin: 'qian shan xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 340825, name: '太湖县', pid: '340800', type: 'district', pinyin: 'tai hu xian', py: 'thx', prefix: 't',
  },
  {
    id: 340826, name: '宿松县', pid: '340800', type: 'district', pinyin: 'su song xian', py: 'ssx', prefix: 's',
  },
  {
    id: 340827, name: '望江县', pid: '340800', type: 'district', pinyin: 'wang jiang xian', py: 'wjx', prefix: 'w',
  },
  {
    id: 340828, name: '岳西县', pid: '340800', type: 'district', pinyin: 'yue xi xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 340881, name: '桐城市', pid: '340800', type: 'district', pinyin: 'tong cheng shi', py: 'tcs', prefix: 't',
  },
  {
    id: 341002, name: '屯溪区', pid: '341000', type: 'district', pinyin: 'tun xi qu', py: 'txq', prefix: 't',
  },
  {
    id: 341003, name: '黄山区', pid: '341000', type: 'district', pinyin: 'huang shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 341004, name: '徽州区', pid: '341000', type: 'district', pinyin: 'hui zhou qu', py: 'hzq', prefix: 'h',
  },
  {
    id: 341021, name: '歙县', pid: '341000', type: 'district', pinyin: 'she xian', py: 'sx', prefix: 's',
  },
  {
    id: 341022, name: '休宁县', pid: '341000', type: 'district', pinyin: 'xiu ning xian', py: 'xnx', prefix: 'x',
  },
  {
    id: 341023, name: '黟县', pid: '341000', type: 'district', pinyin: 'yi xian', py: 'yx', prefix: 'y',
  },
  {
    id: 341024, name: '祁门县', pid: '341000', type: 'district', pinyin: 'qi men xian', py: 'qmx', prefix: 'q',
  },
  {
    id: 341102, name: '琅琊区', pid: '341100', type: 'district', pinyin: 'lang ya qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 341103, name: '南谯区', pid: '341100', type: 'district', pinyin: 'nan qiao qu', py: 'nqq', prefix: 'n',
  },
  {
    id: 341122, name: '来安县', pid: '341100', type: 'district', pinyin: 'lai an xian', py: 'lax', prefix: 'l',
  },
  {
    id: 341124, name: '全椒县', pid: '341100', type: 'district', pinyin: 'quan jiao xian', py: 'qjx', prefix: 'q',
  },
  {
    id: 341125, name: '定远县', pid: '341100', type: 'district', pinyin: 'ding yuan xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 341126, name: '凤阳县', pid: '341100', type: 'district', pinyin: 'feng yang xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 341181, name: '天长市', pid: '341100', type: 'district', pinyin: 'tian chang shi', py: 'tcs', prefix: 'c',
  },
  {
    id: 341182, name: '明光市', pid: '341100', type: 'district', pinyin: 'ming guang shi', py: 'mgs', prefix: 'm',
  },
  {
    id: 341202, name: '颍州区', pid: '341200', type: 'district', pinyin: 'ying zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 341203, name: '颍东区', pid: '341200', type: 'district', pinyin: 'ying dong qu', py: 'ydq', prefix: 'y',
  },
  {
    id: 341204, name: '颍泉区', pid: '341200', type: 'district', pinyin: 'ying quan qu', py: 'yqq', prefix: 'y',
  },
  {
    id: 341221, name: '临泉县', pid: '341200', type: 'district', pinyin: 'lin quan xian', py: 'lqx', prefix: 'l',
  },
  {
    id: 341222, name: '太和县', pid: '341200', type: 'district', pinyin: 'tai he xian', py: 'thx', prefix: 't',
  },
  {
    id: 341225, name: '阜南县', pid: '341200', type: 'district', pinyin: 'fu nan xian', py: 'fnx', prefix: 'f',
  },
  {
    id: 341226, name: '颍上县', pid: '341200', type: 'district', pinyin: 'ying shang xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 341282, name: '界首市', pid: '341200', type: 'district', pinyin: 'jie shou shi', py: 'jss', prefix: 'j',
  },
  {
    id: 341302, name: '埇桥区', pid: '341300', type: 'district', pinyin: 'yong qiao qu', py: 'yqq', prefix: 'y',
  },
  {
    id: 341321, name: '砀山县', pid: '341300', type: 'district', pinyin: 'dang shan xian', py: 'dsx', prefix: 'd',
  },
  {
    id: 341322, name: '萧县', pid: '341300', type: 'district', pinyin: 'xiao xian', py: 'xx', prefix: 'x',
  },
  {
    id: 341323, name: '灵璧县', pid: '341300', type: 'district', pinyin: 'ling bi xian', py: 'lbx', prefix: 'l',
  },
  {
    id: 341324, name: '泗县', pid: '341300', type: 'district', pinyin: 'si xian', py: 'sx', prefix: 's',
  },
  {
    id: 341502, name: '金安区', pid: '341500', type: 'district', pinyin: 'jin an qu', py: 'jaq', prefix: 'j',
  },
  {
    id: 341503, name: '裕安区', pid: '341500', type: 'district', pinyin: 'yu an qu', py: 'yaq', prefix: 'y',
  },
  {
    id: 341521, name: '寿县', pid: '341500', type: 'district', pinyin: 'shou xian', py: 'sx', prefix: 's',
  },
  {
    id: 341522, name: '霍邱县', pid: '341500', type: 'district', pinyin: 'huo qiu xian', py: 'hqx', prefix: 'h',
  },
  {
    id: 341523, name: '舒城县', pid: '341500', type: 'district', pinyin: 'shu cheng xian', py: 'scx', prefix: 's',
  },
  {
    id: 341524, name: '金寨县', pid: '341500', type: 'district', pinyin: 'jin zhai xian', py: 'jzx', prefix: 'j',
  },
  {
    id: 341525, name: '霍山县', pid: '341500', type: 'district', pinyin: 'huo shan xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 341602, name: '谯城区', pid: '341600', type: 'district', pinyin: 'qiao cheng qu', py: 'qcq', prefix: 'q',
  },
  {
    id: 341621, name: '涡阳县', pid: '341600', type: 'district', pinyin: 'wo yang xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 341622, name: '蒙城县', pid: '341600', type: 'district', pinyin: 'meng cheng xian', py: 'mcx', prefix: 'm',
  },
  {
    id: 341623, name: '利辛县', pid: '341600', type: 'district', pinyin: 'li xin xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 341702, name: '贵池区', pid: '341700', type: 'district', pinyin: 'gui chi qu', py: 'gcq', prefix: 'g',
  },
  {
    id: 341721, name: '东至县', pid: '341700', type: 'district', pinyin: 'dong zhi xian', py: 'dzx', prefix: 'd',
  },
  {
    id: 341722, name: '石台县', pid: '341700', type: 'district', pinyin: 'shi tai xian', py: 'stx', prefix: 's',
  },
  {
    id: 341723, name: '青阳县', pid: '341700', type: 'district', pinyin: 'qing yang xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 341802, name: '宣州区', pid: '341800', type: 'district', pinyin: 'xuan zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 341821, name: '郎溪县', pid: '341800', type: 'district', pinyin: 'lang xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 341822, name: '广德县', pid: '341800', type: 'district', pinyin: 'guang de xian', py: 'gdx', prefix: 'g',
  },
  {
    id: 341823, name: '泾县', pid: '341800', type: 'district', pinyin: 'jing xian', py: 'jx', prefix: 'j',
  },
  {
    id: 341824, name: '绩溪县', pid: '341800', type: 'district', pinyin: 'ji xi xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 341825, name: '旌德县', pid: '341800', type: 'district', pinyin: 'jing de xian', py: 'jdx', prefix: 'j',
  },
  {
    id: 341881, name: '宁国市', pid: '341800', type: 'district', pinyin: 'ning guo shi', py: 'ngs', prefix: 'n',
  },
  {
    id: 350102, name: '鼓楼区', pid: '350100', type: 'district', pinyin: 'gu lou qu', py: 'glq', prefix: 'g',
  },
  {
    id: 350103, name: '台江区', pid: '350100', type: 'district', pinyin: 'tai jiang qu', py: 'tjq', prefix: 't',
  },
  {
    id: 350104, name: '仓山区', pid: '350100', type: 'district', pinyin: 'cang shan qu', py: 'csq', prefix: 'c',
  },
  {
    id: 350105, name: '马尾区', pid: '350100', type: 'district', pinyin: 'ma wei qu', py: 'mwq', prefix: 'm',
  },
  {
    id: 350111, name: '晋安区', pid: '350100', type: 'district', pinyin: 'jin an qu', py: 'jaq', prefix: 'j',
  },
  {
    id: 350121, name: '闽侯县', pid: '350100', type: 'district', pinyin: 'min hou xian', py: 'mhx', prefix: 'm',
  },
  {
    id: 350122, name: '连江县', pid: '350100', type: 'district', pinyin: 'lian jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 350123, name: '罗源县', pid: '350100', type: 'district', pinyin: 'luo yuan xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 350124, name: '闽清县', pid: '350100', type: 'district', pinyin: 'min qing xian', py: 'mqx', prefix: 'm',
  },
  {
    id: 350125, name: '永泰县', pid: '350100', type: 'district', pinyin: 'yong tai xian', py: 'ytx', prefix: 'y',
  },
  {
    id: 350128, name: '平潭县', pid: '350100', type: 'district', pinyin: 'ping tan xian', py: 'ptx', prefix: 'p',
  },
  {
    id: 350181, name: '福清市', pid: '350100', type: 'district', pinyin: 'fu qing shi', py: 'fqs', prefix: 'f',
  },
  {
    id: 350182, name: '长乐市', pid: '350100', type: 'district', pinyin: 'chang le shi', py: 'cls', prefix: 'c',
  },
  {
    id: 350203, name: '思明区', pid: '350200', type: 'district', pinyin: 'si ming qu', py: 'smq', prefix: 's',
  },
  {
    id: 350205, name: '海沧区', pid: '350200', type: 'district', pinyin: 'hai cang qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 350206, name: '湖里区', pid: '350200', type: 'district', pinyin: 'hu li qu', py: 'hlq', prefix: 'h',
  },
  {
    id: 350211, name: '集美区', pid: '350200', type: 'district', pinyin: 'ji mei qu', py: 'jmq', prefix: 'j',
  },
  {
    id: 350212, name: '同安区', pid: '350200', type: 'district', pinyin: 'tong an qu', py: 'taq', prefix: 't',
  },
  {
    id: 350213, name: '翔安区', pid: '350200', type: 'district', pinyin: 'xiang an qu', py: 'xaq', prefix: 'x',
  },
  {
    id: 350302, name: '城厢区', pid: '350300', type: 'district', pinyin: 'cheng xiang qu', py: 'cxq', prefix: 'c',
  },
  {
    id: 350303, name: '涵江区', pid: '350300', type: 'district', pinyin: 'han jiang qu', py: 'hjq', prefix: 'h',
  },
  {
    id: 350304, name: '荔城区', pid: '350300', type: 'district', pinyin: 'li cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 350305, name: '秀屿区', pid: '350300', type: 'district', pinyin: 'xiu yu qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 350322, name: '仙游县', pid: '350300', type: 'district', pinyin: 'xian you xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 350402, name: '梅列区', pid: '350400', type: 'district', pinyin: 'mei lie qu', py: 'mlq', prefix: 'm',
  },
  {
    id: 350403, name: '三元区', pid: '350400', type: 'district', pinyin: 'san yuan qu', py: 'syq', prefix: 's',
  },
  {
    id: 350421, name: '明溪县', pid: '350400', type: 'district', pinyin: 'ming xi xian', py: 'mxx', prefix: 'm',
  },
  {
    id: 350423, name: '清流县', pid: '350400', type: 'district', pinyin: 'qing liu xian', py: 'qlx', prefix: 'q',
  },
  {
    id: 350424, name: '宁化县', pid: '350400', type: 'district', pinyin: 'ning hua xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 350425, name: '大田县', pid: '350400', type: 'district', pinyin: 'da tian xian', py: 'dtx', prefix: 'd',
  },
  {
    id: 350426, name: '尤溪县', pid: '350400', type: 'district', pinyin: 'you xi xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 350427, name: '沙县', pid: '350400', type: 'district', pinyin: 'sha xian', py: 'sx', prefix: 's',
  },
  {
    id: 350428, name: '将乐县', pid: '350400', type: 'district', pinyin: 'jiang le xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 350429, name: '泰宁县', pid: '350400', type: 'district', pinyin: 'tai ning xian', py: 'tnx', prefix: 't',
  },
  {
    id: 350430, name: '建宁县', pid: '350400', type: 'district', pinyin: 'jian ning xian', py: 'jnx', prefix: 'j',
  },
  {
    id: 350481, name: '永安市', pid: '350400', type: 'district', pinyin: 'yong an shi', py: 'yas', prefix: 'y',
  },
  {
    id: 350502, name: '鲤城区', pid: '350500', type: 'district', pinyin: 'li cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 350503, name: '丰泽区', pid: '350500', type: 'district', pinyin: 'feng ze qu', py: 'fzq', prefix: 'f',
  },
  {
    id: 350504, name: '洛江区', pid: '350500', type: 'district', pinyin: 'luo jiang qu', py: 'ljq', prefix: 'l',
  },
  {
    id: 350505, name: '泉港区', pid: '350500', type: 'district', pinyin: 'quan gang qu', py: 'qgq', prefix: 'q',
  },
  {
    id: 350521, name: '惠安县', pid: '350500', type: 'district', pinyin: 'hui an xian', py: 'hax', prefix: 'h',
  },
  {
    id: 350524, name: '安溪县', pid: '350500', type: 'district', pinyin: 'an xi xian', py: 'axx', prefix: 'a',
  },
  {
    id: 350525, name: '永春县', pid: '350500', type: 'district', pinyin: 'yong chun xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 350526, name: '德化县', pid: '350500', type: 'district', pinyin: 'de hua xian', py: 'dhx', prefix: 'd',
  },
  {
    id: 350527, name: '金门县', pid: '350500', type: 'district', pinyin: 'jin men xian', py: 'jmx', prefix: 'j',
  },
  {
    id: 350581, name: '石狮市', pid: '350500', type: 'district', pinyin: 'shi shi shi', py: 'sss', prefix: 's',
  },
  {
    id: 350582, name: '晋江市', pid: '350500', type: 'district', pinyin: 'jin jiang shi', py: 'jjs', prefix: 'j',
  },
  {
    id: 350583, name: '南安市', pid: '350500', type: 'district', pinyin: 'nan an shi', py: 'nas', prefix: 'n',
  },
  {
    id: 350602, name: '芗城区', pid: '350600', type: 'district', pinyin: 'xiang cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 350603, name: '龙文区', pid: '350600', type: 'district', pinyin: 'long wen qu', py: 'lwq', prefix: 'l',
  },
  {
    id: 350622, name: '云霄县', pid: '350600', type: 'district', pinyin: 'yun xiao xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 350623, name: '漳浦县', pid: '350600', type: 'district', pinyin: 'zhang pu xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 350624, name: '诏安县', pid: '350600', type: 'district', pinyin: 'zhao an xian', py: 'zax', prefix: 'z',
  },
  {
    id: 350625, name: '长泰县', pid: '350600', type: 'district', pinyin: 'chang tai xian', py: 'ctx', prefix: 'c',
  },
  {
    id: 350626, name: '东山县', pid: '350600', type: 'district', pinyin: 'dong shan xian', py: 'dsx', prefix: 'd',
  },
  {
    id: 350627, name: '南靖县', pid: '350600', type: 'district', pinyin: 'nan jing xian', py: 'njx', prefix: 'n',
  },
  {
    id: 350628, name: '平和县', pid: '350600', type: 'district', pinyin: 'ping he xian', py: 'phx', prefix: 'p',
  },
  {
    id: 350629, name: '华安县', pid: '350600', type: 'district', pinyin: 'hua an xian', py: 'hax', prefix: 'h',
  },
  {
    id: 350681, name: '龙海市', pid: '350600', type: 'district', pinyin: 'long hai shi', py: 'lhs', prefix: 'l',
  },
  {
    id: 350702, name: '延平区', pid: '350700', type: 'district', pinyin: 'yan ping qu', py: 'ypq', prefix: 'y',
  },
  {
    id: 350721, name: '顺昌县', pid: '350700', type: 'district', pinyin: 'shun chang xian', py: 'scx', prefix: 's',
  },
  {
    id: 350722, name: '浦城县', pid: '350700', type: 'district', pinyin: 'pu cheng xian', py: 'pcx', prefix: 'p',
  },
  {
    id: 350723, name: '光泽县', pid: '350700', type: 'district', pinyin: 'guang ze xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 350724, name: '松溪县', pid: '350700', type: 'district', pinyin: 'song xi xian', py: 'sxx', prefix: 's',
  },
  {
    id: 350725, name: '政和县', pid: '350700', type: 'district', pinyin: 'zheng he xian', py: 'zhx', prefix: 'z',
  },
  {
    id: 350781, name: '邵武市', pid: '350700', type: 'district', pinyin: 'shao wu shi', py: 'sws', prefix: 's',
  },
  {
    id: 350782, name: '武夷山市', pid: '350700', type: 'district', pinyin: 'wu yi shan shi', py: 'wyss', prefix: 'w',
  },
  {
    id: 350783, name: '建瓯市', pid: '350700', type: 'district', pinyin: 'jian ou shi', py: 'jos', prefix: 'j',
  },
  {
    id: 350784, name: '建阳市', pid: '350700', type: 'district', pinyin: 'jian yang shi', py: 'jys', prefix: 'j',
  },
  {
    id: 350802, name: '新罗区', pid: '350800', type: 'district', pinyin: 'xin luo qu', py: 'xlq', prefix: 'x',
  },
  {
    id: 350821, name: '长汀县', pid: '350800', type: 'district', pinyin: 'chang ting xian', py: 'ctx', prefix: 'c',
  },
  {
    id: 350822, name: '永定县', pid: '350800', type: 'district', pinyin: 'yong ding xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 350823, name: '上杭县', pid: '350800', type: 'district', pinyin: 'shang hang xian', py: 'shx', prefix: 's',
  },
  {
    id: 350824, name: '武平县', pid: '350800', type: 'district', pinyin: 'wu ping xian', py: 'wpx', prefix: 'w',
  },
  {
    id: 350825, name: '连城县', pid: '350800', type: 'district', pinyin: 'lian cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 350881, name: '漳平市', pid: '350800', type: 'district', pinyin: 'zhang ping shi', py: 'zps', prefix: 'z',
  },
  {
    id: 350902, name: '蕉城区', pid: '350900', type: 'district', pinyin: 'jiao cheng qu', py: 'jcq', prefix: 'j',
  },
  {
    id: 350921, name: '霞浦县', pid: '350900', type: 'district', pinyin: 'xia pu xian', py: 'xpx', prefix: 'x',
  },
  {
    id: 350922, name: '古田县', pid: '350900', type: 'district', pinyin: 'gu tian xian', py: 'gtx', prefix: 'g',
  },
  {
    id: 350923, name: '屏南县', pid: '350900', type: 'district', pinyin: 'ping nan xian', py: 'pnx', prefix: 'p',
  },
  {
    id: 350924, name: '寿宁县', pid: '350900', type: 'district', pinyin: 'shou ning xian', py: 'snx', prefix: 's',
  },
  {
    id: 350925, name: '周宁县', pid: '350900', type: 'district', pinyin: 'zhou ning xian', py: 'znx', prefix: 'z',
  },
  {
    id: 350926, name: '柘荣县', pid: '350900', type: 'district', pinyin: 'zhe rong xian', py: 'zrx', prefix: 'z',
  },
  {
    id: 350981, name: '福安市', pid: '350900', type: 'district', pinyin: 'fu an shi', py: 'fas', prefix: 'f',
  },
  {
    id: 350982, name: '福鼎市', pid: '350900', type: 'district', pinyin: 'fu ding shi', py: 'fds', prefix: 'f',
  },
  {
    id: 360102, name: '东湖区', pid: '360100', type: 'district', pinyin: 'dong hu qu', py: 'dhq', prefix: 'd',
  },
  {
    id: 360103, name: '西湖区', pid: '360100', type: 'district', pinyin: 'xi hu qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 360104, name: '青云谱区', pid: '360100', type: 'district', pinyin: 'qing yun pu qu', py: 'qypq', prefix: 'q',
  },
  {
    id: 360105, name: '湾里区', pid: '360100', type: 'district', pinyin: 'wan li qu', py: 'wlq', prefix: 'w',
  },
  {
    id: 360111, name: '青山湖区', pid: '360100', type: 'district', pinyin: 'qing shan hu qu', py: 'qshq', prefix: 'q',
  },
  {
    id: 360121, name: '南昌县', pid: '360100', type: 'district', pinyin: 'nan chang xian', py: 'ncx', prefix: 'n',
  },
  {
    id: 360122, name: '新建县', pid: '360100', type: 'district', pinyin: 'xin jian xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 360123, name: '安义县', pid: '360100', type: 'district', pinyin: 'an yi xian', py: 'ayx', prefix: 'a',
  },
  {
    id: 360124, name: '进贤县', pid: '360100', type: 'district', pinyin: 'jin xian xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 360202, name: '昌江区', pid: '360200', type: 'district', pinyin: 'chang jiang qu', py: 'cjq', prefix: 'c',
  },
  {
    id: 360203, name: '珠山区', pid: '360200', type: 'district', pinyin: 'zhu shan qu', py: 'zsq', prefix: 'z',
  },
  {
    id: 360222, name: '浮梁县', pid: '360200', type: 'district', pinyin: 'fu liang xian', py: 'flx', prefix: 'f',
  },
  {
    id: 360281, name: '乐平市', pid: '360200', type: 'district', pinyin: 'le ping shi', py: 'lps', prefix: 'l',
  },
  {
    id: 360302, name: '安源区', pid: '360300', type: 'district', pinyin: 'an yuan qu', py: 'ayq', prefix: 'a',
  },
  {
    id: 360313, name: '湘东区', pid: '360300', type: 'district', pinyin: 'xiang dong qu', py: 'xdq', prefix: 'x',
  },
  {
    id: 360321, name: '莲花县', pid: '360300', type: 'district', pinyin: 'lian hua xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 360322, name: '上栗县', pid: '360300', type: 'district', pinyin: 'shang li xian', py: 'slx', prefix: 's',
  },
  {
    id: 360323, name: '芦溪县', pid: '360300', type: 'district', pinyin: 'lu xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 360402, name: '庐山区', pid: '360400', type: 'district', pinyin: 'lu shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 360403, name: '浔阳区', pid: '360400', type: 'district', pinyin: 'xun yang qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 360421, name: '九江县', pid: '360400', type: 'district', pinyin: 'jiu jiang xian', py: 'jjx', prefix: 'j',
  },
  {
    id: 360423, name: '武宁县', pid: '360400', type: 'district', pinyin: 'wu ning xian', py: 'wnx', prefix: 'w',
  },
  {
    id: 360424, name: '修水县', pid: '360400', type: 'district', pinyin: 'xiu shui xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 360425, name: '永修县', pid: '360400', type: 'district', pinyin: 'yong xiu xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 360426, name: '德安县', pid: '360400', type: 'district', pinyin: 'de an xian', py: 'dax', prefix: 'd',
  },
  {
    id: 360427, name: '星子县', pid: '360400', type: 'district', pinyin: 'xing zi xian', py: 'xzx', prefix: 'x',
  },
  {
    id: 360428, name: '都昌县', pid: '360400', type: 'district', pinyin: 'dou chang xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 360429, name: '湖口县', pid: '360400', type: 'district', pinyin: 'hu kou xian', py: 'hkx', prefix: 'h',
  },
  {
    id: 360430, name: '彭泽县', pid: '360400', type: 'district', pinyin: 'peng ze xian', py: 'pzx', prefix: 'p',
  },
  {
    id: 360481, name: '瑞昌市', pid: '360400', type: 'district', pinyin: 'rui chang shi', py: 'rcs', prefix: 'r',
  },
  {
    id: 360482, name: '共青城市', pid: '360400', type: 'district', pinyin: 'gong qing cheng shi', py: 'gqcs', prefix: 'g',
  },
  {
    id: 360502, name: '渝水区', pid: '360500', type: 'district', pinyin: 'yu shui qu', py: 'ysq', prefix: 'y',
  },
  {
    id: 360521, name: '分宜县', pid: '360500', type: 'district', pinyin: 'fen yi xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 360602, name: '月湖区', pid: '360600', type: 'district', pinyin: 'yue hu qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 360622, name: '余江县', pid: '360600', type: 'district', pinyin: 'yu jiang xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 360681, name: '贵溪市', pid: '360600', type: 'district', pinyin: 'gui xi shi', py: 'gxs', prefix: 'g',
  },
  {
    id: 360702, name: '章贡区', pid: '360700', type: 'district', pinyin: 'zhang gong qu', py: 'zgq', prefix: 'z',
  },
  {
    id: 360721, name: '赣县', pid: '360700', type: 'district', pinyin: 'gan xian', py: 'gx', prefix: 'g',
  },
  {
    id: 360722, name: '信丰县', pid: '360700', type: 'district', pinyin: 'xin feng xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 360723, name: '大余县', pid: '360700', type: 'district', pinyin: 'da yu xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 360724, name: '上犹县', pid: '360700', type: 'district', pinyin: 'shang you xian', py: 'syx', prefix: 's',
  },
  {
    id: 360725, name: '崇义县', pid: '360700', type: 'district', pinyin: 'chong yi xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 360726, name: '安远县', pid: '360700', type: 'district', pinyin: 'an yuan xian', py: 'ayx', prefix: 'a',
  },
  {
    id: 360727, name: '龙南县', pid: '360700', type: 'district', pinyin: 'long nan xian', py: 'lnx', prefix: 'l',
  },
  {
    id: 360728, name: '定南县', pid: '360700', type: 'district', pinyin: 'ding nan xian', py: 'dnx', prefix: 'd',
  },
  {
    id: 360729, name: '全南县', pid: '360700', type: 'district', pinyin: 'quan nan xian', py: 'qnx', prefix: 'q',
  },
  {
    id: 360730, name: '宁都县', pid: '360700', type: 'district', pinyin: 'ning dou xian', py: 'ndx', prefix: 'n',
  },
  {
    id: 360731, name: '于都县', pid: '360700', type: 'district', pinyin: 'yu dou xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 360732, name: '兴国县', pid: '360700', type: 'district', pinyin: 'xing guo xian', py: 'xgx', prefix: 'x',
  },
  {
    id: 360733, name: '会昌县', pid: '360700', type: 'district', pinyin: 'hui chang xian', py: 'hcx', prefix: 'h',
  },
  {
    id: 360734, name: '寻乌县', pid: '360700', type: 'district', pinyin: 'xun wu xian', py: 'xwx', prefix: 'x',
  },
  {
    id: 360735, name: '石城县', pid: '360700', type: 'district', pinyin: 'shi cheng xian', py: 'scx', prefix: 's',
  },
  {
    id: 360781, name: '瑞金市', pid: '360700', type: 'district', pinyin: 'rui jin shi', py: 'rjs', prefix: 'r',
  },
  {
    id: 360782, name: '南康市', pid: '360700', type: 'district', pinyin: 'nan kang shi', py: 'nks', prefix: 'n',
  },
  {
    id: 360802, name: '吉州区', pid: '360800', type: 'district', pinyin: 'ji zhou qu', py: 'jzq', prefix: 'j',
  },
  {
    id: 360803, name: '青原区', pid: '360800', type: 'district', pinyin: 'qing yuan qu', py: 'qyq', prefix: 'q',
  },
  {
    id: 360821, name: '吉安县', pid: '360800', type: 'district', pinyin: 'ji an xian', py: 'jax', prefix: 'j',
  },
  {
    id: 360822, name: '吉水县', pid: '360800', type: 'district', pinyin: 'ji shui xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 360823, name: '峡江县', pid: '360800', type: 'district', pinyin: 'xia jiang xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 360824, name: '新干县', pid: '360800', type: 'district', pinyin: 'xin gan xian', py: 'xgx', prefix: 'x',
  },
  {
    id: 360825, name: '永丰县', pid: '360800', type: 'district', pinyin: 'yong feng xian', py: 'yfx', prefix: 'y',
  },
  {
    id: 360826, name: '泰和县', pid: '360800', type: 'district', pinyin: 'tai he xian', py: 'thx', prefix: 't',
  },
  {
    id: 360827, name: '遂川县', pid: '360800', type: 'district', pinyin: 'sui chuan xian', py: 'scx', prefix: 's',
  },
  {
    id: 360828, name: '万安县', pid: '360800', type: 'district', pinyin: 'wan an xian', py: 'wax', prefix: 'w',
  },
  {
    id: 360829, name: '安福县', pid: '360800', type: 'district', pinyin: 'an fu xian', py: 'afx', prefix: 'a',
  },
  {
    id: 360830, name: '永新县', pid: '360800', type: 'district', pinyin: 'yong xin xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 360881, name: '井冈山市', pid: '360800', type: 'district', pinyin: 'jing gang shan shi', py: 'jgss', prefix: 'j',
  },
  {
    id: 360902, name: '袁州区', pid: '360900', type: 'district', pinyin: 'yuan zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 360921, name: '奉新县', pid: '360900', type: 'district', pinyin: 'feng xin xian', py: 'fxx', prefix: 'f',
  },
  {
    id: 360922, name: '万载县', pid: '360900', type: 'district', pinyin: 'wan zai xian', py: 'wzx', prefix: 'w',
  },
  {
    id: 360923, name: '上高县', pid: '360900', type: 'district', pinyin: 'shang gao xian', py: 'sgx', prefix: 's',
  },
  {
    id: 360924, name: '宜丰县', pid: '360900', type: 'district', pinyin: 'yi feng xian', py: 'yfx', prefix: 'y',
  },
  {
    id: 360925, name: '靖安县', pid: '360900', type: 'district', pinyin: 'jing an xian', py: 'jax', prefix: 'j',
  },
  {
    id: 360926, name: '铜鼓县', pid: '360900', type: 'district', pinyin: 'tong gu xian', py: 'tgx', prefix: 't',
  },
  {
    id: 360981, name: '丰城市', pid: '360900', type: 'district', pinyin: 'feng cheng shi', py: 'fcs', prefix: 'f',
  },
  {
    id: 360982, name: '樟树市', pid: '360900', type: 'district', pinyin: 'zhang shu shi', py: 'zss', prefix: 'z',
  },
  {
    id: 360983, name: '高安市', pid: '360900', type: 'district', pinyin: 'gao an shi', py: 'gas', prefix: 'g',
  },
  {
    id: 361002, name: '临川区', pid: '361000', type: 'district', pinyin: 'lin chuan qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 361021, name: '南城县', pid: '361000', type: 'district', pinyin: 'nan cheng xian', py: 'ncx', prefix: 'n',
  },
  {
    id: 361022, name: '黎川县', pid: '361000', type: 'district', pinyin: 'li chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 361023, name: '南丰县', pid: '361000', type: 'district', pinyin: 'nan feng xian', py: 'nfx', prefix: 'n',
  },
  {
    id: 361024, name: '崇仁县', pid: '361000', type: 'district', pinyin: 'chong ren xian', py: 'crx', prefix: 'c',
  },
  {
    id: 361025, name: '乐安县', pid: '361000', type: 'district', pinyin: 'le an xian', py: 'lax', prefix: 'l',
  },
  {
    id: 361026, name: '宜黄县', pid: '361000', type: 'district', pinyin: 'yi huang xian', py: 'yhx', prefix: 'y',
  },
  {
    id: 361027, name: '金溪县', pid: '361000', type: 'district', pinyin: 'jin xi xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 361028, name: '资溪县', pid: '361000', type: 'district', pinyin: 'zi xi xian', py: 'zxx', prefix: 'z',
  },
  {
    id: 361029, name: '东乡县', pid: '361000', type: 'district', pinyin: 'dong xiang xian', py: 'dxx', prefix: 'd',
  },
  {
    id: 361030, name: '广昌县', pid: '361000', type: 'district', pinyin: 'guang chang xian', py: 'gcx', prefix: 'g',
  },
  {
    id: 361102, name: '信州区', pid: '361100', type: 'district', pinyin: 'xin zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 361121, name: '上饶县', pid: '361100', type: 'district', pinyin: 'shang rao xian', py: 'srx', prefix: 's',
  },
  {
    id: 361122, name: '广丰县', pid: '361100', type: 'district', pinyin: 'guang feng xian', py: 'gfx', prefix: 'g',
  },
  {
    id: 361123, name: '玉山县', pid: '361100', type: 'district', pinyin: 'yu shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 361124, name: '铅山县', pid: '361100', type: 'district', pinyin: 'qian shan xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 361125, name: '横峰县', pid: '361100', type: 'district', pinyin: 'heng feng xian', py: 'hfx', prefix: 'h',
  },
  {
    id: 361126, name: '弋阳县', pid: '361100', type: 'district', pinyin: 'yi yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 361127, name: '余干县', pid: '361100', type: 'district', pinyin: 'yu gan xian', py: 'ygx', prefix: 'y',
  },
  {
    id: 361128, name: '鄱阳县', pid: '361100', type: 'district', pinyin: 'po yang xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 361129, name: '万年县', pid: '361100', type: 'district', pinyin: 'wan nian xian', py: 'wnx', prefix: 'w',
  },
  {
    id: 361130, name: '婺源县', pid: '361100', type: 'district', pinyin: 'wu yuan xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 361181, name: '德兴市', pid: '361100', type: 'district', pinyin: 'de xing shi', py: 'dxs', prefix: 'd',
  },
  {
    id: 370102, name: '历下区', pid: '370100', type: 'district', pinyin: 'li xia qu', py: 'lxq', prefix: 'l',
  },
  {
    id: 370103, name: '市中区', pid: '370100', type: 'district', pinyin: 'shi zhong qu', py: 'szq', prefix: 's',
  },
  {
    id: 370104, name: '槐荫区', pid: '370100', type: 'district', pinyin: 'huai yin qu', py: 'hyq', prefix: 'h',
  },
  {
    id: 370105, name: '天桥区', pid: '370100', type: 'district', pinyin: 'tian qiao qu', py: 'tqq', prefix: 't',
  },
  {
    id: 370112, name: '历城区', pid: '370100', type: 'district', pinyin: 'li cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 370113, name: '长清区', pid: '370100', type: 'district', pinyin: 'chang qing qu', py: 'cqq', prefix: 'c',
  },
  {
    id: 370124, name: '平阴县', pid: '370100', type: 'district', pinyin: 'ping yin xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 370125, name: '济阳县', pid: '370100', type: 'district', pinyin: 'ji yang xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 370126, name: '商河县', pid: '370100', type: 'district', pinyin: 'shang he xian', py: 'shx', prefix: 's',
  },
  {
    id: 370181, name: '章丘市', pid: '370100', type: 'district', pinyin: 'zhang qiu shi', py: 'zqs', prefix: 'z',
  },
  {
    id: 370202, name: '市南区', pid: '370200', type: 'district', pinyin: 'shi nan qu', py: 'snq', prefix: 's',
  },
  {
    id: 370203, name: '市北区', pid: '370200', type: 'district', pinyin: 'shi bei qu', py: 'sbq', prefix: 's',
  },
  {
    id: 370211, name: '黄岛区', pid: '370200', type: 'district', pinyin: 'huang dao qu', py: 'hdq', prefix: 'h',
  },
  {
    id: 370212, name: '崂山区', pid: '370200', type: 'district', pinyin: 'lao shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 370213, name: '李沧区', pid: '370200', type: 'district', pinyin: 'li cang qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 370214, name: '城阳区', pid: '370200', type: 'district', pinyin: 'cheng yang qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 370281, name: '胶州市', pid: '370200', type: 'district', pinyin: 'jiao zhou shi', py: 'jzs', prefix: 'j',
  },
  {
    id: 370282, name: '即墨市', pid: '370200', type: 'district', pinyin: 'ji mo shi', py: 'jms', prefix: 'j',
  },
  {
    id: 370283, name: '平度市', pid: '370200', type: 'district', pinyin: 'ping du shi', py: 'pds', prefix: 'p',
  },
  {
    id: 370285, name: '莱西市', pid: '370200', type: 'district', pinyin: 'lai xi shi', py: 'lxs', prefix: 'l',
  },
  {
    id: 370302, name: '淄川区', pid: '370300', type: 'district', pinyin: 'zi chuan qu', py: 'zcq', prefix: 'z',
  },
  {
    id: 370303, name: '张店区', pid: '370300', type: 'district', pinyin: 'zhang dian qu', py: 'zdq', prefix: 'z',
  },
  {
    id: 370304, name: '博山区', pid: '370300', type: 'district', pinyin: 'bo shan qu', py: 'bsq', prefix: 'b',
  },
  {
    id: 370305, name: '临淄区', pid: '370300', type: 'district', pinyin: 'lin zi qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 370306, name: '周村区', pid: '370300', type: 'district', pinyin: 'zhou cun qu', py: 'zcq', prefix: 'z',
  },
  {
    id: 370321, name: '桓台县', pid: '370300', type: 'district', pinyin: 'huan tai xian', py: 'htx', prefix: 'h',
  },
  {
    id: 370322, name: '高青县', pid: '370300', type: 'district', pinyin: 'gao qing xian', py: 'gqx', prefix: 'g',
  },
  {
    id: 370323, name: '沂源县', pid: '370300', type: 'district', pinyin: 'yi yuan xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 370402, name: '市中区', pid: '370400', type: 'district', pinyin: 'shi zhong qu', py: 'szq', prefix: 's',
  },
  {
    id: 370403, name: '薛城区', pid: '370400', type: 'district', pinyin: 'xue cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 370404, name: '峄城区', pid: '370400', type: 'district', pinyin: 'yi cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 370405, name: '台儿庄区', pid: '370400', type: 'district', pinyin: 'tai er zhuang qu', py: 'tezq', prefix: 't',
  },
  {
    id: 370406, name: '山亭区', pid: '370400', type: 'district', pinyin: 'shan ting qu', py: 'stq', prefix: 's',
  },
  {
    id: 370481, name: '滕州市', pid: '370400', type: 'district', pinyin: 'teng zhou shi', py: 'tzs', prefix: 't',
  },
  {
    id: 370502, name: '东营区', pid: '370500', type: 'district', pinyin: 'dong ying qu', py: 'dyq', prefix: 'd',
  },
  {
    id: 370503, name: '河口区', pid: '370500', type: 'district', pinyin: 'he kou qu', py: 'hkq', prefix: 'h',
  },
  {
    id: 370521, name: '垦利县', pid: '370500', type: 'district', pinyin: 'ken li xian', py: 'klx', prefix: 'k',
  },
  {
    id: 370522, name: '利津县', pid: '370500', type: 'district', pinyin: 'li jin xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 370523, name: '广饶县', pid: '370500', type: 'district', pinyin: 'guang rao xian', py: 'grx', prefix: 'g',
  },
  {
    id: 370602, name: '芝罘区', pid: '370600', type: 'district', pinyin: 'zhi fu qu', py: 'zfq', prefix: 'z',
  },
  {
    id: 370611, name: '福山区', pid: '370600', type: 'district', pinyin: 'fu shan qu', py: 'fsq', prefix: 'f',
  },
  {
    id: 370612, name: '牟平区', pid: '370600', type: 'district', pinyin: 'mou ping qu', py: 'mpq', prefix: 'm',
  },
  {
    id: 370613, name: '莱山区', pid: '370600', type: 'district', pinyin: 'lai shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 370634, name: '长岛县', pid: '370600', type: 'district', pinyin: 'chang dao xian', py: 'cdx', prefix: 'c',
  },
  {
    id: 370681, name: '龙口市', pid: '370600', type: 'district', pinyin: 'long kou shi', py: 'lks', prefix: 'l',
  },
  {
    id: 370682, name: '莱阳市', pid: '370600', type: 'district', pinyin: 'lai yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 370683, name: '莱州市', pid: '370600', type: 'district', pinyin: 'lai zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 370684, name: '蓬莱市', pid: '370600', type: 'district', pinyin: 'peng lai shi', py: 'pls', prefix: 'p',
  },
  {
    id: 370685, name: '招远市', pid: '370600', type: 'district', pinyin: 'zhao yuan shi', py: 'zys', prefix: 'z',
  },
  {
    id: 370686, name: '栖霞市', pid: '370600', type: 'district', pinyin: 'qi xia shi', py: 'qxs', prefix: 'q',
  },
  {
    id: 370687, name: '海阳市', pid: '370600', type: 'district', pinyin: 'hai yang shi', py: 'hys', prefix: 'h',
  },
  {
    id: 370702, name: '潍城区', pid: '370700', type: 'district', pinyin: 'wei cheng qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 370703, name: '寒亭区', pid: '370700', type: 'district', pinyin: 'han ting qu', py: 'htq', prefix: 'h',
  },
  {
    id: 370704, name: '坊子区', pid: '370700', type: 'district', pinyin: 'fang zi qu', py: 'fzq', prefix: 'f',
  },
  {
    id: 370705, name: '奎文区', pid: '370700', type: 'district', pinyin: 'kui wen qu', py: 'kwq', prefix: 'k',
  },
  {
    id: 370724, name: '临朐县', pid: '370700', type: 'district', pinyin: 'lin qu xian', py: 'lqx', prefix: 'l',
  },
  {
    id: 370725, name: '昌乐县', pid: '370700', type: 'district', pinyin: 'chang le xian', py: 'clx', prefix: 'c',
  },
  {
    id: 370781, name: '青州市', pid: '370700', type: 'district', pinyin: 'qing zhou shi', py: 'qzs', prefix: 'q',
  },
  {
    id: 370782, name: '诸城市', pid: '370700', type: 'district', pinyin: 'zhu cheng shi', py: 'zcs', prefix: 'z',
  },
  {
    id: 370783, name: '寿光市', pid: '370700', type: 'district', pinyin: 'shou guang shi', py: 'sgs', prefix: 's',
  },
  {
    id: 370784, name: '安丘市', pid: '370700', type: 'district', pinyin: 'an qiu shi', py: 'aqs', prefix: 'a',
  },
  {
    id: 370785, name: '高密市', pid: '370700', type: 'district', pinyin: 'gao mi shi', py: 'gms', prefix: 'g',
  },
  {
    id: 370786, name: '昌邑市', pid: '370700', type: 'district', pinyin: 'chang yi shi', py: 'cys', prefix: 'c',
  },
  {
    id: 370802, name: '市中区', pid: '370800', type: 'district', pinyin: 'shi zhong qu', py: 'szq', prefix: 's',
  },
  {
    id: 370811, name: '任城区', pid: '370800', type: 'district', pinyin: 'ren cheng qu', py: 'rcq', prefix: 'r',
  },
  {
    id: 370826, name: '微山县', pid: '370800', type: 'district', pinyin: 'wei shan xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 370827, name: '鱼台县', pid: '370800', type: 'district', pinyin: 'yu tai xian', py: 'ytx', prefix: 'y',
  },
  {
    id: 370828, name: '金乡县', pid: '370800', type: 'district', pinyin: 'jin xiang xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 370829, name: '嘉祥县', pid: '370800', type: 'district', pinyin: 'jia xiang xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 370830, name: '汶上县', pid: '370800', type: 'district', pinyin: 'wen shang xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 370831, name: '泗水县', pid: '370800', type: 'district', pinyin: 'si shui xian', py: 'ssx', prefix: 's',
  },
  {
    id: 370832, name: '梁山县', pid: '370800', type: 'district', pinyin: 'liang shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 370881, name: '曲阜市', pid: '370800', type: 'district', pinyin: 'qu fu shi', py: 'qfs', prefix: 'q',
  },
  {
    id: 370882, name: '兖州市', pid: '370800', type: 'district', pinyin: 'yan zhou shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 370883, name: '邹城市', pid: '370800', type: 'district', pinyin: 'zou cheng shi', py: 'zcs', prefix: 'z',
  },
  {
    id: 370902, name: '泰山区', pid: '370900', type: 'district', pinyin: 'tai shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 370911, name: '岱岳区', pid: '370900', type: 'district', pinyin: 'dai yue qu', py: 'dyq', prefix: 'd',
  },
  {
    id: 370921, name: '宁阳县', pid: '370900', type: 'district', pinyin: 'ning yang xian', py: 'nyx', prefix: 'n',
  },
  {
    id: 370923, name: '东平县', pid: '370900', type: 'district', pinyin: 'dong ping xian', py: 'dpx', prefix: 'd',
  },
  {
    id: 370982, name: '新泰市', pid: '370900', type: 'district', pinyin: 'xin tai shi', py: 'xts', prefix: 'x',
  },
  {
    id: 370983, name: '肥城市', pid: '370900', type: 'district', pinyin: 'fei cheng shi', py: 'fcs', prefix: 'f',
  },
  {
    id: 371002, name: '环翠区', pid: '371000', type: 'district', pinyin: 'huan cui qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 371081, name: '文登市', pid: '371000', type: 'district', pinyin: 'wen deng shi', py: 'wds', prefix: 'w',
  },
  {
    id: 371082, name: '荣成市', pid: '371000', type: 'district', pinyin: 'rong cheng shi', py: 'rcs', prefix: 'r',
  },
  {
    id: 371083, name: '乳山市', pid: '371000', type: 'district', pinyin: 'ru shan shi', py: 'rss', prefix: 'r',
  },
  {
    id: 371102, name: '东港区', pid: '371100', type: 'district', pinyin: 'dong gang qu', py: 'dgq', prefix: 'd',
  },
  {
    id: 371103, name: '岚山区', pid: '371100', type: 'district', pinyin: 'lan shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 371121, name: '五莲县', pid: '371100', type: 'district', pinyin: 'wu lian xian', py: 'wlx', prefix: 'w',
  },
  {
    id: 371122, name: '莒县', pid: '371100', type: 'district', pinyin: 'ju xian', py: 'jx', prefix: 'j',
  },
  {
    id: 371202, name: '莱城区', pid: '371200', type: 'district', pinyin: 'lai cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 371203, name: '钢城区', pid: '371200', type: 'district', pinyin: 'gang cheng qu', py: 'gcq', prefix: 'g',
  },
  {
    id: 371302, name: '兰山区', pid: '371300', type: 'district', pinyin: 'lan shan qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 371311, name: '罗庄区', pid: '371300', type: 'district', pinyin: 'luo zhuang qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 371312, name: '河东区', pid: '371300', type: 'district', pinyin: 'he dong qu', py: 'hdq', prefix: 'h',
  },
  {
    id: 371321, name: '沂南县', pid: '371300', type: 'district', pinyin: 'yi nan xian', py: 'ynx', prefix: 'y',
  },
  {
    id: 371322, name: '郯城县', pid: '371300', type: 'district', pinyin: 'tan cheng xian', py: 'tcx', prefix: 't',
  },
  {
    id: 371323, name: '沂水县', pid: '371300', type: 'district', pinyin: 'yi shui xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 371324, name: '苍山县', pid: '371300', type: 'district', pinyin: 'cang shan xian', py: 'csx', prefix: 'c',
  },
  {
    id: 371325, name: '费县', pid: '371300', type: 'district', pinyin: 'fei xian', py: 'fx', prefix: 'f',
  },
  {
    id: 371326, name: '平邑县', pid: '371300', type: 'district', pinyin: 'ping yi xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 371327, name: '莒南县', pid: '371300', type: 'district', pinyin: 'ju nan xian', py: 'jnx', prefix: 'j',
  },
  {
    id: 371328, name: '蒙阴县', pid: '371300', type: 'district', pinyin: 'meng yin xian', py: 'myx', prefix: 'm',
  },
  {
    id: 371329, name: '临沭县', pid: '371300', type: 'district', pinyin: 'lin shu xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 371402, name: '德城区', pid: '371400', type: 'district', pinyin: 'de cheng qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 371421, name: '陵县', pid: '371400', type: 'district', pinyin: 'ling xian', py: 'lx', prefix: 'l',
  },
  {
    id: 371422, name: '宁津县', pid: '371400', type: 'district', pinyin: 'ning jin xian', py: 'njx', prefix: 'n',
  },
  {
    id: 371423, name: '庆云县', pid: '371400', type: 'district', pinyin: 'qing yun xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 371424, name: '临邑县', pid: '371400', type: 'district', pinyin: 'lin yi xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 371425, name: '齐河县', pid: '371400', type: 'district', pinyin: 'qi he xian', py: 'qhx', prefix: 'q',
  },
  {
    id: 371426, name: '平原县', pid: '371400', type: 'district', pinyin: 'ping yuan xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 371427, name: '夏津县', pid: '371400', type: 'district', pinyin: 'xia jin xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 371428, name: '武城县', pid: '371400', type: 'district', pinyin: 'wu cheng xian', py: 'wcx', prefix: 'w',
  },
  {
    id: 371481, name: '乐陵市', pid: '371400', type: 'district', pinyin: 'le ling shi', py: 'lls', prefix: 'l',
  },
  {
    id: 371482, name: '禹城市', pid: '371400', type: 'district', pinyin: 'yu cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 371502, name: '东昌府区', pid: '371500', type: 'district', pinyin: 'dong chang fu qu', py: 'dcfq', prefix: 'd',
  },
  {
    id: 371521, name: '阳谷县', pid: '371500', type: 'district', pinyin: 'yang gu xian', py: 'ygx', prefix: 'y',
  },
  {
    id: 371522, name: '莘县', pid: '371500', type: 'district', pinyin: 'xin xian', py: 'xx', prefix: 'x',
  },
  {
    id: 371523, name: '茌平县', pid: '371500', type: 'district', pinyin: 'chi ping xian', py: 'cpx', prefix: 'c',
  },
  {
    id: 371524, name: '东阿县', pid: '371500', type: 'district', pinyin: 'dong a xian', py: 'dax', prefix: 'd',
  },
  {
    id: 371525, name: '冠县', pid: '371500', type: 'district', pinyin: 'guan xian', py: 'gx', prefix: 'g',
  },
  {
    id: 371526, name: '高唐县', pid: '371500', type: 'district', pinyin: 'gao tang xian', py: 'gtx', prefix: 'g',
  },
  {
    id: 371581, name: '临清市', pid: '371500', type: 'district', pinyin: 'lin qing shi', py: 'lqs', prefix: 'l',
  },
  {
    id: 371602, name: '滨城区', pid: '371600', type: 'district', pinyin: 'bin cheng qu', py: 'bcq', prefix: 'b',
  },
  {
    id: 371621, name: '惠民县', pid: '371600', type: 'district', pinyin: 'hui min xian', py: 'hmx', prefix: 'h',
  },
  {
    id: 371622, name: '阳信县', pid: '371600', type: 'district', pinyin: 'yang xin xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 371623, name: '无棣县', pid: '371600', type: 'district', pinyin: 'wu di xian', py: 'wdx', prefix: 'w',
  },
  {
    id: 371624, name: '沾化县', pid: '371600', type: 'district', pinyin: 'zhan hua xian', py: 'zhx', prefix: 'z',
  },
  {
    id: 371625, name: '博兴县', pid: '371600', type: 'district', pinyin: 'bo xing xian', py: 'bxx', prefix: 'b',
  },
  {
    id: 371626, name: '邹平县', pid: '371600', type: 'district', pinyin: 'zou ping xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 371702, name: '牡丹区', pid: '371700', type: 'district', pinyin: 'mu dan qu', py: 'mdq', prefix: 'm',
  },
  {
    id: 371721, name: '曹县', pid: '371700', type: 'district', pinyin: 'cao xian', py: 'cx', prefix: 'c',
  },
  {
    id: 371722, name: '单县', pid: '371700', type: 'district', pinyin: 'dan xian', py: 'dx', prefix: 'd',
  },
  {
    id: 371723, name: '成武县', pid: '371700', type: 'district', pinyin: 'cheng wu xian', py: 'cwx', prefix: 'c',
  },
  {
    id: 371724, name: '巨野县', pid: '371700', type: 'district', pinyin: 'ju ye xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 371725, name: '郓城县', pid: '371700', type: 'district', pinyin: 'yun cheng xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 371726, name: '鄄城县', pid: '371700', type: 'district', pinyin: 'juan cheng xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 371727, name: '定陶县', pid: '371700', type: 'district', pinyin: 'ding tao xian', py: 'dtx', prefix: 'd',
  },
  {
    id: 371728, name: '东明县', pid: '371700', type: 'district', pinyin: 'dong ming xian', py: 'dmx', prefix: 'd',
  },
  {
    id: 410102, name: '中原区', pid: '410100', type: 'district', pinyin: 'zhong yuan qu', py: 'zyq', prefix: 'z',
  },
  {
    id: 410103, name: '二七区', pid: '410100', type: 'district', pinyin: 'er qi qu', py: 'eqq', prefix: 'e',
  },
  {
    id: 410104, name: '管城回族区', pid: '410100', type: 'district', pinyin: 'guan cheng hui zu qu', py: 'gchzq', prefix: 'g',
  },
  {
    id: 410105, name: '金水区', pid: '410100', type: 'district', pinyin: 'jin shui qu', py: 'jsq', prefix: 'j',
  },
  {
    id: 410106, name: '上街区', pid: '410100', type: 'district', pinyin: 'shang jie qu', py: 'sjq', prefix: 's',
  },
  {
    id: 410108, name: '惠济区', pid: '410100', type: 'district', pinyin: 'hui ji qu', py: 'hjq', prefix: 'h',
  },
  {
    id: 410122, name: '中牟县', pid: '410100', type: 'district', pinyin: 'zhong mou xian', py: 'zmx', prefix: 'z',
  },
  {
    id: 410181, name: '巩义市', pid: '410100', type: 'district', pinyin: 'gong yi shi', py: 'gys', prefix: 'g',
  },
  {
    id: 410182, name: '荥阳市', pid: '410100', type: 'district', pinyin: 'ying yang shi', py: 'yys', prefix: 'y',
  },
  {
    id: 410183, name: '新密市', pid: '410100', type: 'district', pinyin: 'xin mi shi', py: 'xms', prefix: 'x',
  },
  {
    id: 410184, name: '新郑市', pid: '410100', type: 'district', pinyin: 'xin zheng shi', py: 'xzs', prefix: 'x',
  },
  {
    id: 410185, name: '登封市', pid: '410100', type: 'district', pinyin: 'deng feng shi', py: 'dfs', prefix: 'd',
  },
  {
    id: 410202, name: '龙亭区', pid: '410200', type: 'district', pinyin: 'long ting qu', py: 'ltq', prefix: 'l',
  },
  {
    id: 410203, name: '顺河回族区', pid: '410200', type: 'district', pinyin: 'shun he hui zu qu', py: 'shhzq', prefix: 's',
  },
  {
    id: 410204, name: '鼓楼区', pid: '410200', type: 'district', pinyin: 'gu lou qu', py: 'glq', prefix: 'g',
  },
  {
    id: 410205, name: '禹王台区', pid: '410200', type: 'district', pinyin: 'yu wang tai qu', py: 'ywtq', prefix: 'y',
  },
  {
    id: 410211, name: '金明区', pid: '410200', type: 'district', pinyin: 'jin ming qu', py: 'jmq', prefix: 'j',
  },
  {
    id: 410221, name: '杞县', pid: '410200', type: 'district', pinyin: 'qi xian', py: 'qx', prefix: 'q',
  },
  {
    id: 410222, name: '通许县', pid: '410200', type: 'district', pinyin: 'tong xu xian', py: 'txx', prefix: 't',
  },
  {
    id: 410223, name: '尉氏县', pid: '410200', type: 'district', pinyin: 'wei shi xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 410224, name: '开封县', pid: '410200', type: 'district', pinyin: 'kai feng xian', py: 'kfx', prefix: 'k',
  },
  {
    id: 410225, name: '兰考县', pid: '410200', type: 'district', pinyin: 'lan kao xian', py: 'lkx', prefix: 'l',
  },
  {
    id: 410302, name: '老城区', pid: '410300', type: 'district', pinyin: 'lao cheng qu', py: 'lcq', prefix: 'l',
  },
  {
    id: 410303, name: '西工区', pid: '410300', type: 'district', pinyin: 'xi gong qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 410304, name: '瀍河回族区', pid: '410300', type: 'district', pinyin: 'chan he hui zu qu', py: 'chhzq', prefix: 'c',
  },
  {
    id: 410305, name: '涧西区', pid: '410300', type: 'district', pinyin: 'jian xi qu', py: 'jxq', prefix: 'j',
  },
  {
    id: 410306, name: '吉利区', pid: '410300', type: 'district', pinyin: 'ji li qu', py: 'jlq', prefix: 'j',
  },
  {
    id: 410311, name: '洛龙区', pid: '410300', type: 'district', pinyin: 'luo long qu', py: 'llq', prefix: 'l',
  },
  {
    id: 410322, name: '孟津县', pid: '410300', type: 'district', pinyin: 'meng jin xian', py: 'mjx', prefix: 'm',
  },
  {
    id: 410323, name: '新安县', pid: '410300', type: 'district', pinyin: 'xin an xian', py: 'xax', prefix: 'x',
  },
  {
    id: 410324, name: '栾川县', pid: '410300', type: 'district', pinyin: 'luan chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 410325, name: '嵩县', pid: '410300', type: 'district', pinyin: 'song xian', py: 'sx', prefix: 's',
  },
  {
    id: 410326, name: '汝阳县', pid: '410300', type: 'district', pinyin: 'ru yang xian', py: 'ryx', prefix: 'r',
  },
  {
    id: 410327, name: '宜阳县', pid: '410300', type: 'district', pinyin: 'yi yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 410328, name: '洛宁县', pid: '410300', type: 'district', pinyin: 'luo ning xian', py: 'lnx', prefix: 'l',
  },
  {
    id: 410329, name: '伊川县', pid: '410300', type: 'district', pinyin: 'yi chuan xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 410381, name: '偃师市', pid: '410300', type: 'district', pinyin: 'yan shi shi', py: 'yss', prefix: 'y',
  },
  {
    id: 410402, name: '新华区', pid: '410400', type: 'district', pinyin: 'xin hua qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 410403, name: '卫东区', pid: '410400', type: 'district', pinyin: 'wei dong qu', py: 'wdq', prefix: 'w',
  },
  {
    id: 410404, name: '石龙区', pid: '410400', type: 'district', pinyin: 'shi long qu', py: 'slq', prefix: 's',
  },
  {
    id: 410411, name: '湛河区', pid: '410400', type: 'district', pinyin: 'zhan he qu', py: 'zhq', prefix: 'z',
  },
  {
    id: 410421, name: '宝丰县', pid: '410400', type: 'district', pinyin: 'bao feng xian', py: 'bfx', prefix: 'b',
  },
  {
    id: 410422, name: '叶县', pid: '410400', type: 'district', pinyin: 'ye xian', py: 'yx', prefix: 'y',
  },
  {
    id: 410423, name: '鲁山县', pid: '410400', type: 'district', pinyin: 'lu shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 410425, name: '郏县', pid: '410400', type: 'district', pinyin: 'jia xian', py: 'jx', prefix: 'j',
  },
  {
    id: 410481, name: '舞钢市', pid: '410400', type: 'district', pinyin: 'wu gang shi', py: 'wgs', prefix: 'w',
  },
  {
    id: 410482, name: '汝州市', pid: '410400', type: 'district', pinyin: 'ru zhou shi', py: 'rzs', prefix: 'r',
  },
  {
    id: 410502, name: '文峰区', pid: '410500', type: 'district', pinyin: 'wen feng qu', py: 'wfq', prefix: 'w',
  },
  {
    id: 410503, name: '北关区', pid: '410500', type: 'district', pinyin: 'bei guan qu', py: 'bgq', prefix: 'b',
  },
  {
    id: 410505, name: '殷都区', pid: '410500', type: 'district', pinyin: 'yin dou qu', py: 'ydq', prefix: 'y',
  },
  {
    id: 410506, name: '龙安区', pid: '410500', type: 'district', pinyin: 'long an qu', py: 'laq', prefix: 'l',
  },
  {
    id: 410522, name: '安阳县', pid: '410500', type: 'district', pinyin: 'an yang xian', py: 'ayx', prefix: 'a',
  },
  {
    id: 410523, name: '汤阴县', pid: '410500', type: 'district', pinyin: 'tang yin xian', py: 'tyx', prefix: 't',
  },
  {
    id: 410526, name: '滑县', pid: '410500', type: 'district', pinyin: 'hua xian', py: 'hx', prefix: 'h',
  },
  {
    id: 410527, name: '内黄县', pid: '410500', type: 'district', pinyin: 'nei huang xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 410581, name: '林州市', pid: '410500', type: 'district', pinyin: 'lin zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 410602, name: '鹤山区', pid: '410600', type: 'district', pinyin: 'he shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 410603, name: '山城区', pid: '410600', type: 'district', pinyin: 'shan cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 410611, name: '淇滨区', pid: '410600', type: 'district', pinyin: 'qi bin qu', py: 'qbq', prefix: 'q',
  },
  {
    id: 410621, name: '浚县', pid: '410600', type: 'district', pinyin: 'jun xian', py: 'jx', prefix: 'j',
  },
  {
    id: 410622, name: '淇县', pid: '410600', type: 'district', pinyin: 'qi xian', py: 'qx', prefix: 'q',
  },
  {
    id: 410702, name: '红旗区', pid: '410700', type: 'district', pinyin: 'hong qi qu', py: 'hqq', prefix: 'h',
  },
  {
    id: 410703, name: '卫滨区', pid: '410700', type: 'district', pinyin: 'wei bin qu', py: 'wbq', prefix: 'w',
  },
  {
    id: 410704, name: '凤泉区', pid: '410700', type: 'district', pinyin: 'feng quan qu', py: 'fqq', prefix: 'f',
  },
  {
    id: 410711, name: '牧野区', pid: '410700', type: 'district', pinyin: 'mu ye qu', py: 'myq', prefix: 'm',
  },
  {
    id: 410721, name: '新乡县', pid: '410700', type: 'district', pinyin: 'xin xiang xian', py: 'xxx', prefix: 'x',
  },
  {
    id: 410724, name: '获嘉县', pid: '410700', type: 'district', pinyin: 'huo jia xian', py: 'hjx', prefix: 'h',
  },
  {
    id: 410725, name: '原阳县', pid: '410700', type: 'district', pinyin: 'yuan yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 410726, name: '延津县', pid: '410700', type: 'district', pinyin: 'yan jin xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 410727, name: '封丘县', pid: '410700', type: 'district', pinyin: 'feng qiu xian', py: 'fqx', prefix: 'f',
  },
  {
    id: 410728, name: '长垣县', pid: '410700', type: 'district', pinyin: 'chang yuan xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 410781, name: '卫辉市', pid: '410700', type: 'district', pinyin: 'wei hui shi', py: 'whs', prefix: 'w',
  },
  {
    id: 410782, name: '辉县市', pid: '410700', type: 'district', pinyin: 'hui xian shi', py: 'hxs', prefix: 'h',
  },
  {
    id: 410802, name: '解放区', pid: '410800', type: 'district', pinyin: 'jie fang qu', py: 'jfq', prefix: 'j',
  },
  {
    id: 410803, name: '中站区', pid: '410800', type: 'district', pinyin: 'zhong zhan qu', py: 'zzq', prefix: 'z',
  },
  {
    id: 410804, name: '马村区', pid: '410800', type: 'district', pinyin: 'ma cun qu', py: 'mcq', prefix: 'm',
  },
  {
    id: 410811, name: '山阳区', pid: '410800', type: 'district', pinyin: 'shan yang qu', py: 'syq', prefix: 's',
  },
  {
    id: 410821, name: '修武县', pid: '410800', type: 'district', pinyin: 'xiu wu xian', py: 'xwx', prefix: 'x',
  },
  {
    id: 410822, name: '博爱县', pid: '410800', type: 'district', pinyin: 'bo ai xian', py: 'bax', prefix: 'b',
  },
  {
    id: 410823, name: '武陟县', pid: '410800', type: 'district', pinyin: 'wu zhi xian', py: 'wzx', prefix: 'w',
  },
  {
    id: 410825, name: '温县', pid: '410800', type: 'district', pinyin: 'wen xian', py: 'wx', prefix: 'w',
  },
  {
    id: 410882, name: '沁阳市', pid: '410800', type: 'district', pinyin: 'qin yang shi', py: 'qys', prefix: 'q',
  },
  {
    id: 410883, name: '孟州市', pid: '410800', type: 'district', pinyin: 'meng zhou shi', py: 'mzs', prefix: 'm',
  },
  {
    id: 410902, name: '华龙区', pid: '410900', type: 'district', pinyin: 'hua long qu', py: 'hlq', prefix: 'h',
  },
  {
    id: 410922, name: '清丰县', pid: '410900', type: 'district', pinyin: 'qing feng xian', py: 'qfx', prefix: 'q',
  },
  {
    id: 410923, name: '南乐县', pid: '410900', type: 'district', pinyin: 'nan le xian', py: 'nlx', prefix: 'n',
  },
  {
    id: 410926, name: '范县', pid: '410900', type: 'district', pinyin: 'fan xian', py: 'fx', prefix: 'f',
  },
  {
    id: 410927, name: '台前县', pid: '410900', type: 'district', pinyin: 'tai qian xian', py: 'tqx', prefix: 't',
  },
  {
    id: 410928, name: '濮阳县', pid: '410900', type: 'district', pinyin: 'pu yang xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 411002, name: '魏都区', pid: '411000', type: 'district', pinyin: 'wei dou qu', py: 'wdq', prefix: 'w',
  },
  {
    id: 411023, name: '许昌县', pid: '411000', type: 'district', pinyin: 'xu chang xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 411024, name: '鄢陵县', pid: '411000', type: 'district', pinyin: 'yan ling xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 411025, name: '襄城县', pid: '411000', type: 'district', pinyin: 'xiang cheng xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 411081, name: '禹州市', pid: '411000', type: 'district', pinyin: 'yu zhou shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 411082, name: '长葛市', pid: '411000', type: 'district', pinyin: 'chang ge shi', py: 'cgs', prefix: 'c',
  },
  {
    id: 411102, name: '源汇区', pid: '411100', type: 'district', pinyin: 'yuan hui qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 411103, name: '郾城区', pid: '411100', type: 'district', pinyin: 'yan cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 411104, name: '召陵区', pid: '411100', type: 'district', pinyin: 'zhao ling qu', py: 'zlq', prefix: 'z',
  },
  {
    id: 411121, name: '舞阳县', pid: '411100', type: 'district', pinyin: 'wu yang xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 411122, name: '临颍县', pid: '411100', type: 'district', pinyin: 'lin ying xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 411202, name: '湖滨区', pid: '411200', type: 'district', pinyin: 'hu bin qu', py: 'hbq', prefix: 'h',
  },
  {
    id: 411221, name: '渑池县', pid: '411200', type: 'district', pinyin: 'mian chi xian', py: 'mcx', prefix: 'm',
  },
  {
    id: 411222, name: '陕县', pid: '411200', type: 'district', pinyin: 'shan xian', py: 'sx', prefix: 's',
  },
  {
    id: 411224, name: '卢氏县', pid: '411200', type: 'district', pinyin: 'lu shi xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 411281, name: '义马市', pid: '411200', type: 'district', pinyin: 'yi ma shi', py: 'yms', prefix: 'y',
  },
  {
    id: 411282, name: '灵宝市', pid: '411200', type: 'district', pinyin: 'ling bao shi', py: 'lbs', prefix: 'l',
  },
  {
    id: 411302, name: '宛城区', pid: '411300', type: 'district', pinyin: 'wan cheng qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 411303, name: '卧龙区', pid: '411300', type: 'district', pinyin: 'wo long qu', py: 'wlq', prefix: 'w',
  },
  {
    id: 411321, name: '南召县', pid: '411300', type: 'district', pinyin: 'nan zhao xian', py: 'nzx', prefix: 'n',
  },
  {
    id: 411322, name: '方城县', pid: '411300', type: 'district', pinyin: 'fang cheng xian', py: 'fcx', prefix: 'f',
  },
  {
    id: 411323, name: '西峡县', pid: '411300', type: 'district', pinyin: 'xi xia xian', py: 'xxx', prefix: 'x',
  },
  {
    id: 411324, name: '镇平县', pid: '411300', type: 'district', pinyin: 'zhen ping xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 411325, name: '内乡县', pid: '411300', type: 'district', pinyin: 'nei xiang xian', py: 'nxx', prefix: 'n',
  },
  {
    id: 411326, name: '淅川县', pid: '411300', type: 'district', pinyin: 'xi chuan xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 411327, name: '社旗县', pid: '411300', type: 'district', pinyin: 'she qi xian', py: 'sqx', prefix: 's',
  },
  {
    id: 411328, name: '唐河县', pid: '411300', type: 'district', pinyin: 'tang he xian', py: 'thx', prefix: 't',
  },
  {
    id: 411329, name: '新野县', pid: '411300', type: 'district', pinyin: 'xin ye xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 411330, name: '桐柏县', pid: '411300', type: 'district', pinyin: 'tong bo xian', py: 'tbx', prefix: 't',
  },
  {
    id: 411381, name: '邓州市', pid: '411300', type: 'district', pinyin: 'deng zhou shi', py: 'dzs', prefix: 'd',
  },
  {
    id: 411402, name: '梁园区', pid: '411400', type: 'district', pinyin: 'liang yuan qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 411403, name: '睢阳区', pid: '411400', type: 'district', pinyin: 'sui yang qu', py: 'syq', prefix: 's',
  },
  {
    id: 411421, name: '民权县', pid: '411400', type: 'district', pinyin: 'min quan xian', py: 'mqx', prefix: 'm',
  },
  {
    id: 411422, name: '睢县', pid: '411400', type: 'district', pinyin: 'sui xian', py: 'sx', prefix: 's',
  },
  {
    id: 411423, name: '宁陵县', pid: '411400', type: 'district', pinyin: 'ning ling xian', py: 'nlx', prefix: 'n',
  },
  {
    id: 411424, name: '柘城县', pid: '411400', type: 'district', pinyin: 'zhe cheng xian', py: 'zcx', prefix: 'z',
  },
  {
    id: 411425, name: '虞城县', pid: '411400', type: 'district', pinyin: 'yu cheng xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 411426, name: '夏邑县', pid: '411400', type: 'district', pinyin: 'xia yi xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 411481, name: '永城市', pid: '411400', type: 'district', pinyin: 'yong cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 411502, name: '浉河区', pid: '411500', type: 'district', pinyin: 'shi he qu', py: 'shq', prefix: 's',
  },
  {
    id: 411503, name: '平桥区', pid: '411500', type: 'district', pinyin: 'ping qiao qu', py: 'pqq', prefix: 'p',
  },
  {
    id: 411521, name: '罗山县', pid: '411500', type: 'district', pinyin: 'luo shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 411522, name: '光山县', pid: '411500', type: 'district', pinyin: 'guang shan xian', py: 'gsx', prefix: 'g',
  },
  {
    id: 411523, name: '新县', pid: '411500', type: 'district', pinyin: 'xin xian', py: 'xx', prefix: 'x',
  },
  {
    id: 411524, name: '商城县', pid: '411500', type: 'district', pinyin: 'shang cheng xian', py: 'scx', prefix: 's',
  },
  {
    id: 411525, name: '固始县', pid: '411500', type: 'district', pinyin: 'gu shi xian', py: 'gsx', prefix: 'g',
  },
  {
    id: 411526, name: '潢川县', pid: '411500', type: 'district', pinyin: 'huang chuan xian', py: 'hcx', prefix: 'h',
  },
  {
    id: 411527, name: '淮滨县', pid: '411500', type: 'district', pinyin: 'huai bin xian', py: 'hbx', prefix: 'h',
  },
  {
    id: 411528, name: '息县', pid: '411500', type: 'district', pinyin: 'xi xian', py: 'xx', prefix: 'x',
  },
  {
    id: 411602, name: '川汇区', pid: '411600', type: 'district', pinyin: 'chuan hui qu', py: 'chq', prefix: 'c',
  },
  {
    id: 411621, name: '扶沟县', pid: '411600', type: 'district', pinyin: 'fu gou xian', py: 'fgx', prefix: 'f',
  },
  {
    id: 411622, name: '西华县', pid: '411600', type: 'district', pinyin: 'xi hua xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 411623, name: '商水县', pid: '411600', type: 'district', pinyin: 'shang shui xian', py: 'ssx', prefix: 's',
  },
  {
    id: 411624, name: '沈丘县', pid: '411600', type: 'district', pinyin: 'shen qiu xian', py: 'sqx', prefix: 's',
  },
  {
    id: 411625, name: '郸城县', pid: '411600', type: 'district', pinyin: 'dan cheng xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 411626, name: '淮阳县', pid: '411600', type: 'district', pinyin: 'huai yang xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 411627, name: '太康县', pid: '411600', type: 'district', pinyin: 'tai kang xian', py: 'tkx', prefix: 't',
  },
  {
    id: 411628, name: '鹿邑县', pid: '411600', type: 'district', pinyin: 'lu yi xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 411681, name: '项城市', pid: '411600', type: 'district', pinyin: 'xiang cheng shi', py: 'xcs', prefix: 'x',
  },
  {
    id: 411702, name: '驿城区', pid: '411700', type: 'district', pinyin: 'yi cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 411721, name: '西平县', pid: '411700', type: 'district', pinyin: 'xi ping xian', py: 'xpx', prefix: 'x',
  },
  {
    id: 411722, name: '上蔡县', pid: '411700', type: 'district', pinyin: 'shang cai xian', py: 'scx', prefix: 's',
  },
  {
    id: 411723, name: '平舆县', pid: '411700', type: 'district', pinyin: 'ping yu xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 411724, name: '正阳县', pid: '411700', type: 'district', pinyin: 'zheng yang xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 411725, name: '确山县', pid: '411700', type: 'district', pinyin: 'que shan xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 411726, name: '泌阳县', pid: '411700', type: 'district', pinyin: 'mi yang xian', py: 'myx', prefix: 'm',
  },
  {
    id: 411727, name: '汝南县', pid: '411700', type: 'district', pinyin: 'ru nan xian', py: 'rnx', prefix: 'r',
  },
  {
    id: 411728, name: '遂平县', pid: '411700', type: 'district', pinyin: 'sui ping xian', py: 'spx', prefix: 's',
  },
  {
    id: 411729, name: '新蔡县', pid: '411700', type: 'district', pinyin: 'xin cai xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 419001, name: '济源市', pid: '419000', type: 'district', pinyin: 'ji yuan shi', py: 'jys', prefix: 'j',
  },
  {
    id: 420102, name: '江岸区', pid: '420100', type: 'district', pinyin: 'jiang an qu', py: 'jaq', prefix: 'j',
  },
  {
    id: 420103, name: '江汉区', pid: '420100', type: 'district', pinyin: 'jiang han qu', py: 'jhq', prefix: 'j',
  },
  {
    id: 420104, name: '硚口区', pid: '420100', type: 'district', pinyin: 'qiao kou qu', py: 'qkq', prefix: 'q',
  },
  {
    id: 420105, name: '汉阳区', pid: '420100', type: 'district', pinyin: 'han yang qu', py: 'hyq', prefix: 'h',
  },
  {
    id: 420106, name: '武昌区', pid: '420100', type: 'district', pinyin: 'wu chang qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 420107, name: '青山区', pid: '420100', type: 'district', pinyin: 'qing shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 420111, name: '洪山区', pid: '420100', type: 'district', pinyin: 'hong shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 420112, name: '东西湖区', pid: '420100', type: 'district', pinyin: 'dong xi hu qu', py: 'dxhq', prefix: 'd',
  },
  {
    id: 420113, name: '汉南区', pid: '420100', type: 'district', pinyin: 'han nan qu', py: 'hnq', prefix: 'h',
  },
  {
    id: 420114, name: '蔡甸区', pid: '420100', type: 'district', pinyin: 'cai dian qu', py: 'cdq', prefix: 'c',
  },
  {
    id: 420115, name: '江夏区', pid: '420100', type: 'district', pinyin: 'jiang xia qu', py: 'jxq', prefix: 'j',
  },
  {
    id: 420116, name: '黄陂区', pid: '420100', type: 'district', pinyin: 'huang po qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 420117, name: '新洲区', pid: '420100', type: 'district', pinyin: 'xin zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 420202, name: '黄石港区', pid: '420200', type: 'district', pinyin: 'huang shi gang qu', py: 'hsgq', prefix: 'h',
  },
  {
    id: 420203, name: '西塞山区', pid: '420200', type: 'district', pinyin: 'xi sai shan qu', py: 'xssq', prefix: 'x',
  },
  {
    id: 420204, name: '下陆区', pid: '420200', type: 'district', pinyin: 'xia lu qu', py: 'xlq', prefix: 'x',
  },
  {
    id: 420205, name: '铁山区', pid: '420200', type: 'district', pinyin: 'tie shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 420222, name: '阳新县', pid: '420200', type: 'district', pinyin: 'yang xin xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 420281, name: '大冶市', pid: '420200', type: 'district', pinyin: 'da ye shi', py: 'dys', prefix: 'd',
  },
  {
    id: 420302, name: '茅箭区', pid: '420300', type: 'district', pinyin: 'mao jian qu', py: 'mjq', prefix: 'm',
  },
  {
    id: 420303, name: '张湾区', pid: '420300', type: 'district', pinyin: 'zhang wan qu', py: 'zwq', prefix: 'z',
  },
  {
    id: 420321, name: '郧县', pid: '420300', type: 'district', pinyin: 'yun xian', py: 'yx', prefix: 'y',
  },
  {
    id: 420322, name: '郧西县', pid: '420300', type: 'district', pinyin: 'yun xi xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 420323, name: '竹山县', pid: '420300', type: 'district', pinyin: 'zhu shan xian', py: 'zsx', prefix: 'z',
  },
  {
    id: 420324, name: '竹溪县', pid: '420300', type: 'district', pinyin: 'zhu xi xian', py: 'zxx', prefix: 'z',
  },
  {
    id: 420325, name: '房县', pid: '420300', type: 'district', pinyin: 'fang xian', py: 'fx', prefix: 'f',
  },
  {
    id: 420381, name: '丹江口市', pid: '420300', type: 'district', pinyin: 'dan jiang kou shi', py: 'djks', prefix: 'd',
  },
  {
    id: 420502, name: '西陵区', pid: '420500', type: 'district', pinyin: 'xi ling qu', py: 'xlq', prefix: 'x',
  },
  {
    id: 420503, name: '伍家岗区', pid: '420500', type: 'district', pinyin: 'wu jia gang qu', py: 'wjgq', prefix: 'w',
  },
  {
    id: 420504, name: '点军区', pid: '420500', type: 'district', pinyin: 'dian jun qu', py: 'djq', prefix: 'd',
  },
  {
    id: 420505, name: '猇亭区', pid: '420500', type: 'district', pinyin: 'yao ting qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 420506, name: '夷陵区', pid: '420500', type: 'district', pinyin: 'yi ling qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 420525, name: '远安县', pid: '420500', type: 'district', pinyin: 'yuan an xian', py: 'yax', prefix: 'y',
  },
  {
    id: 420526, name: '兴山县', pid: '420500', type: 'district', pinyin: 'xing shan xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 420527, name: '秭归县', pid: '420500', type: 'district', pinyin: 'zi gui xian', py: 'zgx', prefix: 'z',
  },
  {
    id: 420528, name: '长阳土家族自治县', pid: '420500', type: 'district', pinyin: 'chang yang tu jia zu zi zhi xian', py: 'cytjzzzx', prefix: 'c',
  },
  {
    id: 420529, name: '五峰土家族自治县', pid: '420500', type: 'district', pinyin: 'wu feng tu jia zu zi zhi xian', py: 'wftjzzzx', prefix: 'w',
  },
  {
    id: 420581, name: '宜都市', pid: '420500', type: 'district', pinyin: 'yi dou shi', py: 'yds', prefix: 'y',
  },
  {
    id: 420582, name: '当阳市', pid: '420500', type: 'district', pinyin: 'dang yang shi', py: 'dys', prefix: 'd',
  },
  {
    id: 420583, name: '枝江市', pid: '420500', type: 'district', pinyin: 'zhi jiang shi', py: 'zjs', prefix: 'z',
  },
  {
    id: 420602, name: '襄城区', pid: '420600', type: 'district', pinyin: 'xiang cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 420606, name: '樊城区', pid: '420600', type: 'district', pinyin: 'fan cheng qu', py: 'fcq', prefix: 'f',
  },
  {
    id: 420607, name: '襄州区', pid: '420600', type: 'district', pinyin: 'xiang zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 420624, name: '南漳县', pid: '420600', type: 'district', pinyin: 'nan zhang xian', py: 'nzx', prefix: 'n',
  },
  {
    id: 420625, name: '谷城县', pid: '420600', type: 'district', pinyin: 'gu cheng xian', py: 'gcx', prefix: 'g',
  },
  {
    id: 420626, name: '保康县', pid: '420600', type: 'district', pinyin: 'bao kang xian', py: 'bkx', prefix: 'b',
  },
  {
    id: 420682, name: '老河口市', pid: '420600', type: 'district', pinyin: 'lao he kou shi', py: 'lhks', prefix: 'l',
  },
  {
    id: 420683, name: '枣阳市', pid: '420600', type: 'district', pinyin: 'zao yang shi', py: 'zys', prefix: 'z',
  },
  {
    id: 420684, name: '宜城市', pid: '420600', type: 'district', pinyin: 'yi cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 420702, name: '梁子湖区', pid: '420700', type: 'district', pinyin: 'liang zi hu qu', py: 'lzhq', prefix: 'l',
  },
  {
    id: 420703, name: '华容区', pid: '420700', type: 'district', pinyin: 'hua rong qu', py: 'hrq', prefix: 'h',
  },
  {
    id: 420704, name: '鄂城区', pid: '420700', type: 'district', pinyin: 'e cheng qu', py: 'ecq', prefix: 'e',
  },
  {
    id: 420802, name: '东宝区', pid: '420800', type: 'district', pinyin: 'dong bao qu', py: 'dbq', prefix: 'd',
  },
  {
    id: 420804, name: '掇刀区', pid: '420800', type: 'district', pinyin: 'duo dao qu', py: 'ddq', prefix: 'd',
  },
  {
    id: 420821, name: '京山县', pid: '420800', type: 'district', pinyin: 'jing shan xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 420822, name: '沙洋县', pid: '420800', type: 'district', pinyin: 'sha yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 420881, name: '钟祥市', pid: '420800', type: 'district', pinyin: 'zhong xiang shi', py: 'zxs', prefix: 'z',
  },
  {
    id: 420902, name: '孝南区', pid: '420900', type: 'district', pinyin: 'xiao nan qu', py: 'xnq', prefix: 'x',
  },
  {
    id: 420921, name: '孝昌县', pid: '420900', type: 'district', pinyin: 'xiao chang xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 420922, name: '大悟县', pid: '420900', type: 'district', pinyin: 'da wu xian', py: 'dwx', prefix: 'd',
  },
  {
    id: 420923, name: '云梦县', pid: '420900', type: 'district', pinyin: 'yun meng xian', py: 'ymx', prefix: 'y',
  },
  {
    id: 420981, name: '应城市', pid: '420900', type: 'district', pinyin: 'ying cheng shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 420982, name: '安陆市', pid: '420900', type: 'district', pinyin: 'an lu shi', py: 'als', prefix: 'a',
  },
  {
    id: 420984, name: '汉川市', pid: '420900', type: 'district', pinyin: 'han chuan shi', py: 'hcs', prefix: 'h',
  },
  {
    id: 421002, name: '沙市区', pid: '421000', type: 'district', pinyin: 'sha shi qu', py: 'ssq', prefix: 's',
  },
  {
    id: 421003, name: '荆州区', pid: '421000', type: 'district', pinyin: 'jing zhou qu', py: 'jzq', prefix: 'j',
  },
  {
    id: 421022, name: '公安县', pid: '421000', type: 'district', pinyin: 'gong an xian', py: 'gax', prefix: 'g',
  },
  {
    id: 421023, name: '监利县', pid: '421000', type: 'district', pinyin: 'jian li xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 421024, name: '江陵县', pid: '421000', type: 'district', pinyin: 'jiang ling xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 421081, name: '石首市', pid: '421000', type: 'district', pinyin: 'shi shou shi', py: 'sss', prefix: 's',
  },
  {
    id: 421083, name: '洪湖市', pid: '421000', type: 'district', pinyin: 'hong hu shi', py: 'hhs', prefix: 'h',
  },
  {
    id: 421087, name: '松滋市', pid: '421000', type: 'district', pinyin: 'song zi shi', py: 'szs', prefix: 's',
  },
  {
    id: 421102, name: '黄州区', pid: '421100', type: 'district', pinyin: 'huang zhou qu', py: 'hzq', prefix: 'h',
  },
  {
    id: 421121, name: '团风县', pid: '421100', type: 'district', pinyin: 'tuan feng xian', py: 'tfx', prefix: 't',
  },
  {
    id: 421122, name: '红安县', pid: '421100', type: 'district', pinyin: 'hong an xian', py: 'hax', prefix: 'h',
  },
  {
    id: 421123, name: '罗田县', pid: '421100', type: 'district', pinyin: 'luo tian xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 421124, name: '英山县', pid: '421100', type: 'district', pinyin: 'ying shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 421125, name: '浠水县', pid: '421100', type: 'district', pinyin: 'xi shui xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 421126, name: '蕲春县', pid: '421100', type: 'district', pinyin: 'qi chun xian', py: 'qcx', prefix: 'q',
  },
  {
    id: 421127, name: '黄梅县', pid: '421100', type: 'district', pinyin: 'huang mei xian', py: 'hmx', prefix: 'h',
  },
  {
    id: 421181, name: '麻城市', pid: '421100', type: 'district', pinyin: 'ma cheng shi', py: 'mcs', prefix: 'm',
  },
  {
    id: 421182, name: '武穴市', pid: '421100', type: 'district', pinyin: 'wu xue shi', py: 'wxs', prefix: 'w',
  },
  {
    id: 421202, name: '咸安区', pid: '421200', type: 'district', pinyin: 'xian an qu', py: 'xaq', prefix: 'x',
  },
  {
    id: 421221, name: '嘉鱼县', pid: '421200', type: 'district', pinyin: 'jia yu xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 421222, name: '通城县', pid: '421200', type: 'district', pinyin: 'tong cheng xian', py: 'tcx', prefix: 't',
  },
  {
    id: 421223, name: '崇阳县', pid: '421200', type: 'district', pinyin: 'chong yang xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 421224, name: '通山县', pid: '421200', type: 'district', pinyin: 'tong shan xian', py: 'tsx', prefix: 't',
  },
  {
    id: 421281, name: '赤壁市', pid: '421200', type: 'district', pinyin: 'chi bi shi', py: 'cbs', prefix: 'c',
  },
  {
    id: 421303, name: '曾都区', pid: '421300', type: 'district', pinyin: 'ceng dou qu', py: 'cdq', prefix: 'c',
  },
  {
    id: 421321, name: '随县', pid: '421300', type: 'district', pinyin: 'sui xian', py: 'sx', prefix: 's',
  },
  {
    id: 421381, name: '广水市', pid: '421300', type: 'district', pinyin: 'guang shui shi', py: 'gss', prefix: 'g',
  },
  {
    id: 422801, name: '恩施市', pid: '422800', type: 'district', pinyin: 'en shi shi', py: 'ess', prefix: 'e',
  },
  {
    id: 422802, name: '利川市', pid: '422800', type: 'district', pinyin: 'li chuan shi', py: 'lcs', prefix: 'l',
  },
  {
    id: 422822, name: '建始县', pid: '422800', type: 'district', pinyin: 'jian shi xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 422823, name: '巴东县', pid: '422800', type: 'district', pinyin: 'ba dong xian', py: 'bdx', prefix: 'b',
  },
  {
    id: 422825, name: '宣恩县', pid: '422800', type: 'district', pinyin: 'xuan en xian', py: 'xex', prefix: 'x',
  },
  {
    id: 422826, name: '咸丰县', pid: '422800', type: 'district', pinyin: 'xian feng xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 422827, name: '来凤县', pid: '422800', type: 'district', pinyin: 'lai feng xian', py: 'lfx', prefix: 'l',
  },
  {
    id: 422828, name: '鹤峰县', pid: '422800', type: 'district', pinyin: 'he feng xian', py: 'hfx', prefix: 'h',
  },
  {
    id: 429004, name: '仙桃市', pid: '429000', type: 'district', pinyin: 'xian tao shi', py: 'xts', prefix: 'x',
  },
  {
    id: 429005, name: '潜江市', pid: '429000', type: 'district', pinyin: 'qian jiang shi', py: 'qjs', prefix: 'q',
  },
  {
    id: 429006, name: '天门市', pid: '429000', type: 'district', pinyin: 'tian men shi', py: 'tms', prefix: 't',
  },
  {
    id: 429021, name: '神农架林区', pid: '429000', type: 'district', pinyin: 'shen nong jia lin qu', py: 'snjlq', prefix: 's',
  },
  {
    id: 430102, name: '芙蓉区', pid: '430100', type: 'district', pinyin: 'fu rong qu', py: 'frq', prefix: 'f',
  },
  {
    id: 430103, name: '天心区', pid: '430100', type: 'district', pinyin: 'tian xin qu', py: 'txq', prefix: 't',
  },
  {
    id: 430104, name: '岳麓区', pid: '430100', type: 'district', pinyin: 'yue lu qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 430105, name: '开福区', pid: '430100', type: 'district', pinyin: 'kai fu qu', py: 'kfq', prefix: 'k',
  },
  {
    id: 430111, name: '雨花区', pid: '430100', type: 'district', pinyin: 'yu hua qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 430112, name: '望城区', pid: '430100', type: 'district', pinyin: 'wang cheng qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 430121, name: '长沙县', pid: '430100', type: 'district', pinyin: 'chang sha xian', py: 'csx', prefix: 'c',
  },
  {
    id: 430124, name: '宁乡县', pid: '430100', type: 'district', pinyin: 'ning xiang xian', py: 'nxx', prefix: 'n',
  },
  {
    id: 430181, name: '浏阳市', pid: '430100', type: 'district', pinyin: 'liu yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 430202, name: '荷塘区', pid: '430200', type: 'district', pinyin: 'he tang qu', py: 'htq', prefix: 'h',
  },
  {
    id: 430203, name: '芦淞区', pid: '430200', type: 'district', pinyin: 'lu song qu', py: 'lsq', prefix: 'l',
  },
  {
    id: 430204, name: '石峰区', pid: '430200', type: 'district', pinyin: 'shi feng qu', py: 'sfq', prefix: 's',
  },
  {
    id: 430211, name: '天元区', pid: '430200', type: 'district', pinyin: 'tian yuan qu', py: 'tyq', prefix: 't',
  },
  {
    id: 430221, name: '株洲县', pid: '430200', type: 'district', pinyin: 'zhu zhou xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 430223, name: '攸县', pid: '430200', type: 'district', pinyin: 'you xian', py: 'yx', prefix: 'y',
  },
  {
    id: 430224, name: '茶陵县', pid: '430200', type: 'district', pinyin: 'cha ling xian', py: 'clx', prefix: 'c',
  },
  {
    id: 430225, name: '炎陵县', pid: '430200', type: 'district', pinyin: 'yan ling xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 430281, name: '醴陵市', pid: '430200', type: 'district', pinyin: 'li ling shi', py: 'lls', prefix: 'l',
  },
  {
    id: 430302, name: '雨湖区', pid: '430300', type: 'district', pinyin: 'yu hu qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 430304, name: '岳塘区', pid: '430300', type: 'district', pinyin: 'yue tang qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 430321, name: '湘潭县', pid: '430300', type: 'district', pinyin: 'xiang tan xian', py: 'xtx', prefix: 'x',
  },
  {
    id: 430381, name: '湘乡市', pid: '430300', type: 'district', pinyin: 'xiang xiang shi', py: 'xxs', prefix: 'x',
  },
  {
    id: 430382, name: '韶山市', pid: '430300', type: 'district', pinyin: 'shao shan shi', py: 'sss', prefix: 's',
  },
  {
    id: 430405, name: '珠晖区', pid: '430400', type: 'district', pinyin: 'zhu hui qu', py: 'zhq', prefix: 'z',
  },
  {
    id: 430406, name: '雁峰区', pid: '430400', type: 'district', pinyin: 'yan feng qu', py: 'yfq', prefix: 'y',
  },
  {
    id: 430407, name: '石鼓区', pid: '430400', type: 'district', pinyin: 'shi gu qu', py: 'sgq', prefix: 's',
  },
  {
    id: 430408, name: '蒸湘区', pid: '430400', type: 'district', pinyin: 'zheng xiang qu', py: 'zxq', prefix: 'z',
  },
  {
    id: 430412, name: '南岳区', pid: '430400', type: 'district', pinyin: 'nan yue qu', py: 'nyq', prefix: 'n',
  },
  {
    id: 430421, name: '衡阳县', pid: '430400', type: 'district', pinyin: 'heng yang xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 430422, name: '衡南县', pid: '430400', type: 'district', pinyin: 'heng nan xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 430423, name: '衡山县', pid: '430400', type: 'district', pinyin: 'heng shan xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 430424, name: '衡东县', pid: '430400', type: 'district', pinyin: 'heng dong xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 430426, name: '祁东县', pid: '430400', type: 'district', pinyin: 'qi dong xian', py: 'qdx', prefix: 'q',
  },
  {
    id: 430481, name: '耒阳市', pid: '430400', type: 'district', pinyin: 'lei yang shi', py: 'lys', prefix: 'l',
  },
  {
    id: 430482, name: '常宁市', pid: '430400', type: 'district', pinyin: 'chang ning shi', py: 'cns', prefix: 'c',
  },
  {
    id: 430502, name: '双清区', pid: '430500', type: 'district', pinyin: 'shuang qing qu', py: 'sqq', prefix: 's',
  },
  {
    id: 430503, name: '大祥区', pid: '430500', type: 'district', pinyin: 'da xiang qu', py: 'dxq', prefix: 'd',
  },
  {
    id: 430511, name: '北塔区', pid: '430500', type: 'district', pinyin: 'bei ta qu', py: 'btq', prefix: 'b',
  },
  {
    id: 430521, name: '邵东县', pid: '430500', type: 'district', pinyin: 'shao dong xian', py: 'sdx', prefix: 's',
  },
  {
    id: 430522, name: '新邵县', pid: '430500', type: 'district', pinyin: 'xin shao xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 430523, name: '邵阳县', pid: '430500', type: 'district', pinyin: 'shao yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 430524, name: '隆回县', pid: '430500', type: 'district', pinyin: 'long hui xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 430525, name: '洞口县', pid: '430500', type: 'district', pinyin: 'dong kou xian', py: 'dkx', prefix: 'd',
  },
  {
    id: 430527, name: '绥宁县', pid: '430500', type: 'district', pinyin: 'sui ning xian', py: 'snx', prefix: 's',
  },
  {
    id: 430528, name: '新宁县', pid: '430500', type: 'district', pinyin: 'xin ning xian', py: 'xnx', prefix: 'x',
  },
  {
    id: 430529, name: '城步苗族自治县', pid: '430500', type: 'district', pinyin: 'cheng bu miao zu zi zhi xian', py: 'cbmzzzx', prefix: 'c',
  },
  {
    id: 430581, name: '武冈市', pid: '430500', type: 'district', pinyin: 'wu gang shi', py: 'wgs', prefix: 'w',
  },
  {
    id: 430602, name: '岳阳楼区', pid: '430600', type: 'district', pinyin: 'yue yang lou qu', py: 'yylq', prefix: 'y',
  },
  {
    id: 430603, name: '云溪区', pid: '430600', type: 'district', pinyin: 'yun xi qu', py: 'yxq', prefix: 'y',
  },
  {
    id: 430611, name: '君山区', pid: '430600', type: 'district', pinyin: 'jun shan qu', py: 'jsq', prefix: 'j',
  },
  {
    id: 430621, name: '岳阳县', pid: '430600', type: 'district', pinyin: 'yue yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 430623, name: '华容县', pid: '430600', type: 'district', pinyin: 'hua rong xian', py: 'hrx', prefix: 'h',
  },
  {
    id: 430624, name: '湘阴县', pid: '430600', type: 'district', pinyin: 'xiang yin xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 430626, name: '平江县', pid: '430600', type: 'district', pinyin: 'ping jiang xian', py: 'pjx', prefix: 'p',
  },
  {
    id: 430681, name: '汨罗市', pid: '430600', type: 'district', pinyin: 'mi luo shi', py: 'mls', prefix: 'm',
  },
  {
    id: 430682, name: '临湘市', pid: '430600', type: 'district', pinyin: 'lin xiang shi', py: 'lxs', prefix: 'l',
  },
  {
    id: 430702, name: '武陵区', pid: '430700', type: 'district', pinyin: 'wu ling qu', py: 'wlq', prefix: 'w',
  },
  {
    id: 430703, name: '鼎城区', pid: '430700', type: 'district', pinyin: 'ding cheng qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 430721, name: '安乡县', pid: '430700', type: 'district', pinyin: 'an xiang xian', py: 'axx', prefix: 'a',
  },
  {
    id: 430722, name: '汉寿县', pid: '430700', type: 'district', pinyin: 'han shou xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 430723, name: '澧县', pid: '430700', type: 'district', pinyin: 'li xian', py: 'lx', prefix: 'l',
  },
  {
    id: 430724, name: '临澧县', pid: '430700', type: 'district', pinyin: 'lin li xian', py: 'llx', prefix: 'l',
  },
  {
    id: 430725, name: '桃源县', pid: '430700', type: 'district', pinyin: 'tao yuan xian', py: 'tyx', prefix: 't',
  },
  {
    id: 430726, name: '石门县', pid: '430700', type: 'district', pinyin: 'shi men xian', py: 'smx', prefix: 's',
  },
  {
    id: 430781, name: '津市市', pid: '430700', type: 'district', pinyin: 'jin shi shi', py: 'jss', prefix: 'j',
  },
  {
    id: 430802, name: '永定区', pid: '430800', type: 'district', pinyin: 'yong ding qu', py: 'ydq', prefix: 'y',
  },
  {
    id: 430811, name: '武陵源区', pid: '430800', type: 'district', pinyin: 'wu ling yuan qu', py: 'wlyq', prefix: 'w',
  },
  {
    id: 430821, name: '慈利县', pid: '430800', type: 'district', pinyin: 'ci li xian', py: 'clx', prefix: 'c',
  },
  {
    id: 430822, name: '桑植县', pid: '430800', type: 'district', pinyin: 'sang zhi xian', py: 'szx', prefix: 's',
  },
  {
    id: 430902, name: '资阳区', pid: '430900', type: 'district', pinyin: 'zi yang qu', py: 'zyq', prefix: 'z',
  },
  {
    id: 430903, name: '赫山区', pid: '430900', type: 'district', pinyin: 'he shan qu', py: 'hsq', prefix: 'h',
  },
  {
    id: 430921, name: '南县', pid: '430900', type: 'district', pinyin: 'nan xian', py: 'nx', prefix: 'n',
  },
  {
    id: 430922, name: '桃江县', pid: '430900', type: 'district', pinyin: 'tao jiang xian', py: 'tjx', prefix: 't',
  },
  {
    id: 430923, name: '安化县', pid: '430900', type: 'district', pinyin: 'an hua xian', py: 'ahx', prefix: 'a',
  },
  {
    id: 430981, name: '沅江市', pid: '430900', type: 'district', pinyin: 'yuan jiang shi', py: 'yjs', prefix: 'y',
  },
  {
    id: 431002, name: '北湖区', pid: '431000', type: 'district', pinyin: 'bei hu qu', py: 'bhq', prefix: 'b',
  },
  {
    id: 431003, name: '苏仙区', pid: '431000', type: 'district', pinyin: 'su xian qu', py: 'sxq', prefix: 's',
  },
  {
    id: 431021, name: '桂阳县', pid: '431000', type: 'district', pinyin: 'gui yang xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 431022, name: '宜章县', pid: '431000', type: 'district', pinyin: 'yi zhang xian', py: 'yzx', prefix: 'y',
  },
  {
    id: 431023, name: '永兴县', pid: '431000', type: 'district', pinyin: 'yong xing xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 431024, name: '嘉禾县', pid: '431000', type: 'district', pinyin: 'jia he xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 431025, name: '临武县', pid: '431000', type: 'district', pinyin: 'lin wu xian', py: 'lwx', prefix: 'l',
  },
  {
    id: 431026, name: '汝城县', pid: '431000', type: 'district', pinyin: 'ru cheng xian', py: 'rcx', prefix: 'r',
  },
  {
    id: 431027, name: '桂东县', pid: '431000', type: 'district', pinyin: 'gui dong xian', py: 'gdx', prefix: 'g',
  },
  {
    id: 431028, name: '安仁县', pid: '431000', type: 'district', pinyin: 'an ren xian', py: 'arx', prefix: 'a',
  },
  {
    id: 431081, name: '资兴市', pid: '431000', type: 'district', pinyin: 'zi xing shi', py: 'zxs', prefix: 'z',
  },
  {
    id: 431102, name: '零陵区', pid: '431100', type: 'district', pinyin: 'ling ling qu', py: 'llq', prefix: 'l',
  },
  {
    id: 431103, name: '冷水滩区', pid: '431100', type: 'district', pinyin: 'leng shui tan qu', py: 'lstq', prefix: 'l',
  },
  {
    id: 431121, name: '祁阳县', pid: '431100', type: 'district', pinyin: 'qi yang xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 431122, name: '东安县', pid: '431100', type: 'district', pinyin: 'dong an xian', py: 'dax', prefix: 'd',
  },
  {
    id: 431123, name: '双牌县', pid: '431100', type: 'district', pinyin: 'shuang pai xian', py: 'spx', prefix: 's',
  },
  {
    id: 431124, name: '道县', pid: '431100', type: 'district', pinyin: 'dao xian', py: 'dx', prefix: 'd',
  },
  {
    id: 431125, name: '江永县', pid: '431100', type: 'district', pinyin: 'jiang yong xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 431126, name: '宁远县', pid: '431100', type: 'district', pinyin: 'ning yuan xian', py: 'nyx', prefix: 'n',
  },
  {
    id: 431127, name: '蓝山县', pid: '431100', type: 'district', pinyin: 'lan shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 431128, name: '新田县', pid: '431100', type: 'district', pinyin: 'xin tian xian', py: 'xtx', prefix: 'x',
  },
  {
    id: 431129, name: '江华瑶族自治县', pid: '431100', type: 'district', pinyin: 'jiang hua yao zu zi zhi xian', py: 'jhyzzzx', prefix: 'j',
  },
  {
    id: 431202, name: '鹤城区', pid: '431200', type: 'district', pinyin: 'he cheng qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 431221, name: '中方县', pid: '431200', type: 'district', pinyin: 'zhong fang xian', py: 'zfx', prefix: 'z',
  },
  {
    id: 431222, name: '沅陵县', pid: '431200', type: 'district', pinyin: 'yuan ling xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 431223, name: '辰溪县', pid: '431200', type: 'district', pinyin: 'chen xi xian', py: 'cxx', prefix: 'c',
  },
  {
    id: 431224, name: '溆浦县', pid: '431200', type: 'district', pinyin: 'xu pu xian', py: 'xpx', prefix: 'x',
  },
  {
    id: 431225, name: '会同县', pid: '431200', type: 'district', pinyin: 'hui tong xian', py: 'htx', prefix: 'h',
  },
  {
    id: 431226, name: '麻阳苗族自治县', pid: '431200', type: 'district', pinyin: 'ma yang miao zu zi zhi xian', py: 'mymzzzx', prefix: 'm',
  },
  {
    id: 431227, name: '新晃侗族自治县', pid: '431200', type: 'district', pinyin: 'xin huang dong zu zi zhi xian', py: 'xhdzzzx', prefix: 'x',
  },
  {
    id: 431228, name: '芷江侗族自治县', pid: '431200', type: 'district', pinyin: 'zhi jiang dong zu zi zhi xian', py: 'zjdzzzx', prefix: 'z',
  },
  {
    id: 431229, name: '靖州苗族侗族自治县', pid: '431200', type: 'district', pinyin: 'jing zhou miao zu dong zu zi zhi xian', py: 'jzmzdzzzx', prefix: 'j',
  },
  {
    id: 431230, name: '通道侗族自治县', pid: '431200', type: 'district', pinyin: 'tong dao dong zu zi zhi xian', py: 'tddzzzx', prefix: 't',
  },
  {
    id: 431281, name: '洪江市', pid: '431200', type: 'district', pinyin: 'hong jiang shi', py: 'hjs', prefix: 'h',
  },
  {
    id: 431302, name: '娄星区', pid: '431300', type: 'district', pinyin: 'lou xing qu', py: 'lxq', prefix: 'l',
  },
  {
    id: 431321, name: '双峰县', pid: '431300', type: 'district', pinyin: 'shuang feng xian', py: 'sfx', prefix: 's',
  },
  {
    id: 431322, name: '新化县', pid: '431300', type: 'district', pinyin: 'xin hua xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 431381, name: '冷水江市', pid: '431300', type: 'district', pinyin: 'leng shui jiang shi', py: 'lsjs', prefix: 'l',
  },
  {
    id: 431382, name: '涟源市', pid: '431300', type: 'district', pinyin: 'lian yuan shi', py: 'lys', prefix: 'l',
  },
  {
    id: 433101, name: '吉首市', pid: '433100', type: 'district', pinyin: 'ji shou shi', py: 'jss', prefix: 'j',
  },
  {
    id: 433122, name: '泸溪县', pid: '433100', type: 'district', pinyin: 'lu xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 433123, name: '凤凰县', pid: '433100', type: 'district', pinyin: 'feng huang xian', py: 'fhx', prefix: 'f',
  },
  {
    id: 433124, name: '花垣县', pid: '433100', type: 'district', pinyin: 'hua yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 433125, name: '保靖县', pid: '433100', type: 'district', pinyin: 'bao jing xian', py: 'bjx', prefix: 'b',
  },
  {
    id: 433126, name: '古丈县', pid: '433100', type: 'district', pinyin: 'gu zhang xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 433127, name: '永顺县', pid: '433100', type: 'district', pinyin: 'yong shun xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 433130, name: '龙山县', pid: '433100', type: 'district', pinyin: 'long shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 440103, name: '荔湾区', pid: '440100', type: 'district', pinyin: 'li wan qu', py: 'lwq', prefix: 'l',
  },
  {
    id: 440104, name: '越秀区', pid: '440100', type: 'district', pinyin: 'yue xiu qu', py: 'yxq', prefix: 'y',
  },
  {
    id: 440105, name: '海珠区', pid: '440100', type: 'district', pinyin: 'hai zhu qu', py: 'hzq', prefix: 'h',
  },
  {
    id: 440106, name: '天河区', pid: '440100', type: 'district', pinyin: 'tian he qu', py: 'thq', prefix: 't',
  },
  {
    id: 440111, name: '白云区', pid: '440100', type: 'district', pinyin: 'bai yun qu', py: 'byq', prefix: 'b',
  },
  {
    id: 440112, name: '黄埔区', pid: '440100', type: 'district', pinyin: 'huang pu qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 440113, name: '番禺区', pid: '440100', type: 'district', pinyin: 'fan yu qu', py: 'fyq', prefix: 'f',
  },
  {
    id: 440114, name: '花都区', pid: '440100', type: 'district', pinyin: 'hua dou qu', py: 'hdq', prefix: 'h',
  },
  {
    id: 440115, name: '南沙区', pid: '440100', type: 'district', pinyin: 'nan sha qu', py: 'nsq', prefix: 'n',
  },
  {
    id: 440116, name: '萝岗区', pid: '440100', type: 'district', pinyin: 'luo gang qu', py: 'lgq', prefix: 'l',
  },
  {
    id: 440183, name: '增城市', pid: '440100', type: 'district', pinyin: 'zeng cheng shi', py: 'zcs', prefix: 'z',
  },
  {
    id: 440184, name: '从化市', pid: '440100', type: 'district', pinyin: 'cong hua shi', py: 'chs', prefix: 'c',
  },
  {
    id: 440203, name: '武江区', pid: '440200', type: 'district', pinyin: 'wu jiang qu', py: 'wjq', prefix: 'w',
  },
  {
    id: 440204, name: '浈江区', pid: '440200', type: 'district', pinyin: 'zhen jiang qu', py: 'zjq', prefix: 'z',
  },
  {
    id: 440205, name: '曲江区', pid: '440200', type: 'district', pinyin: 'qu jiang qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 440222, name: '始兴县', pid: '440200', type: 'district', pinyin: 'shi xing xian', py: 'sxx', prefix: 's',
  },
  {
    id: 440224, name: '仁化县', pid: '440200', type: 'district', pinyin: 'ren hua xian', py: 'rhx', prefix: 'r',
  },
  {
    id: 440229, name: '翁源县', pid: '440200', type: 'district', pinyin: 'weng yuan xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 440232, name: '乳源瑶族自治县', pid: '440200', type: 'district', pinyin: 'ru yuan yao zu zi zhi xian', py: 'ryyzzzx', prefix: 'r',
  },
  {
    id: 440233, name: '新丰县', pid: '440200', type: 'district', pinyin: 'xin feng xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 440281, name: '乐昌市', pid: '440200', type: 'district', pinyin: 'le chang shi', py: 'lcs', prefix: 'l',
  },
  {
    id: 440282, name: '南雄市', pid: '440200', type: 'district', pinyin: 'nan xiong shi', py: 'nxs', prefix: 'n',
  },
  {
    id: 440303, name: '罗湖区', pid: '440300', type: 'district', pinyin: 'luo hu qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 440304, name: '福田区', pid: '440300', type: 'district', pinyin: 'fu tian qu', py: 'ftq', prefix: 'f',
  },
  {
    id: 440305, name: '南山区', pid: '440300', type: 'district', pinyin: 'nan shan qu', py: 'nsq', prefix: 'n',
  },
  {
    id: 440306, name: '宝安区', pid: '440300', type: 'district', pinyin: 'bao an qu', py: 'baq', prefix: 'b',
  },
  {
    id: 440307, name: '龙岗区', pid: '440300', type: 'district', pinyin: 'long gang qu', py: 'lgq', prefix: 'l',
  },
  {
    id: 440308, name: '盐田区', pid: '440300', type: 'district', pinyin: 'yan tian qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 440402, name: '香洲区', pid: '440400', type: 'district', pinyin: 'xiang zhou qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 440403, name: '斗门区', pid: '440400', type: 'district', pinyin: 'dou men qu', py: 'dmq', prefix: 'd',
  },
  {
    id: 440404, name: '金湾区', pid: '440400', type: 'district', pinyin: 'jin wan qu', py: 'jwq', prefix: 'j',
  },
  {
    id: 440507, name: '龙湖区', pid: '440500', type: 'district', pinyin: 'long hu qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 440511, name: '金平区', pid: '440500', type: 'district', pinyin: 'jin ping qu', py: 'jpq', prefix: 'j',
  },
  {
    id: 440512, name: '濠江区', pid: '440500', type: 'district', pinyin: 'hao jiang qu', py: 'hjq', prefix: 'h',
  },
  {
    id: 440513, name: '潮阳区', pid: '440500', type: 'district', pinyin: 'chao yang qu', py: 'cyq', prefix: 'c',
  },
  {
    id: 440514, name: '潮南区', pid: '440500', type: 'district', pinyin: 'chao nan qu', py: 'cnq', prefix: 'c',
  },
  {
    id: 440515, name: '澄海区', pid: '440500', type: 'district', pinyin: 'cheng hai qu', py: 'chq', prefix: 'c',
  },
  {
    id: 440523, name: '南澳县', pid: '440500', type: 'district', pinyin: 'nan ao xian', py: 'nax', prefix: 'n',
  },
  {
    id: 440604, name: '禅城区', pid: '440600', type: 'district', pinyin: 'shan cheng qu', py: 'scq', prefix: 's',
  },
  {
    id: 440605, name: '南海区', pid: '440600', type: 'district', pinyin: 'nan hai qu', py: 'nhq', prefix: 'n',
  },
  {
    id: 440606, name: '顺德区', pid: '440600', type: 'district', pinyin: 'shun de qu', py: 'sdq', prefix: 's',
  },
  {
    id: 440607, name: '三水区', pid: '440600', type: 'district', pinyin: 'san shui qu', py: 'ssq', prefix: 's',
  },
  {
    id: 440608, name: '高明区', pid: '440600', type: 'district', pinyin: 'gao ming qu', py: 'gmq', prefix: 'g',
  },
  {
    id: 440703, name: '蓬江区', pid: '440700', type: 'district', pinyin: 'peng jiang qu', py: 'pjq', prefix: 'p',
  },
  {
    id: 440704, name: '江海区', pid: '440700', type: 'district', pinyin: 'jiang hai qu', py: 'jhq', prefix: 'j',
  },
  {
    id: 440705, name: '新会区', pid: '440700', type: 'district', pinyin: 'xin hui qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 440781, name: '台山市', pid: '440700', type: 'district', pinyin: 'tai shan shi', py: 'tss', prefix: 't',
  },
  {
    id: 440783, name: '开平市', pid: '440700', type: 'district', pinyin: 'kai ping shi', py: 'kps', prefix: 'k',
  },
  {
    id: 440784, name: '鹤山市', pid: '440700', type: 'district', pinyin: 'he shan shi', py: 'hss', prefix: 'h',
  },
  {
    id: 440785, name: '恩平市', pid: '440700', type: 'district', pinyin: 'en ping shi', py: 'eps', prefix: 'e',
  },
  {
    id: 440802, name: '赤坎区', pid: '440800', type: 'district', pinyin: 'chi kan qu', py: 'ckq', prefix: 'c',
  },
  {
    id: 440803, name: '霞山区', pid: '440800', type: 'district', pinyin: 'xia shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 440804, name: '坡头区', pid: '440800', type: 'district', pinyin: 'po tou qu', py: 'ptq', prefix: 'p',
  },
  {
    id: 440811, name: '麻章区', pid: '440800', type: 'district', pinyin: 'ma zhang qu', py: 'mzq', prefix: 'm',
  },
  {
    id: 440823, name: '遂溪县', pid: '440800', type: 'district', pinyin: 'sui xi xian', py: 'sxx', prefix: 's',
  },
  {
    id: 440825, name: '徐闻县', pid: '440800', type: 'district', pinyin: 'xu wen xian', py: 'xwx', prefix: 'x',
  },
  {
    id: 440881, name: '廉江市', pid: '440800', type: 'district', pinyin: 'lian jiang shi', py: 'ljs', prefix: 'l',
  },
  {
    id: 440882, name: '雷州市', pid: '440800', type: 'district', pinyin: 'lei zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 440883, name: '吴川市', pid: '440800', type: 'district', pinyin: 'wu chuan shi', py: 'wcs', prefix: 'w',
  },
  {
    id: 440902, name: '茂南区', pid: '440900', type: 'district', pinyin: 'mao nan qu', py: 'mnq', prefix: 'm',
  },
  {
    id: 440903, name: '茂港区', pid: '440900', type: 'district', pinyin: 'mao gang qu', py: 'mgq', prefix: 'm',
  },
  {
    id: 440923, name: '电白县', pid: '440900', type: 'district', pinyin: 'dian bai xian', py: 'dbx', prefix: 'd',
  },
  {
    id: 440981, name: '高州市', pid: '440900', type: 'district', pinyin: 'gao zhou shi', py: 'gzs', prefix: 'g',
  },
  {
    id: 440982, name: '化州市', pid: '440900', type: 'district', pinyin: 'hua zhou shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 440983, name: '信宜市', pid: '440900', type: 'district', pinyin: 'xin yi shi', py: 'xys', prefix: 'x',
  },
  {
    id: 441202, name: '端州区', pid: '441200', type: 'district', pinyin: 'duan zhou qu', py: 'dzq', prefix: 'd',
  },
  {
    id: 441203, name: '鼎湖区', pid: '441200', type: 'district', pinyin: 'ding hu qu', py: 'dhq', prefix: 'd',
  },
  {
    id: 441223, name: '广宁县', pid: '441200', type: 'district', pinyin: 'guang ning xian', py: 'gnx', prefix: 'g',
  },
  {
    id: 441224, name: '怀集县', pid: '441200', type: 'district', pinyin: 'huai ji xian', py: 'hjx', prefix: 'h',
  },
  {
    id: 441225, name: '封开县', pid: '441200', type: 'district', pinyin: 'feng kai xian', py: 'fkx', prefix: 'f',
  },
  {
    id: 441226, name: '德庆县', pid: '441200', type: 'district', pinyin: 'de qing xian', py: 'dqx', prefix: 'd',
  },
  {
    id: 441283, name: '高要市', pid: '441200', type: 'district', pinyin: 'gao yao shi', py: 'gys', prefix: 'g',
  },
  {
    id: 441284, name: '四会市', pid: '441200', type: 'district', pinyin: 'si hui shi', py: 'shs', prefix: 's',
  },
  {
    id: 441302, name: '惠城区', pid: '441300', type: 'district', pinyin: 'hui cheng qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 441303, name: '惠阳区', pid: '441300', type: 'district', pinyin: 'hui yang qu', py: 'hyq', prefix: 'h',
  },
  {
    id: 441322, name: '博罗县', pid: '441300', type: 'district', pinyin: 'bo luo xian', py: 'blx', prefix: 'b',
  },
  {
    id: 441323, name: '惠东县', pid: '441300', type: 'district', pinyin: 'hui dong xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 441324, name: '龙门县', pid: '441300', type: 'district', pinyin: 'long men xian', py: 'lmx', prefix: 'l',
  },
  {
    id: 441402, name: '梅江区', pid: '441400', type: 'district', pinyin: 'mei jiang qu', py: 'mjq', prefix: 'm',
  },
  {
    id: 441421, name: '梅县', pid: '441400', type: 'district', pinyin: 'mei xian', py: 'mx', prefix: 'm',
  },
  {
    id: 441422, name: '大埔县', pid: '441400', type: 'district', pinyin: 'da pu xian', py: 'dpx', prefix: 'd',
  },
  {
    id: 441423, name: '丰顺县', pid: '441400', type: 'district', pinyin: 'feng shun xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 441424, name: '五华县', pid: '441400', type: 'district', pinyin: 'wu hua xian', py: 'whx', prefix: 'w',
  },
  {
    id: 441426, name: '平远县', pid: '441400', type: 'district', pinyin: 'ping yuan xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 441427, name: '蕉岭县', pid: '441400', type: 'district', pinyin: 'jiao ling xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 441481, name: '兴宁市', pid: '441400', type: 'district', pinyin: 'xing ning shi', py: 'xns', prefix: 'x',
  },
  {
    id: 441502, name: '城区', pid: '441500', type: 'district', pinyin: 'cheng qu', py: 'cq', prefix: 'c',
  },
  {
    id: 441521, name: '海丰县', pid: '441500', type: 'district', pinyin: 'hai feng xian', py: 'hfx', prefix: 'h',
  },
  {
    id: 441523, name: '陆河县', pid: '441500', type: 'district', pinyin: 'lu he xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 441581, name: '陆丰市', pid: '441500', type: 'district', pinyin: 'lu feng shi', py: 'lfs', prefix: 'l',
  },
  {
    id: 441602, name: '源城区', pid: '441600', type: 'district', pinyin: 'yuan cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 441621, name: '紫金县', pid: '441600', type: 'district', pinyin: 'zi jin xian', py: 'zjx', prefix: 'z',
  },
  {
    id: 441622, name: '龙川县', pid: '441600', type: 'district', pinyin: 'long chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 441623, name: '连平县', pid: '441600', type: 'district', pinyin: 'lian ping xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 441624, name: '和平县', pid: '441600', type: 'district', pinyin: 'he ping xian', py: 'hpx', prefix: 'h',
  },
  {
    id: 441625, name: '东源县', pid: '441600', type: 'district', pinyin: 'dong yuan xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 441702, name: '江城区', pid: '441700', type: 'district', pinyin: 'jiang cheng qu', py: 'jcq', prefix: 'j',
  },
  {
    id: 441721, name: '阳西县', pid: '441700', type: 'district', pinyin: 'yang xi xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 441723, name: '阳东县', pid: '441700', type: 'district', pinyin: 'yang dong xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 441781, name: '阳春市', pid: '441700', type: 'district', pinyin: 'yang chun shi', py: 'ycs', prefix: 'y',
  },
  {
    id: 441802, name: '清城区', pid: '441800', type: 'district', pinyin: 'qing cheng qu', py: 'qcq', prefix: 'q',
  },
  {
    id: 441803, name: '清新区', pid: '441800', type: 'district', pinyin: 'qing xin qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 441821, name: '佛冈县', pid: '441800', type: 'district', pinyin: 'fo gang xian', py: 'fgx', prefix: 'f',
  },
  {
    id: 441823, name: '阳山县', pid: '441800', type: 'district', pinyin: 'yang shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 441825, name: '连山壮族瑶族自治县', pid: '441800', type: 'district', pinyin: 'lian shan zhuang zu yao zu zi zhi xian', py: 'lszzyzzzx', prefix: 'l',
  },
  {
    id: 441826, name: '连南瑶族自治县', pid: '441800', type: 'district', pinyin: 'lian nan yao zu zi zhi xian', py: 'lnyzzzx', prefix: 'l',
  },
  {
    id: 441881, name: '英德市', pid: '441800', type: 'district', pinyin: 'ying de shi', py: 'yds', prefix: 'y',
  },
  {
    id: 441882, name: '连州市', pid: '441800', type: 'district', pinyin: 'lian zhou shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 445102, name: '湘桥区', pid: '445100', type: 'district', pinyin: 'xiang qiao qu', py: 'xqq', prefix: 'x',
  },
  {
    id: 445103, name: '潮安区', pid: '445100', type: 'district', pinyin: 'chao an qu', py: 'caq', prefix: 'c',
  },
  {
    id: 445122, name: '饶平县', pid: '445100', type: 'district', pinyin: 'rao ping xian', py: 'rpx', prefix: 'r',
  },
  {
    id: 445202, name: '榕城区', pid: '445200', type: 'district', pinyin: 'rong cheng qu', py: 'rcq', prefix: 'r',
  },
  {
    id: 445203, name: '揭东区', pid: '445200', type: 'district', pinyin: 'jie dong qu', py: 'jdq', prefix: 'j',
  },
  {
    id: 445222, name: '揭西县', pid: '445200', type: 'district', pinyin: 'jie xi xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 445224, name: '惠来县', pid: '445200', type: 'district', pinyin: 'hui lai xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 445281, name: '普宁市', pid: '445200', type: 'district', pinyin: 'pu ning shi', py: 'pns', prefix: 'p',
  },
  {
    id: 445302, name: '云城区', pid: '445300', type: 'district', pinyin: 'yun cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 445321, name: '新兴县', pid: '445300', type: 'district', pinyin: 'xin xing xian', py: 'xxx', prefix: 'x',
  },
  {
    id: 445322, name: '郁南县', pid: '445300', type: 'district', pinyin: 'yu nan xian', py: 'ynx', prefix: 'y',
  },
  {
    id: 445323, name: '云安县', pid: '445300', type: 'district', pinyin: 'yun an xian', py: 'yax', prefix: 'y',
  },
  {
    id: 445381, name: '罗定市', pid: '445300', type: 'district', pinyin: 'luo ding shi', py: 'lds', prefix: 'l',
  },
  {
    id: 450102, name: '兴宁区', pid: '450100', type: 'district', pinyin: 'xing ning qu', py: 'xnq', prefix: 'x',
  },
  {
    id: 450103, name: '青秀区', pid: '450100', type: 'district', pinyin: 'qing xiu qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 450105, name: '江南区', pid: '450100', type: 'district', pinyin: 'jiang nan qu', py: 'jnq', prefix: 'j',
  },
  {
    id: 450107, name: '西乡塘区', pid: '450100', type: 'district', pinyin: 'xi xiang tang qu', py: 'xxtq', prefix: 'x',
  },
  {
    id: 450108, name: '良庆区', pid: '450100', type: 'district', pinyin: 'liang qing qu', py: 'lqq', prefix: 'l',
  },
  {
    id: 450109, name: '邕宁区', pid: '450100', type: 'district', pinyin: 'yong ning qu', py: 'ynq', prefix: 'y',
  },
  {
    id: 450122, name: '武鸣县', pid: '450100', type: 'district', pinyin: 'wu ming xian', py: 'wmx', prefix: 'w',
  },
  {
    id: 450123, name: '隆安县', pid: '450100', type: 'district', pinyin: 'long an xian', py: 'lax', prefix: 'l',
  },
  {
    id: 450124, name: '马山县', pid: '450100', type: 'district', pinyin: 'ma shan xian', py: 'msx', prefix: 'm',
  },
  {
    id: 450125, name: '上林县', pid: '450100', type: 'district', pinyin: 'shang lin xian', py: 'slx', prefix: 's',
  },
  {
    id: 450126, name: '宾阳县', pid: '450100', type: 'district', pinyin: 'bin yang xian', py: 'byx', prefix: 'b',
  },
  {
    id: 450127, name: '横县', pid: '450100', type: 'district', pinyin: 'heng xian', py: 'hx', prefix: 'h',
  },
  {
    id: 450202, name: '城中区', pid: '450200', type: 'district', pinyin: 'cheng zhong qu', py: 'czq', prefix: 'c',
  },
  {
    id: 450203, name: '鱼峰区', pid: '450200', type: 'district', pinyin: 'yu feng qu', py: 'yfq', prefix: 'y',
  },
  {
    id: 450204, name: '柳南区', pid: '450200', type: 'district', pinyin: 'liu nan qu', py: 'lnq', prefix: 'l',
  },
  {
    id: 450205, name: '柳北区', pid: '450200', type: 'district', pinyin: 'liu bei qu', py: 'lbq', prefix: 'l',
  },
  {
    id: 450221, name: '柳江县', pid: '450200', type: 'district', pinyin: 'liu jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 450222, name: '柳城县', pid: '450200', type: 'district', pinyin: 'liu cheng xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 450223, name: '鹿寨县', pid: '450200', type: 'district', pinyin: 'lu zhai xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 450224, name: '融安县', pid: '450200', type: 'district', pinyin: 'rong an xian', py: 'rax', prefix: 'r',
  },
  {
    id: 450225, name: '融水苗族自治县', pid: '450200', type: 'district', pinyin: 'rong shui miao zu zi zhi xian', py: 'rsmzzzx', prefix: 'r',
  },
  {
    id: 450226, name: '三江侗族自治县', pid: '450200', type: 'district', pinyin: 'san jiang dong zu zi zhi xian', py: 'sjdzzzx', prefix: 's',
  },
  {
    id: 450302, name: '秀峰区', pid: '450300', type: 'district', pinyin: 'xiu feng qu', py: 'xfq', prefix: 'x',
  },
  {
    id: 450303, name: '叠彩区', pid: '450300', type: 'district', pinyin: 'die cai qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 450304, name: '象山区', pid: '450300', type: 'district', pinyin: 'xiang shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 450305, name: '七星区', pid: '450300', type: 'district', pinyin: 'qi xing qu', py: 'qxq', prefix: 'q',
  },
  {
    id: 450311, name: '雁山区', pid: '450300', type: 'district', pinyin: 'yan shan qu', py: 'ysq', prefix: 'y',
  },
  {
    id: 450312, name: '临桂区', pid: '450300', type: 'district', pinyin: 'lin gui qu', py: 'lgq', prefix: 'l',
  },
  {
    id: 450321, name: '阳朔县', pid: '450300', type: 'district', pinyin: 'yang shuo xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 450323, name: '灵川县', pid: '450300', type: 'district', pinyin: 'ling chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 450324, name: '全州县', pid: '450300', type: 'district', pinyin: 'quan zhou xian', py: 'qzx', prefix: 'q',
  },
  {
    id: 450325, name: '兴安县', pid: '450300', type: 'district', pinyin: 'xing an xian', py: 'xax', prefix: 'x',
  },
  {
    id: 450326, name: '永福县', pid: '450300', type: 'district', pinyin: 'yong fu xian', py: 'yfx', prefix: 'y',
  },
  {
    id: 450327, name: '灌阳县', pid: '450300', type: 'district', pinyin: 'guan yang xian', py: 'gyx', prefix: 'g',
  },
  {
    id: 450328, name: '龙胜各族自治县', pid: '450300', type: 'district', pinyin: 'long sheng ge zu zi zhi xian', py: 'lsgzzzx', prefix: 'l',
  },
  {
    id: 450329, name: '资源县', pid: '450300', type: 'district', pinyin: 'zi yuan xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 450330, name: '平乐县', pid: '450300', type: 'district', pinyin: 'ping le xian', py: 'plx', prefix: 'p',
  },
  {
    id: 450331, name: '荔浦县', pid: '450300', type: 'district', pinyin: 'li pu xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 450332, name: '恭城瑶族自治县', pid: '450300', type: 'district', pinyin: 'gong cheng yao zu zi zhi xian', py: 'gcyzzzx', prefix: 'g',
  },
  {
    id: 450403, name: '万秀区', pid: '450400', type: 'district', pinyin: 'wan xiu qu', py: 'wxq', prefix: 'w',
  },
  {
    id: 450405, name: '长洲区', pid: '450400', type: 'district', pinyin: 'chang zhou qu', py: 'czq', prefix: 'c',
  },
  {
    id: 450406, name: '龙圩区', pid: '450400', type: 'district', pinyin: 'long wei qu', py: 'lwq', prefix: 'l',
  },
  {
    id: 450421, name: '苍梧县', pid: '450400', type: 'district', pinyin: 'cang wu xian', py: 'cwx', prefix: 'c',
  },
  {
    id: 450422, name: '藤县', pid: '450400', type: 'district', pinyin: 'teng xian', py: 'tx', prefix: 't',
  },
  {
    id: 450423, name: '蒙山县', pid: '450400', type: 'district', pinyin: 'meng shan xian', py: 'msx', prefix: 'm',
  },
  {
    id: 450481, name: '岑溪市', pid: '450400', type: 'district', pinyin: 'cen xi shi', py: 'cxs', prefix: 'c',
  },
  {
    id: 450502, name: '海城区', pid: '450500', type: 'district', pinyin: 'hai cheng qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 450503, name: '银海区', pid: '450500', type: 'district', pinyin: 'yin hai qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 450512, name: '铁山港区', pid: '450500', type: 'district', pinyin: 'tie shan gang qu', py: 'tsgq', prefix: 't',
  },
  {
    id: 450521, name: '合浦县', pid: '450500', type: 'district', pinyin: 'he pu xian', py: 'hpx', prefix: 'h',
  },
  {
    id: 450602, name: '港口区', pid: '450600', type: 'district', pinyin: 'gang kou qu', py: 'gkq', prefix: 'g',
  },
  {
    id: 450603, name: '防城区', pid: '450600', type: 'district', pinyin: 'fang cheng qu', py: 'fcq', prefix: 'f',
  },
  {
    id: 450621, name: '上思县', pid: '450600', type: 'district', pinyin: 'shang si xian', py: 'ssx', prefix: 's',
  },
  {
    id: 450681, name: '东兴市', pid: '450600', type: 'district', pinyin: 'dong xing shi', py: 'dxs', prefix: 'd',
  },
  {
    id: 450702, name: '钦南区', pid: '450700', type: 'district', pinyin: 'qin nan qu', py: 'qnq', prefix: 'q',
  },
  {
    id: 450703, name: '钦北区', pid: '450700', type: 'district', pinyin: 'qin bei qu', py: 'qbq', prefix: 'q',
  },
  {
    id: 450721, name: '灵山县', pid: '450700', type: 'district', pinyin: 'ling shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 450722, name: '浦北县', pid: '450700', type: 'district', pinyin: 'pu bei xian', py: 'pbx', prefix: 'p',
  },
  {
    id: 450802, name: '港北区', pid: '450800', type: 'district', pinyin: 'gang bei qu', py: 'gbq', prefix: 'g',
  },
  {
    id: 450803, name: '港南区', pid: '450800', type: 'district', pinyin: 'gang nan qu', py: 'gnq', prefix: 'g',
  },
  {
    id: 450804, name: '覃塘区', pid: '450800', type: 'district', pinyin: 'tan tang qu', py: 'ttq', prefix: 't',
  },
  {
    id: 450821, name: '平南县', pid: '450800', type: 'district', pinyin: 'ping nan xian', py: 'pnx', prefix: 'p',
  },
  {
    id: 450881, name: '桂平市', pid: '450800', type: 'district', pinyin: 'gui ping shi', py: 'gps', prefix: 'g',
  },
  {
    id: 450902, name: '玉州区', pid: '450900', type: 'district', pinyin: 'yu zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 450903, name: '福绵区', pid: '450900', type: 'district', pinyin: 'fu mian qu', py: 'fmq', prefix: 'f',
  },
  {
    id: 450921, name: '容县', pid: '450900', type: 'district', pinyin: 'rong xian', py: 'rx', prefix: 'r',
  },
  {
    id: 450922, name: '陆川县', pid: '450900', type: 'district', pinyin: 'lu chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 450923, name: '博白县', pid: '450900', type: 'district', pinyin: 'bo bai xian', py: 'bbx', prefix: 'b',
  },
  {
    id: 450924, name: '兴业县', pid: '450900', type: 'district', pinyin: 'xing ye xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 450981, name: '北流市', pid: '450900', type: 'district', pinyin: 'bei liu shi', py: 'bls', prefix: 'b',
  },
  {
    id: 451002, name: '右江区', pid: '451000', type: 'district', pinyin: 'you jiang qu', py: 'yjq', prefix: 'y',
  },
  {
    id: 451021, name: '田阳县', pid: '451000', type: 'district', pinyin: 'tian yang xian', py: 'tyx', prefix: 't',
  },
  {
    id: 451022, name: '田东县', pid: '451000', type: 'district', pinyin: 'tian dong xian', py: 'tdx', prefix: 't',
  },
  {
    id: 451023, name: '平果县', pid: '451000', type: 'district', pinyin: 'ping guo xian', py: 'pgx', prefix: 'p',
  },
  {
    id: 451024, name: '德保县', pid: '451000', type: 'district', pinyin: 'de bao xian', py: 'dbx', prefix: 'd',
  },
  {
    id: 451025, name: '靖西县', pid: '451000', type: 'district', pinyin: 'jing xi xian', py: 'jxx', prefix: 'j',
  },
  {
    id: 451026, name: '那坡县', pid: '451000', type: 'district', pinyin: 'nei po xian', py: 'npx', prefix: 'n',
  },
  {
    id: 451027, name: '凌云县', pid: '451000', type: 'district', pinyin: 'ling yun xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 451028, name: '乐业县', pid: '451000', type: 'district', pinyin: 'le ye xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 451029, name: '田林县', pid: '451000', type: 'district', pinyin: 'tian lin xian', py: 'tlx', prefix: 't',
  },
  {
    id: 451030, name: '西林县', pid: '451000', type: 'district', pinyin: 'xi lin xian', py: 'xlx', prefix: 'x',
  },
  {
    id: 451031, name: '隆林各族自治县', pid: '451000', type: 'district', pinyin: 'long lin ge zu zi zhi xian', py: 'llgzzzx', prefix: 'l',
  },
  {
    id: 451102, name: '八步区', pid: '451100', type: 'district', pinyin: 'ba bu qu', py: 'bbq', prefix: 'b',
  },
  {
    id: 451121, name: '昭平县', pid: '451100', type: 'district', pinyin: 'zhao ping xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 451122, name: '钟山县', pid: '451100', type: 'district', pinyin: 'zhong shan xian', py: 'zsx', prefix: 'z',
  },
  {
    id: 451123, name: '富川瑶族自治县', pid: '451100', type: 'district', pinyin: 'fu chuan yao zu zi zhi xian', py: 'fcyzzzx', prefix: 'f',
  },
  {
    id: 451202, name: '金城江区', pid: '451200', type: 'district', pinyin: 'jin cheng jiang qu', py: 'jcjq', prefix: 'j',
  },
  {
    id: 451221, name: '南丹县', pid: '451200', type: 'district', pinyin: 'nan dan xian', py: 'ndx', prefix: 'n',
  },
  {
    id: 451222, name: '天峨县', pid: '451200', type: 'district', pinyin: 'tian e xian', py: 'tex', prefix: 't',
  },
  {
    id: 451223, name: '凤山县', pid: '451200', type: 'district', pinyin: 'feng shan xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 451224, name: '东兰县', pid: '451200', type: 'district', pinyin: 'dong lan xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 451225, name: '罗城仫佬族自治县', pid: '451200', type: 'district', pinyin: 'luo cheng mu lao zu zi zhi xian', py: 'lcmlzzzx', prefix: 'l',
  },
  {
    id: 451226, name: '环江毛南族自治县', pid: '451200', type: 'district', pinyin: 'huan jiang mao nan zu zi zhi xian', py: 'hjmnzzzx', prefix: 'h',
  },
  {
    id: 451227, name: '巴马瑶族自治县', pid: '451200', type: 'district', pinyin: 'ba ma yao zu zi zhi xian', py: 'bmyzzzx', prefix: 'b',
  },
  {
    id: 451228, name: '都安瑶族自治县', pid: '451200', type: 'district', pinyin: 'dou an yao zu zi zhi xian', py: 'dayzzzx', prefix: 'd',
  },
  {
    id: 451229, name: '大化瑶族自治县', pid: '451200', type: 'district', pinyin: 'da hua yao zu zi zhi xian', py: 'dhyzzzx', prefix: 'd',
  },
  {
    id: 451281, name: '宜州市', pid: '451200', type: 'district', pinyin: 'yi zhou shi', py: 'yzs', prefix: 'y',
  },
  {
    id: 451302, name: '兴宾区', pid: '451300', type: 'district', pinyin: 'xing bin qu', py: 'xbq', prefix: 'x',
  },
  {
    id: 451321, name: '忻城县', pid: '451300', type: 'district', pinyin: 'xin cheng xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 451322, name: '象州县', pid: '451300', type: 'district', pinyin: 'xiang zhou xian', py: 'xzx', prefix: 'x',
  },
  {
    id: 451323, name: '武宣县', pid: '451300', type: 'district', pinyin: 'wu xuan xian', py: 'wxx', prefix: 'w',
  },
  {
    id: 451324, name: '金秀瑶族自治县', pid: '451300', type: 'district', pinyin: 'jin xiu yao zu zi zhi xian', py: 'jxyzzzx', prefix: 'j',
  },
  {
    id: 451381, name: '合山市', pid: '451300', type: 'district', pinyin: 'he shan shi', py: 'hss', prefix: 'h',
  },
  {
    id: 451402, name: '江州区', pid: '451400', type: 'district', pinyin: 'jiang zhou qu', py: 'jzq', prefix: 'j',
  },
  {
    id: 451421, name: '扶绥县', pid: '451400', type: 'district', pinyin: 'fu sui xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 451422, name: '宁明县', pid: '451400', type: 'district', pinyin: 'ning ming xian', py: 'nmx', prefix: 'n',
  },
  {
    id: 451423, name: '龙州县', pid: '451400', type: 'district', pinyin: 'long zhou xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 451424, name: '大新县', pid: '451400', type: 'district', pinyin: 'da xin xian', py: 'dxx', prefix: 'd',
  },
  {
    id: 451425, name: '天等县', pid: '451400', type: 'district', pinyin: 'tian deng xian', py: 'tdx', prefix: 't',
  },
  {
    id: 451481, name: '凭祥市', pid: '451400', type: 'district', pinyin: 'ping xiang shi', py: 'pxs', prefix: 'p',
  },
  {
    id: 460105, name: '秀英区', pid: '460100', type: 'district', pinyin: 'xiu ying qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 460106, name: '龙华区', pid: '460100', type: 'district', pinyin: 'long hua qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 460107, name: '琼山区', pid: '460100', type: 'district', pinyin: 'qiong shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 460108, name: '美兰区', pid: '460100', type: 'district', pinyin: 'mei lan qu', py: 'mlq', prefix: 'm',
  },
  {
    id: 460321, name: '西沙群岛', pid: '460300', type: 'district', pinyin: 'xi sha qun dao', py: 'xsqd', prefix: 'x',
  },
  {
    id: 460322, name: '南沙群岛', pid: '460300', type: 'district', pinyin: 'nan sha qun dao', py: 'nsqd', prefix: 'n',
  },
  {
    id: 460323, name: '中沙群岛的岛礁及其海域', pid: '460300', type: 'district', pinyin: 'zhong sha qun dao de dao jiao ji qi hai yu', py: 'zsqdddjjqhy', prefix: 'z',
  },
  {
    id: 469001, name: '五指山市', pid: '469000', type: 'district', pinyin: 'wu zhi shan shi', py: 'wzss', prefix: 'w',
  },
  {
    id: 469002, name: '琼海市', pid: '469000', type: 'district', pinyin: 'qiong hai shi', py: 'qhs', prefix: 'q',
  },
  {
    id: 469003, name: '儋州市', pid: '469000', type: 'district', pinyin: 'dan zhou shi', py: 'dzs', prefix: 'd',
  },
  {
    id: 469005, name: '文昌市', pid: '469000', type: 'district', pinyin: 'wen chang shi', py: 'wcs', prefix: 'w',
  },
  {
    id: 469006, name: '万宁市', pid: '469000', type: 'district', pinyin: 'wan ning shi', py: 'wns', prefix: 'w',
  },
  {
    id: 469007, name: '东方市', pid: '469000', type: 'district', pinyin: 'dong fang shi', py: 'dfs', prefix: 'd',
  },
  {
    id: 469021, name: '定安县', pid: '469000', type: 'district', pinyin: 'ding an xian', py: 'dax', prefix: 'd',
  },
  {
    id: 469022, name: '屯昌县', pid: '469000', type: 'district', pinyin: 'tun chang xian', py: 'tcx', prefix: 't',
  },
  {
    id: 469023, name: '澄迈县', pid: '469000', type: 'district', pinyin: 'cheng mai xian', py: 'cmx', prefix: 'c',
  },
  {
    id: 469024, name: '临高县', pid: '469000', type: 'district', pinyin: 'lin gao xian', py: 'lgx', prefix: 'l',
  },
  {
    id: 469025, name: '白沙黎族自治县', pid: '469000', type: 'district', pinyin: 'bai sha li zu zi zhi xian', py: 'bslzzzx', prefix: 'b',
  },
  {
    id: 469026, name: '昌江黎族自治县', pid: '469000', type: 'district', pinyin: 'chang jiang li zu zi zhi xian', py: 'cjlzzzx', prefix: 'c',
  },
  {
    id: 469027, name: '乐东黎族自治县', pid: '469000', type: 'district', pinyin: 'le dong li zu zi zhi xian', py: 'ldlzzzx', prefix: 'l',
  },
  {
    id: 469028, name: '陵水黎族自治县', pid: '469000', type: 'district', pinyin: 'ling shui li zu zi zhi xian', py: 'lslzzzx', prefix: 'l',
  },
  {
    id: 469029, name: '保亭黎族苗族自治县', pid: '469000', type: 'district', pinyin: 'bao ting li zu miao zu zi zhi xian', py: 'btlzmzzzx', prefix: 'b',
  },
  {
    id: 469030, name: '琼中黎族苗族自治县', pid: '469000', type: 'district', pinyin: 'qiong zhong li zu miao zu zi zhi xian', py: 'qzlzmzzzx', prefix: 'q',
  },
  {
    id: 500101, name: '万州区', pid: '500100', type: 'district', pinyin: 'wan zhou qu', py: 'wzq', prefix: 'w',
  },
  {
    id: 500102, name: '涪陵区', pid: '500100', type: 'district', pinyin: 'fu ling qu', py: 'flq', prefix: 'f',
  },
  {
    id: 500103, name: '渝中区', pid: '500100', type: 'district', pinyin: 'yu zhong qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 500104, name: '大渡口区', pid: '500100', type: 'district', pinyin: 'da du kou qu', py: 'ddkq', prefix: 'd',
  },
  {
    id: 500105, name: '江北区', pid: '500100', type: 'district', pinyin: 'jiang bei qu', py: 'jbq', prefix: 'j',
  },
  {
    id: 500106, name: '沙坪坝区', pid: '500100', type: 'district', pinyin: 'sha ping ba qu', py: 'spbq', prefix: 's',
  },
  {
    id: 500107, name: '九龙坡区', pid: '500100', type: 'district', pinyin: 'jiu long po qu', py: 'jlpq', prefix: 'j',
  },
  {
    id: 500108, name: '南岸区', pid: '500100', type: 'district', pinyin: 'nan an qu', py: 'naq', prefix: 'n',
  },
  {
    id: 500109, name: '北碚区', pid: '500100', type: 'district', pinyin: 'bei bei qu', py: 'bbq', prefix: 'b',
  },
  {
    id: 500110, name: '綦江区', pid: '500100', type: 'district', pinyin: 'qi jiang qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 500111, name: '大足区', pid: '500100', type: 'district', pinyin: 'da zu qu', py: 'dzq', prefix: 'd',
  },
  {
    id: 500112, name: '渝北区', pid: '500100', type: 'district', pinyin: 'yu bei qu', py: 'ybq', prefix: 'y',
  },
  {
    id: 500113, name: '巴南区', pid: '500100', type: 'district', pinyin: 'ba nan qu', py: 'bnq', prefix: 'b',
  },
  {
    id: 500114, name: '黔江区', pid: '500100', type: 'district', pinyin: 'qian jiang qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 500115, name: '长寿区', pid: '500100', type: 'district', pinyin: 'chang shou qu', py: 'csq', prefix: 'c',
  },
  {
    id: 500116, name: '江津区', pid: '500100', type: 'district', pinyin: 'jiang jin qu', py: 'jjq', prefix: 'j',
  },
  {
    id: 500117, name: '合川区', pid: '500100', type: 'district', pinyin: 'he chuan qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 500118, name: '永川区', pid: '500100', type: 'district', pinyin: 'yong chuan qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 500119, name: '南川区', pid: '500100', type: 'district', pinyin: 'nan chuan qu', py: 'ncq', prefix: 'n',
  },
  {
    id: 500223, name: '潼南县', pid: '500200', type: 'district', pinyin: 'tong nan xian', py: 'tnx', prefix: 't',
  },
  {
    id: 500224, name: '铜梁县', pid: '500200', type: 'district', pinyin: 'tong liang xian', py: 'tlx', prefix: 't',
  },
  {
    id: 500226, name: '荣昌县', pid: '500200', type: 'district', pinyin: 'rong chang xian', py: 'rcx', prefix: 'r',
  },
  {
    id: 500227, name: '璧山县', pid: '500200', type: 'district', pinyin: 'bi shan xian', py: 'bsx', prefix: 'b',
  },
  {
    id: 500228, name: '梁平县', pid: '500200', type: 'district', pinyin: 'liang ping xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 500229, name: '城口县', pid: '500200', type: 'district', pinyin: 'cheng kou xian', py: 'ckx', prefix: 'c',
  },
  {
    id: 500230, name: '丰都县', pid: '500200', type: 'district', pinyin: 'feng dou xian', py: 'fdx', prefix: 'f',
  },
  {
    id: 500231, name: '垫江县', pid: '500200', type: 'district', pinyin: 'dian jiang xian', py: 'djx', prefix: 'd',
  },
  {
    id: 500232, name: '武隆县', pid: '500200', type: 'district', pinyin: 'wu long xian', py: 'wlx', prefix: 'w',
  },
  {
    id: 500233, name: '忠县', pid: '500200', type: 'district', pinyin: 'zhong xian', py: 'zx', prefix: 'z',
  },
  {
    id: 500234, name: '开县', pid: '500200', type: 'district', pinyin: 'kai xian', py: 'kx', prefix: 'k',
  },
  {
    id: 500235, name: '云阳县', pid: '500200', type: 'district', pinyin: 'yun yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 500236, name: '奉节县', pid: '500200', type: 'district', pinyin: 'feng jie xian', py: 'fjx', prefix: 'f',
  },
  {
    id: 500237, name: '巫山县', pid: '500200', type: 'district', pinyin: 'wu shan xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 500238, name: '巫溪县', pid: '500200', type: 'district', pinyin: 'wu xi xian', py: 'wxx', prefix: 'w',
  },
  {
    id: 500240, name: '石柱土家族自治县', pid: '500200', type: 'district', pinyin: 'shi zhu tu jia zu zi zhi xian', py: 'sztjzzzx', prefix: 's',
  },
  {
    id: 500241, name: '秀山土家族苗族自治县', pid: '500200', type: 'district', pinyin: 'xiu shan tu jia zu miao zu zi zhi xian', py: 'xstjzmzzzx', prefix: 'x',
  },
  {
    id: 500242, name: '酉阳土家族苗族自治县', pid: '500200', type: 'district', pinyin: 'you yang tu jia zu miao zu zi zhi xian', py: 'yytjzmzzzx', prefix: 'y',
  },
  {
    id: 500243, name: '彭水苗族土家族自治县', pid: '500200', type: 'district', pinyin: 'peng shui miao zu tu jia zu zi zhi xian', py: 'psmztjzzzx', prefix: 'p',
  },
  {
    id: 510104, name: '锦江区', pid: '510100', type: 'district', pinyin: 'jin jiang qu', py: 'jjq', prefix: 'j',
  },
  {
    id: 510105, name: '青羊区', pid: '510100', type: 'district', pinyin: 'qing yang qu', py: 'qyq', prefix: 'q',
  },
  {
    id: 510106, name: '金牛区', pid: '510100', type: 'district', pinyin: 'jin niu qu', py: 'jnq', prefix: 'j',
  },
  {
    id: 510107, name: '武侯区', pid: '510100', type: 'district', pinyin: 'wu hou qu', py: 'whq', prefix: 'w',
  },
  {
    id: 510108, name: '成华区', pid: '510100', type: 'district', pinyin: 'cheng hua qu', py: 'chq', prefix: 'c',
  },
  {
    id: 510112, name: '龙泉驿区', pid: '510100', type: 'district', pinyin: 'long quan yi qu', py: 'lqyq', prefix: 'l',
  },
  {
    id: 510113, name: '青白江区', pid: '510100', type: 'district', pinyin: 'qing bai jiang qu', py: 'qbjq', prefix: 'q',
  },
  {
    id: 510114, name: '新都区', pid: '510100', type: 'district', pinyin: 'xin dou qu', py: 'xdq', prefix: 'x',
  },
  {
    id: 510115, name: '温江区', pid: '510100', type: 'district', pinyin: 'wen jiang qu', py: 'wjq', prefix: 'w',
  },
  {
    id: 510121, name: '金堂县', pid: '510100', type: 'district', pinyin: 'jin tang xian', py: 'jtx', prefix: 'j',
  },
  {
    id: 510122, name: '双流县', pid: '510100', type: 'district', pinyin: 'shuang liu xian', py: 'slx', prefix: 's',
  },
  {
    id: 510124, name: '郫县', pid: '510100', type: 'district', pinyin: 'pi xian', py: 'px', prefix: 'p',
  },
  {
    id: 510129, name: '大邑县', pid: '510100', type: 'district', pinyin: 'da yi xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 510131, name: '蒲江县', pid: '510100', type: 'district', pinyin: 'pu jiang xian', py: 'pjx', prefix: 'p',
  },
  {
    id: 510132, name: '新津县', pid: '510100', type: 'district', pinyin: 'xin jin xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 510181, name: '都江堰市', pid: '510100', type: 'district', pinyin: 'dou jiang yan shi', py: 'djys', prefix: 'd',
  },
  {
    id: 510182, name: '彭州市', pid: '510100', type: 'district', pinyin: 'peng zhou shi', py: 'pzs', prefix: 'p',
  },
  {
    id: 510183, name: '邛崃市', pid: '510100', type: 'district', pinyin: 'qiong lai shi', py: 'qls', prefix: 'q',
  },
  {
    id: 510184, name: '崇州市', pid: '510100', type: 'district', pinyin: 'chong zhou shi', py: 'czs', prefix: 'c',
  },
  {
    id: 510302, name: '自流井区', pid: '510300', type: 'district', pinyin: 'zi liu jing qu', py: 'zljq', prefix: 'z',
  },
  {
    id: 510303, name: '贡井区', pid: '510300', type: 'district', pinyin: 'gong jing qu', py: 'gjq', prefix: 'g',
  },
  {
    id: 510304, name: '大安区', pid: '510300', type: 'district', pinyin: 'da an qu', py: 'daq', prefix: 'd',
  },
  {
    id: 510311, name: '沿滩区', pid: '510300', type: 'district', pinyin: 'yan tan qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 510321, name: '荣县', pid: '510300', type: 'district', pinyin: 'rong xian', py: 'rx', prefix: 'r',
  },
  {
    id: 510322, name: '富顺县', pid: '510300', type: 'district', pinyin: 'fu shun xian', py: 'fsx', prefix: 'f',
  },
  {
    id: 510402, name: '东区', pid: '510400', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 510403, name: '西区', pid: '510400', type: 'district', pinyin: 'xi qu', py: 'xq', prefix: 'x',
  },
  {
    id: 510411, name: '仁和区', pid: '510400', type: 'district', pinyin: 'ren he qu', py: 'rhq', prefix: 'r',
  },
  {
    id: 510421, name: '米易县', pid: '510400', type: 'district', pinyin: 'mi yi xian', py: 'myx', prefix: 'm',
  },
  {
    id: 510422, name: '盐边县', pid: '510400', type: 'district', pinyin: 'yan bian xian', py: 'ybx', prefix: 'y',
  },
  {
    id: 510502, name: '江阳区', pid: '510500', type: 'district', pinyin: 'jiang yang qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 510503, name: '纳溪区', pid: '510500', type: 'district', pinyin: 'na xi qu', py: 'nxq', prefix: 'n',
  },
  {
    id: 510504, name: '龙马潭区', pid: '510500', type: 'district', pinyin: 'long ma tan qu', py: 'lmtq', prefix: 'l',
  },
  {
    id: 510521, name: '泸县', pid: '510500', type: 'district', pinyin: 'lu xian', py: 'lx', prefix: 'l',
  },
  {
    id: 510522, name: '合江县', pid: '510500', type: 'district', pinyin: 'he jiang xian', py: 'hjx', prefix: 'h',
  },
  {
    id: 510524, name: '叙永县', pid: '510500', type: 'district', pinyin: 'xu yong xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 510525, name: '古蔺县', pid: '510500', type: 'district', pinyin: 'gu lin xian', py: 'glx', prefix: 'g',
  },
  {
    id: 510603, name: '旌阳区', pid: '510600', type: 'district', pinyin: 'jing yang qu', py: 'jyq', prefix: 'j',
  },
  {
    id: 510623, name: '中江县', pid: '510600', type: 'district', pinyin: 'zhong jiang xian', py: 'zjx', prefix: 'z',
  },
  {
    id: 510626, name: '罗江县', pid: '510600', type: 'district', pinyin: 'luo jiang xian', py: 'ljx', prefix: 'l',
  },
  {
    id: 510681, name: '广汉市', pid: '510600', type: 'district', pinyin: 'guang han shi', py: 'ghs', prefix: 'g',
  },
  {
    id: 510682, name: '什邡市', pid: '510600', type: 'district', pinyin: 'shen fang shi', py: 'sfs', prefix: 's',
  },
  {
    id: 510683, name: '绵竹市', pid: '510600', type: 'district', pinyin: 'mian zhu shi', py: 'mzs', prefix: 'm',
  },
  {
    id: 510703, name: '涪城区', pid: '510700', type: 'district', pinyin: 'fu cheng qu', py: 'fcq', prefix: 'f',
  },
  {
    id: 510704, name: '游仙区', pid: '510700', type: 'district', pinyin: 'you xian qu', py: 'yxq', prefix: 'y',
  },
  {
    id: 510722, name: '三台县', pid: '510700', type: 'district', pinyin: 'san tai xian', py: 'stx', prefix: 's',
  },
  {
    id: 510723, name: '盐亭县', pid: '510700', type: 'district', pinyin: 'yan ting xian', py: 'ytx', prefix: 'y',
  },
  {
    id: 510724, name: '安县', pid: '510700', type: 'district', pinyin: 'an xian', py: 'ax', prefix: 'a',
  },
  {
    id: 510725, name: '梓潼县', pid: '510700', type: 'district', pinyin: 'zi tong xian', py: 'ztx', prefix: 'z',
  },
  {
    id: 510726, name: '北川羌族自治县', pid: '510700', type: 'district', pinyin: 'bei chuan qiang zu zi zhi xian', py: 'bcqzzzx', prefix: 'b',
  },
  {
    id: 510727, name: '平武县', pid: '510700', type: 'district', pinyin: 'ping wu xian', py: 'pwx', prefix: 'p',
  },
  {
    id: 510781, name: '江油市', pid: '510700', type: 'district', pinyin: 'jiang you shi', py: 'jys', prefix: 'j',
  },
  {
    id: 510802, name: '利州区', pid: '510800', type: 'district', pinyin: 'li zhou qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 510811, name: '元坝区', pid: '510800', type: 'district', pinyin: 'yuan ba qu', py: 'ybq', prefix: 'y',
  },
  {
    id: 510812, name: '朝天区', pid: '510800', type: 'district', pinyin: 'chao tian qu', py: 'ctq', prefix: 'c',
  },
  {
    id: 510821, name: '旺苍县', pid: '510800', type: 'district', pinyin: 'wang cang xian', py: 'wcx', prefix: 'w',
  },
  {
    id: 510822, name: '青川县', pid: '510800', type: 'district', pinyin: 'qing chuan xian', py: 'qcx', prefix: 'q',
  },
  {
    id: 510823, name: '剑阁县', pid: '510800', type: 'district', pinyin: 'jian ge xian', py: 'jgx', prefix: 'j',
  },
  {
    id: 510824, name: '苍溪县', pid: '510800', type: 'district', pinyin: 'cang xi xian', py: 'cxx', prefix: 'c',
  },
  {
    id: 510903, name: '船山区', pid: '510900', type: 'district', pinyin: 'chuan shan qu', py: 'csq', prefix: 'c',
  },
  {
    id: 510904, name: '安居区', pid: '510900', type: 'district', pinyin: 'an ju qu', py: 'ajq', prefix: 'a',
  },
  {
    id: 510921, name: '蓬溪县', pid: '510900', type: 'district', pinyin: 'peng xi xian', py: 'pxx', prefix: 'p',
  },
  {
    id: 510922, name: '射洪县', pid: '510900', type: 'district', pinyin: 'she hong xian', py: 'shx', prefix: 's',
  },
  {
    id: 510923, name: '大英县', pid: '510900', type: 'district', pinyin: 'da ying xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 511002, name: '市中区', pid: '511000', type: 'district', pinyin: 'shi zhong qu', py: 'szq', prefix: 's',
  },
  {
    id: 511011, name: '东兴区', pid: '511000', type: 'district', pinyin: 'dong xing qu', py: 'dxq', prefix: 'd',
  },
  {
    id: 511024, name: '威远县', pid: '511000', type: 'district', pinyin: 'wei yuan xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 511025, name: '资中县', pid: '511000', type: 'district', pinyin: 'zi zhong xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 511028, name: '隆昌县', pid: '511000', type: 'district', pinyin: 'long chang xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 511102, name: '市中区', pid: '511100', type: 'district', pinyin: 'shi zhong qu', py: 'szq', prefix: 's',
  },
  {
    id: 511111, name: '沙湾区', pid: '511100', type: 'district', pinyin: 'sha wan qu', py: 'swq', prefix: 's',
  },
  {
    id: 511112, name: '五通桥区', pid: '511100', type: 'district', pinyin: 'wu tong qiao qu', py: 'wtqq', prefix: 'w',
  },
  {
    id: 511113, name: '金口河区', pid: '511100', type: 'district', pinyin: 'jin kou he qu', py: 'jkhq', prefix: 'j',
  },
  {
    id: 511123, name: '犍为县', pid: '511100', type: 'district', pinyin: 'jian wei xian', py: 'jwx', prefix: 'j',
  },
  {
    id: 511124, name: '井研县', pid: '511100', type: 'district', pinyin: 'jing yan xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 511126, name: '夹江县', pid: '511100', type: 'district', pinyin: 'jia jiang xian', py: 'jjx', prefix: 'j',
  },
  {
    id: 511129, name: '沐川县', pid: '511100', type: 'district', pinyin: 'mu chuan xian', py: 'mcx', prefix: 'm',
  },
  {
    id: 511132, name: '峨边彝族自治县', pid: '511100', type: 'district', pinyin: 'e bian yi zu zi zhi xian', py: 'ebyzzzx', prefix: 'e',
  },
  {
    id: 511133, name: '马边彝族自治县', pid: '511100', type: 'district', pinyin: 'ma bian yi zu zi zhi xian', py: 'mbyzzzx', prefix: 'm',
  },
  {
    id: 511181, name: '峨眉山市', pid: '511100', type: 'district', pinyin: 'e mei shan shi', py: 'emss', prefix: 'e',
  },
  {
    id: 511302, name: '顺庆区', pid: '511300', type: 'district', pinyin: 'shun qing qu', py: 'sqq', prefix: 's',
  },
  {
    id: 511303, name: '高坪区', pid: '511300', type: 'district', pinyin: 'gao ping qu', py: 'gpq', prefix: 'g',
  },
  {
    id: 511304, name: '嘉陵区', pid: '511300', type: 'district', pinyin: 'jia ling qu', py: 'jlq', prefix: 'j',
  },
  {
    id: 511321, name: '南部县', pid: '511300', type: 'district', pinyin: 'nan bu xian', py: 'nbx', prefix: 'n',
  },
  {
    id: 511322, name: '营山县', pid: '511300', type: 'district', pinyin: 'ying shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 511323, name: '蓬安县', pid: '511300', type: 'district', pinyin: 'peng an xian', py: 'pax', prefix: 'p',
  },
  {
    id: 511324, name: '仪陇县', pid: '511300', type: 'district', pinyin: 'yi long xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 511325, name: '西充县', pid: '511300', type: 'district', pinyin: 'xi chong xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 511381, name: '阆中市', pid: '511300', type: 'district', pinyin: 'lang zhong shi', py: 'lzs', prefix: 'l',
  },
  {
    id: 511402, name: '东坡区', pid: '511400', type: 'district', pinyin: 'dong po qu', py: 'dpq', prefix: 'd',
  },
  {
    id: 511421, name: '仁寿县', pid: '511400', type: 'district', pinyin: 'ren shou xian', py: 'rsx', prefix: 'r',
  },
  {
    id: 511422, name: '彭山县', pid: '511400', type: 'district', pinyin: 'peng shan xian', py: 'psx', prefix: 'p',
  },
  {
    id: 511423, name: '洪雅县', pid: '511400', type: 'district', pinyin: 'hong ya xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 511424, name: '丹棱县', pid: '511400', type: 'district', pinyin: 'dan leng xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 511425, name: '青神县', pid: '511400', type: 'district', pinyin: 'qing shen xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 511502, name: '翠屏区', pid: '511500', type: 'district', pinyin: 'cui ping qu', py: 'cpq', prefix: 'c',
  },
  {
    id: 511503, name: '南溪区', pid: '511500', type: 'district', pinyin: 'nan xi qu', py: 'nxq', prefix: 'n',
  },
  {
    id: 511521, name: '宜宾县', pid: '511500', type: 'district', pinyin: 'yi bin xian', py: 'ybx', prefix: 'y',
  },
  {
    id: 511523, name: '江安县', pid: '511500', type: 'district', pinyin: 'jiang an xian', py: 'jax', prefix: 'j',
  },
  {
    id: 511524, name: '长宁县', pid: '511500', type: 'district', pinyin: 'chang ning xian', py: 'cnx', prefix: 'c',
  },
  {
    id: 511525, name: '高县', pid: '511500', type: 'district', pinyin: 'gao xian', py: 'gx', prefix: 'g',
  },
  {
    id: 511526, name: '珙县', pid: '511500', type: 'district', pinyin: 'gong xian', py: 'gx', prefix: 'g',
  },
  {
    id: 511527, name: '筠连县', pid: '511500', type: 'district', pinyin: 'yun lian xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 511528, name: '兴文县', pid: '511500', type: 'district', pinyin: 'xing wen xian', py: 'xwx', prefix: 'x',
  },
  {
    id: 511529, name: '屏山县', pid: '511500', type: 'district', pinyin: 'ping shan xian', py: 'psx', prefix: 'p',
  },
  {
    id: 511602, name: '广安区', pid: '511600', type: 'district', pinyin: 'guang an qu', py: 'gaq', prefix: 'g',
  },
  {
    id: 511603, name: '前锋区', pid: '511600', type: 'district', pinyin: 'qian feng qu', py: 'qfq', prefix: 'q',
  },
  {
    id: 511621, name: '岳池县', pid: '511600', type: 'district', pinyin: 'yue chi xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 511622, name: '武胜县', pid: '511600', type: 'district', pinyin: 'wu sheng xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 511623, name: '邻水县', pid: '511600', type: 'district', pinyin: 'lin shui xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 511681, name: '华蓥市', pid: '511600', type: 'district', pinyin: 'hua ying shi', py: 'hys', prefix: 'h',
  },
  {
    id: 511702, name: '通川区', pid: '511700', type: 'district', pinyin: 'tong chuan qu', py: 'tcq', prefix: 't',
  },
  {
    id: 511703, name: '达川区', pid: '511700', type: 'district', pinyin: 'da chuan qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 511722, name: '宣汉县', pid: '511700', type: 'district', pinyin: 'xuan han xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 511723, name: '开江县', pid: '511700', type: 'district', pinyin: 'kai jiang xian', py: 'kjx', prefix: 'k',
  },
  {
    id: 511724, name: '大竹县', pid: '511700', type: 'district', pinyin: 'da zhu xian', py: 'dzx', prefix: 'd',
  },
  {
    id: 511725, name: '渠县', pid: '511700', type: 'district', pinyin: 'qu xian', py: 'qx', prefix: 'q',
  },
  {
    id: 511781, name: '万源市', pid: '511700', type: 'district', pinyin: 'wan yuan shi', py: 'wys', prefix: 'w',
  },
  {
    id: 511802, name: '雨城区', pid: '511800', type: 'district', pinyin: 'yu cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 511803, name: '名山区', pid: '511800', type: 'district', pinyin: 'ming shan qu', py: 'msq', prefix: 'm',
  },
  {
    id: 511822, name: '荥经县', pid: '511800', type: 'district', pinyin: 'ying jing xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 511823, name: '汉源县', pid: '511800', type: 'district', pinyin: 'han yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 511824, name: '石棉县', pid: '511800', type: 'district', pinyin: 'shi mian xian', py: 'smx', prefix: 's',
  },
  {
    id: 511825, name: '天全县', pid: '511800', type: 'district', pinyin: 'tian quan xian', py: 'tqx', prefix: 't',
  },
  {
    id: 511826, name: '芦山县', pid: '511800', type: 'district', pinyin: 'lu shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 511827, name: '宝兴县', pid: '511800', type: 'district', pinyin: 'bao xing xian', py: 'bxx', prefix: 'b',
  },
  {
    id: 511902, name: '巴州区', pid: '511900', type: 'district', pinyin: 'ba zhou qu', py: 'bzq', prefix: 'b',
  },
  {
    id: 511903, name: '恩阳区', pid: '511900', type: 'district', pinyin: 'en yang qu', py: 'eyq', prefix: 'e',
  },
  {
    id: 511921, name: '通江县', pid: '511900', type: 'district', pinyin: 'tong jiang xian', py: 'tjx', prefix: 't',
  },
  {
    id: 511922, name: '南江县', pid: '511900', type: 'district', pinyin: 'nan jiang xian', py: 'njx', prefix: 'n',
  },
  {
    id: 511923, name: '平昌县', pid: '511900', type: 'district', pinyin: 'ping chang xian', py: 'pcx', prefix: 'p',
  },
  {
    id: 512002, name: '雁江区', pid: '512000', type: 'district', pinyin: 'yan jiang qu', py: 'yjq', prefix: 'y',
  },
  {
    id: 512021, name: '安岳县', pid: '512000', type: 'district', pinyin: 'an yue xian', py: 'ayx', prefix: 'a',
  },
  {
    id: 512022, name: '乐至县', pid: '512000', type: 'district', pinyin: 'le zhi xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 512081, name: '简阳市', pid: '512000', type: 'district', pinyin: 'jian yang shi', py: 'jys', prefix: 'j',
  },
  {
    id: 513221, name: '汶川县', pid: '513200', type: 'district', pinyin: 'wen chuan xian', py: 'wcx', prefix: 'w',
  },
  {
    id: 513222, name: '理县', pid: '513200', type: 'district', pinyin: 'li xian', py: 'lx', prefix: 'l',
  },
  {
    id: 513223, name: '茂县', pid: '513200', type: 'district', pinyin: 'mao xian', py: 'mx', prefix: 'm',
  },
  {
    id: 513224, name: '松潘县', pid: '513200', type: 'district', pinyin: 'song pan xian', py: 'spx', prefix: 's',
  },
  {
    id: 513225, name: '九寨沟县', pid: '513200', type: 'district', pinyin: 'jiu zhai gou xian', py: 'jzgx', prefix: 'j',
  },
  {
    id: 513226, name: '金川县', pid: '513200', type: 'district', pinyin: 'jin chuan xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 513227, name: '小金县', pid: '513200', type: 'district', pinyin: 'xiao jin xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 513228, name: '黑水县', pid: '513200', type: 'district', pinyin: 'hei shui xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 513229, name: '马尔康县', pid: '513200', type: 'district', pinyin: 'ma er kang xian', py: 'mekx', prefix: 'm',
  },
  {
    id: 513230, name: '壤塘县', pid: '513200', type: 'district', pinyin: 'rang tang xian', py: 'rtx', prefix: 'r',
  },
  {
    id: 513231, name: '阿坝县', pid: '513200', type: 'district', pinyin: 'a ba xian', py: 'abx', prefix: 'a',
  },
  {
    id: 513232, name: '若尔盖县', pid: '513200', type: 'district', pinyin: 'ruo er gai xian', py: 'regx', prefix: 'r',
  },
  {
    id: 513233, name: '红原县', pid: '513200', type: 'district', pinyin: 'hong yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 513321, name: '康定县', pid: '513300', type: 'district', pinyin: 'kang ding xian', py: 'kdx', prefix: 'k',
  },
  {
    id: 513322, name: '泸定县', pid: '513300', type: 'district', pinyin: 'lu ding xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 513323, name: '丹巴县', pid: '513300', type: 'district', pinyin: 'dan ba xian', py: 'dbx', prefix: 'd',
  },
  {
    id: 513324, name: '九龙县', pid: '513300', type: 'district', pinyin: 'jiu long xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 513325, name: '雅江县', pid: '513300', type: 'district', pinyin: 'ya jiang xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 513326, name: '道孚县', pid: '513300', type: 'district', pinyin: 'dao fu xian', py: 'dfx', prefix: 'd',
  },
  {
    id: 513327, name: '炉霍县', pid: '513300', type: 'district', pinyin: 'lu huo xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 513328, name: '甘孜县', pid: '513300', type: 'district', pinyin: 'gan zi xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 513329, name: '新龙县', pid: '513300', type: 'district', pinyin: 'xin long xian', py: 'xlx', prefix: 'x',
  },
  {
    id: 513330, name: '德格县', pid: '513300', type: 'district', pinyin: 'de ge xian', py: 'dgx', prefix: 'd',
  },
  {
    id: 513331, name: '白玉县', pid: '513300', type: 'district', pinyin: 'bai yu xian', py: 'byx', prefix: 'b',
  },
  {
    id: 513332, name: '石渠县', pid: '513300', type: 'district', pinyin: 'shi qu xian', py: 'sqx', prefix: 's',
  },
  {
    id: 513333, name: '色达县', pid: '513300', type: 'district', pinyin: 'se da xian', py: 'sdx', prefix: 's',
  },
  {
    id: 513334, name: '理塘县', pid: '513300', type: 'district', pinyin: 'li tang xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 513335, name: '巴塘县', pid: '513300', type: 'district', pinyin: 'ba tang xian', py: 'btx', prefix: 'b',
  },
  {
    id: 513336, name: '乡城县', pid: '513300', type: 'district', pinyin: 'xiang cheng xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 513337, name: '稻城县', pid: '513300', type: 'district', pinyin: 'dao cheng xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 513338, name: '得荣县', pid: '513300', type: 'district', pinyin: 'de rong xian', py: 'drx', prefix: 'd',
  },
  {
    id: 513401, name: '西昌市', pid: '513400', type: 'district', pinyin: 'xi chang shi', py: 'xcs', prefix: 'x',
  },
  {
    id: 513422, name: '木里藏族自治县', pid: '513400', type: 'district', pinyin: 'mu li zang zu zi zhi xian', py: 'mlzzzzx', prefix: 'm',
  },
  {
    id: 513423, name: '盐源县', pid: '513400', type: 'district', pinyin: 'yan yuan xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 513424, name: '德昌县', pid: '513400', type: 'district', pinyin: 'de chang xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 513425, name: '会理县', pid: '513400', type: 'district', pinyin: 'hui li xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 513426, name: '会东县', pid: '513400', type: 'district', pinyin: 'hui dong xian', py: 'hdx', prefix: 'h',
  },
  {
    id: 513427, name: '宁南县', pid: '513400', type: 'district', pinyin: 'ning nan xian', py: 'nnx', prefix: 'n',
  },
  {
    id: 513428, name: '普格县', pid: '513400', type: 'district', pinyin: 'pu ge xian', py: 'pgx', prefix: 'p',
  },
  {
    id: 513429, name: '布拖县', pid: '513400', type: 'district', pinyin: 'bu tuo xian', py: 'btx', prefix: 'b',
  },
  {
    id: 513430, name: '金阳县', pid: '513400', type: 'district', pinyin: 'jin yang xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 513431, name: '昭觉县', pid: '513400', type: 'district', pinyin: 'zhao jue xian', py: 'zjx', prefix: 'z',
  },
  {
    id: 513432, name: '喜德县', pid: '513400', type: 'district', pinyin: 'xi de xian', py: 'xdx', prefix: 'x',
  },
  {
    id: 513433, name: '冕宁县', pid: '513400', type: 'district', pinyin: 'mian ning xian', py: 'mnx', prefix: 'm',
  },
  {
    id: 513434, name: '越西县', pid: '513400', type: 'district', pinyin: 'yue xi xian', py: 'yxx', prefix: 'y',
  },
  {
    id: 513435, name: '甘洛县', pid: '513400', type: 'district', pinyin: 'gan luo xian', py: 'glx', prefix: 'g',
  },
  {
    id: 513436, name: '美姑县', pid: '513400', type: 'district', pinyin: 'mei gu xian', py: 'mgx', prefix: 'm',
  },
  {
    id: 513437, name: '雷波县', pid: '513400', type: 'district', pinyin: 'lei bo xian', py: 'lbx', prefix: 'l',
  },
  {
    id: 520102, name: '南明区', pid: '520100', type: 'district', pinyin: 'nan ming qu', py: 'nmq', prefix: 'n',
  },
  {
    id: 520103, name: '云岩区', pid: '520100', type: 'district', pinyin: 'yun yan qu', py: 'yyq', prefix: 'y',
  },
  {
    id: 520111, name: '花溪区', pid: '520100', type: 'district', pinyin: 'hua xi qu', py: 'hxq', prefix: 'h',
  },
  {
    id: 520112, name: '乌当区', pid: '520100', type: 'district', pinyin: 'wu dang qu', py: 'wdq', prefix: 'w',
  },
  {
    id: 520113, name: '白云区', pid: '520100', type: 'district', pinyin: 'bai yun qu', py: 'byq', prefix: 'b',
  },
  {
    id: 520115, name: '观山湖区', pid: '520100', type: 'district', pinyin: 'guan shan hu qu', py: 'gshq', prefix: 'g',
  },
  {
    id: 520121, name: '开阳县', pid: '520100', type: 'district', pinyin: 'kai yang xian', py: 'kyx', prefix: 'k',
  },
  {
    id: 520122, name: '息烽县', pid: '520100', type: 'district', pinyin: 'xi feng xian', py: 'xfx', prefix: 'x',
  },
  {
    id: 520123, name: '修文县', pid: '520100', type: 'district', pinyin: 'xiu wen xian', py: 'xwx', prefix: 'x',
  },
  {
    id: 520181, name: '清镇市', pid: '520100', type: 'district', pinyin: 'qing zhen shi', py: 'qzs', prefix: 'q',
  },
  {
    id: 520201, name: '钟山区', pid: '520200', type: 'district', pinyin: 'zhong shan qu', py: 'zsq', prefix: 'z',
  },
  {
    id: 520203, name: '六枝特区', pid: '520200', type: 'district', pinyin: 'liu zhi te qu', py: 'lztq', prefix: 'l',
  },
  {
    id: 520221, name: '水城县', pid: '520200', type: 'district', pinyin: 'shui cheng xian', py: 'scx', prefix: 's',
  },
  {
    id: 520222, name: '盘县', pid: '520200', type: 'district', pinyin: 'pan xian', py: 'px', prefix: 'p',
  },
  {
    id: 520302, name: '红花岗区', pid: '520300', type: 'district', pinyin: 'hong hua gang qu', py: 'hhgq', prefix: 'h',
  },
  {
    id: 520303, name: '汇川区', pid: '520300', type: 'district', pinyin: 'hui chuan qu', py: 'hcq', prefix: 'h',
  },
  {
    id: 520321, name: '遵义县', pid: '520300', type: 'district', pinyin: 'zun yi xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 520322, name: '桐梓县', pid: '520300', type: 'district', pinyin: 'tong zi xian', py: 'tzx', prefix: 't',
  },
  {
    id: 520323, name: '绥阳县', pid: '520300', type: 'district', pinyin: 'sui yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 520324, name: '正安县', pid: '520300', type: 'district', pinyin: 'zheng an xian', py: 'zax', prefix: 'z',
  },
  {
    id: 520325, name: '道真仡佬族苗族自治县', pid: '520300', type: 'district', pinyin: 'dao zhen ge lao zu miao zu zi zhi xian', py: 'dzglzmzzzx', prefix: 'd',
  },
  {
    id: 520326, name: '务川仡佬族苗族自治县', pid: '520300', type: 'district', pinyin: 'wu chuan ge lao zu miao zu zi zhi xian', py: 'wcglzmzzzx', prefix: 'w',
  },
  {
    id: 520327, name: '凤冈县', pid: '520300', type: 'district', pinyin: 'feng gang xian', py: 'fgx', prefix: 'f',
  },
  {
    id: 520328, name: '湄潭县', pid: '520300', type: 'district', pinyin: 'mei tan xian', py: 'mtx', prefix: 'm',
  },
  {
    id: 520329, name: '余庆县', pid: '520300', type: 'district', pinyin: 'yu qing xian', py: 'yqx', prefix: 'y',
  },
  {
    id: 520330, name: '习水县', pid: '520300', type: 'district', pinyin: 'xi shui xian', py: 'xsx', prefix: 'x',
  },
  {
    id: 520381, name: '赤水市', pid: '520300', type: 'district', pinyin: 'chi shui shi', py: 'css', prefix: 'c',
  },
  {
    id: 520382, name: '仁怀市', pid: '520300', type: 'district', pinyin: 'ren huai shi', py: 'rhs', prefix: 'r',
  },
  {
    id: 520402, name: '西秀区', pid: '520400', type: 'district', pinyin: 'xi xiu qu', py: 'xxq', prefix: 'x',
  },
  {
    id: 520421, name: '平坝县', pid: '520400', type: 'district', pinyin: 'ping ba xian', py: 'pbx', prefix: 'p',
  },
  {
    id: 520422, name: '普定县', pid: '520400', type: 'district', pinyin: 'pu ding xian', py: 'pdx', prefix: 'p',
  },
  {
    id: 520423, name: '镇宁布依族苗族自治县', pid: '520400', type: 'district', pinyin: 'zhen ning bu yi zu miao zu zi zhi xian', py: 'znbyzmzzzx', prefix: 'z',
  },
  {
    id: 520424, name: '关岭布依族苗族自治县', pid: '520400', type: 'district', pinyin: 'guan ling bu yi zu miao zu zi zhi xian', py: 'glbyzmzzzx', prefix: 'g',
  },
  {
    id: 520425, name: '紫云苗族布依族自治县', pid: '520400', type: 'district', pinyin: 'zi yun miao zu bu yi zu zi zhi xian', py: 'zymzbyzzzx', prefix: 'z',
  },
  {
    id: 520502, name: '七星关区', pid: '520500', type: 'district', pinyin: 'qi xing guan qu', py: 'qxgq', prefix: 'q',
  },
  {
    id: 520521, name: '大方县', pid: '520500', type: 'district', pinyin: 'da fang xian', py: 'dfx', prefix: 'd',
  },
  {
    id: 520522, name: '黔西县', pid: '520500', type: 'district', pinyin: 'qian xi xian', py: 'qxx', prefix: 'q',
  },
  {
    id: 520523, name: '金沙县', pid: '520500', type: 'district', pinyin: 'jin sha xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 520524, name: '织金县', pid: '520500', type: 'district', pinyin: 'zhi jin xian', py: 'zjx', prefix: 'z',
  },
  {
    id: 520525, name: '纳雍县', pid: '520500', type: 'district', pinyin: 'na yong xian', py: 'nyx', prefix: 'n',
  },
  {
    id: 520526, name: '威宁彝族回族苗族自治县', pid: '520500', type: 'district', pinyin: 'wei ning yi zu hui zu miao zu zi zhi xian', py: 'wnyzhzmzzzx', prefix: 'w',
  },
  {
    id: 520527, name: '赫章县', pid: '520500', type: 'district', pinyin: 'he zhang xian', py: 'hzx', prefix: 'h',
  },
  {
    id: 520602, name: '碧江区', pid: '520600', type: 'district', pinyin: 'bi jiang qu', py: 'bjq', prefix: 'b',
  },
  {
    id: 520603, name: '万山区', pid: '520600', type: 'district', pinyin: 'wan shan qu', py: 'wsq', prefix: 'w',
  },
  {
    id: 520621, name: '江口县', pid: '520600', type: 'district', pinyin: 'jiang kou xian', py: 'jkx', prefix: 'j',
  },
  {
    id: 520622, name: '玉屏侗族自治县', pid: '520600', type: 'district', pinyin: 'yu ping dong zu zi zhi xian', py: 'ypdzzzx', prefix: 'y',
  },
  {
    id: 520623, name: '石阡县', pid: '520600', type: 'district', pinyin: 'shi qian xian', py: 'sqx', prefix: 's',
  },
  {
    id: 520624, name: '思南县', pid: '520600', type: 'district', pinyin: 'si nan xian', py: 'snx', prefix: 's',
  },
  {
    id: 520625, name: '印江土家族苗族自治县', pid: '520600', type: 'district', pinyin: 'yin jiang tu jia zu miao zu zi zhi xian', py: 'yjtjzmzzzx', prefix: 'y',
  },
  {
    id: 520626, name: '德江县', pid: '520600', type: 'district', pinyin: 'de jiang xian', py: 'djx', prefix: 'd',
  },
  {
    id: 520627, name: '沿河土家族自治县', pid: '520600', type: 'district', pinyin: 'yan he tu jia zu zi zhi xian', py: 'yhtjzzzx', prefix: 'y',
  },
  {
    id: 520628, name: '松桃苗族自治县', pid: '520600', type: 'district', pinyin: 'song tao miao zu zi zhi xian', py: 'stmzzzx', prefix: 's',
  },
  {
    id: 522301, name: '兴义市', pid: '522300', type: 'district', pinyin: 'xing yi shi', py: 'xys', prefix: 'x',
  },
  {
    id: 522322, name: '兴仁县', pid: '522300', type: 'district', pinyin: 'xing ren xian', py: 'xrx', prefix: 'x',
  },
  {
    id: 522323, name: '普安县', pid: '522300', type: 'district', pinyin: 'pu an xian', py: 'pax', prefix: 'p',
  },
  {
    id: 522324, name: '晴隆县', pid: '522300', type: 'district', pinyin: 'qing long xian', py: 'qlx', prefix: 'q',
  },
  {
    id: 522325, name: '贞丰县', pid: '522300', type: 'district', pinyin: 'zhen feng xian', py: 'zfx', prefix: 'z',
  },
  {
    id: 522326, name: '望谟县', pid: '522300', type: 'district', pinyin: 'wang mo xian', py: 'wmx', prefix: 'w',
  },
  {
    id: 522327, name: '册亨县', pid: '522300', type: 'district', pinyin: 'ce heng xian', py: 'chx', prefix: 'c',
  },
  {
    id: 522328, name: '安龙县', pid: '522300', type: 'district', pinyin: 'an long xian', py: 'alx', prefix: 'a',
  },
  {
    id: 522601, name: '凯里市', pid: '522600', type: 'district', pinyin: 'kai li shi', py: 'kls', prefix: 'k',
  },
  {
    id: 522622, name: '黄平县', pid: '522600', type: 'district', pinyin: 'huang ping xian', py: 'hpx', prefix: 'h',
  },
  {
    id: 522623, name: '施秉县', pid: '522600', type: 'district', pinyin: 'shi bing xian', py: 'sbx', prefix: 's',
  },
  {
    id: 522624, name: '三穗县', pid: '522600', type: 'district', pinyin: 'san sui xian', py: 'ssx', prefix: 's',
  },
  {
    id: 522625, name: '镇远县', pid: '522600', type: 'district', pinyin: 'zhen yuan xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 522626, name: '岑巩县', pid: '522600', type: 'district', pinyin: 'cen gong xian', py: 'cgx', prefix: 'c',
  },
  {
    id: 522627, name: '天柱县', pid: '522600', type: 'district', pinyin: 'tian zhu xian', py: 'tzx', prefix: 't',
  },
  {
    id: 522628, name: '锦屏县', pid: '522600', type: 'district', pinyin: 'jin ping xian', py: 'jpx', prefix: 'j',
  },
  {
    id: 522629, name: '剑河县', pid: '522600', type: 'district', pinyin: 'jian he xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 522630, name: '台江县', pid: '522600', type: 'district', pinyin: 'tai jiang xian', py: 'tjx', prefix: 't',
  },
  {
    id: 522631, name: '黎平县', pid: '522600', type: 'district', pinyin: 'li ping xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 522632, name: '榕江县', pid: '522600', type: 'district', pinyin: 'rong jiang xian', py: 'rjx', prefix: 'r',
  },
  {
    id: 522633, name: '从江县', pid: '522600', type: 'district', pinyin: 'cong jiang xian', py: 'cjx', prefix: 'c',
  },
  {
    id: 522634, name: '雷山县', pid: '522600', type: 'district', pinyin: 'lei shan xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 522635, name: '麻江县', pid: '522600', type: 'district', pinyin: 'ma jiang xian', py: 'mjx', prefix: 'm',
  },
  {
    id: 522636, name: '丹寨县', pid: '522600', type: 'district', pinyin: 'dan zhai xian', py: 'dzx', prefix: 'd',
  },
  {
    id: 522701, name: '都匀市', pid: '522700', type: 'district', pinyin: 'dou yun shi', py: 'dys', prefix: 'd',
  },
  {
    id: 522702, name: '福泉市', pid: '522700', type: 'district', pinyin: 'fu quan shi', py: 'fqs', prefix: 'f',
  },
  {
    id: 522722, name: '荔波县', pid: '522700', type: 'district', pinyin: 'li bo xian', py: 'lbx', prefix: 'l',
  },
  {
    id: 522723, name: '贵定县', pid: '522700', type: 'district', pinyin: 'gui ding xian', py: 'gdx', prefix: 'g',
  },
  {
    id: 522725, name: '瓮安县', pid: '522700', type: 'district', pinyin: 'weng an xian', py: 'wax', prefix: 'w',
  },
  {
    id: 522726, name: '独山县', pid: '522700', type: 'district', pinyin: 'du shan xian', py: 'dsx', prefix: 'd',
  },
  {
    id: 522727, name: '平塘县', pid: '522700', type: 'district', pinyin: 'ping tang xian', py: 'ptx', prefix: 'p',
  },
  {
    id: 522728, name: '罗甸县', pid: '522700', type: 'district', pinyin: 'luo dian xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 522729, name: '长顺县', pid: '522700', type: 'district', pinyin: 'chang shun xian', py: 'csx', prefix: 'c',
  },
  {
    id: 522730, name: '龙里县', pid: '522700', type: 'district', pinyin: 'long li xian', py: 'llx', prefix: 'l',
  },
  {
    id: 522731, name: '惠水县', pid: '522700', type: 'district', pinyin: 'hui shui xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 522732, name: '三都水族自治县', pid: '522700', type: 'district', pinyin: 'san dou shui zu zi zhi xian', py: 'sdszzzx', prefix: 's',
  },
  {
    id: 530102, name: '五华区', pid: '530100', type: 'district', pinyin: 'wu hua qu', py: 'whq', prefix: 'w',
  },
  {
    id: 530103, name: '盘龙区', pid: '530100', type: 'district', pinyin: 'pan long qu', py: 'plq', prefix: 'p',
  },
  {
    id: 530111, name: '官渡区', pid: '530100', type: 'district', pinyin: 'guan du qu', py: 'gdq', prefix: 'g',
  },
  {
    id: 530112, name: '西山区', pid: '530100', type: 'district', pinyin: 'xi shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 530113, name: '东川区', pid: '530100', type: 'district', pinyin: 'dong chuan qu', py: 'dcq', prefix: 'd',
  },
  {
    id: 530114, name: '呈贡区', pid: '530100', type: 'district', pinyin: 'cheng gong qu', py: 'cgq', prefix: 'c',
  },
  {
    id: 530122, name: '晋宁县', pid: '530100', type: 'district', pinyin: 'jin ning xian', py: 'jnx', prefix: 'j',
  },
  {
    id: 530124, name: '富民县', pid: '530100', type: 'district', pinyin: 'fu min xian', py: 'fmx', prefix: 'f',
  },
  {
    id: 530125, name: '宜良县', pid: '530100', type: 'district', pinyin: 'yi liang xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 530126, name: '石林彝族自治县', pid: '530100', type: 'district', pinyin: 'shi lin yi zu zi zhi xian', py: 'slyzzzx', prefix: 's',
  },
  {
    id: 530127, name: '嵩明县', pid: '530100', type: 'district', pinyin: 'song ming xian', py: 'smx', prefix: 's',
  },
  {
    id: 530128, name: '禄劝彝族苗族自治县', pid: '530100', type: 'district', pinyin: 'lu quan yi zu miao zu zi zhi xian', py: 'lqyzmzzzx', prefix: 'l',
  },
  {
    id: 530129, name: '寻甸回族彝族自治县', pid: '530100', type: 'district', pinyin: 'xun dian hui zu yi zu zi zhi xian', py: 'xdhzyzzzx', prefix: 'x',
  },
  {
    id: 530181, name: '安宁市', pid: '530100', type: 'district', pinyin: 'an ning shi', py: 'ans', prefix: 'a',
  },
  {
    id: 530302, name: '麒麟区', pid: '530300', type: 'district', pinyin: 'qi lin qu', py: 'qlq', prefix: 'q',
  },
  {
    id: 530321, name: '马龙县', pid: '530300', type: 'district', pinyin: 'ma long xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 530322, name: '陆良县', pid: '530300', type: 'district', pinyin: 'lu liang xian', py: 'llx', prefix: 'l',
  },
  {
    id: 530323, name: '师宗县', pid: '530300', type: 'district', pinyin: 'shi zong xian', py: 'szx', prefix: 's',
  },
  {
    id: 530324, name: '罗平县', pid: '530300', type: 'district', pinyin: 'luo ping xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 530325, name: '富源县', pid: '530300', type: 'district', pinyin: 'fu yuan xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 530326, name: '会泽县', pid: '530300', type: 'district', pinyin: 'hui ze xian', py: 'hzx', prefix: 'h',
  },
  {
    id: 530328, name: '沾益县', pid: '530300', type: 'district', pinyin: 'zhan yi xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 530381, name: '宣威市', pid: '530300', type: 'district', pinyin: 'xuan wei shi', py: 'xws', prefix: 'x',
  },
  {
    id: 530402, name: '红塔区', pid: '530400', type: 'district', pinyin: 'hong ta qu', py: 'htq', prefix: 'h',
  },
  {
    id: 530421, name: '江川县', pid: '530400', type: 'district', pinyin: 'jiang chuan xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 530422, name: '澄江县', pid: '530400', type: 'district', pinyin: 'cheng jiang xian', py: 'cjx', prefix: 'c',
  },
  {
    id: 530423, name: '通海县', pid: '530400', type: 'district', pinyin: 'tong hai xian', py: 'thx', prefix: 't',
  },
  {
    id: 530424, name: '华宁县', pid: '530400', type: 'district', pinyin: 'hua ning xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 530425, name: '易门县', pid: '530400', type: 'district', pinyin: 'yi men xian', py: 'ymx', prefix: 'y',
  },
  {
    id: 530426, name: '峨山彝族自治县', pid: '530400', type: 'district', pinyin: 'e shan yi zu zi zhi xian', py: 'esyzzzx', prefix: 'e',
  },
  {
    id: 530427, name: '新平彝族傣族自治县', pid: '530400', type: 'district', pinyin: 'xin ping yi zu dai zu zi zhi xian', py: 'xpyzdzzzx', prefix: 'x',
  },
  {
    id: 530428, name: '元江哈尼族彝族傣族自治县', pid: '530400', type: 'district', pinyin: 'yuan jiang ha ni zu yi zu dai zu zi zhi xian', py: 'yjhnzyzdzzzx', prefix: 'y',
  },
  {
    id: 530502, name: '隆阳区', pid: '530500', type: 'district', pinyin: 'long yang qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 530521, name: '施甸县', pid: '530500', type: 'district', pinyin: 'shi dian xian', py: 'sdx', prefix: 's',
  },
  {
    id: 530522, name: '腾冲县', pid: '530500', type: 'district', pinyin: 'teng chong xian', py: 'tcx', prefix: 't',
  },
  {
    id: 530523, name: '龙陵县', pid: '530500', type: 'district', pinyin: 'long ling xian', py: 'llx', prefix: 'l',
  },
  {
    id: 530524, name: '昌宁县', pid: '530500', type: 'district', pinyin: 'chang ning xian', py: 'cnx', prefix: 'c',
  },
  {
    id: 530602, name: '昭阳区', pid: '530600', type: 'district', pinyin: 'zhao yang qu', py: 'zyq', prefix: 'z',
  },
  {
    id: 530621, name: '鲁甸县', pid: '530600', type: 'district', pinyin: 'lu dian xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 530622, name: '巧家县', pid: '530600', type: 'district', pinyin: 'qiao jia xian', py: 'qjx', prefix: 'q',
  },
  {
    id: 530623, name: '盐津县', pid: '530600', type: 'district', pinyin: 'yan jin xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 530624, name: '大关县', pid: '530600', type: 'district', pinyin: 'da guan xian', py: 'dgx', prefix: 'd',
  },
  {
    id: 530625, name: '永善县', pid: '530600', type: 'district', pinyin: 'yong shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 530626, name: '绥江县', pid: '530600', type: 'district', pinyin: 'sui jiang xian', py: 'sjx', prefix: 's',
  },
  {
    id: 530627, name: '镇雄县', pid: '530600', type: 'district', pinyin: 'zhen xiong xian', py: 'zxx', prefix: 'z',
  },
  {
    id: 530628, name: '彝良县', pid: '530600', type: 'district', pinyin: 'yi liang xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 530629, name: '威信县', pid: '530600', type: 'district', pinyin: 'wei xin xian', py: 'wxx', prefix: 'w',
  },
  {
    id: 530630, name: '水富县', pid: '530600', type: 'district', pinyin: 'shui fu xian', py: 'sfx', prefix: 's',
  },
  {
    id: 530702, name: '古城区', pid: '530700', type: 'district', pinyin: 'gu cheng qu', py: 'gcq', prefix: 'g',
  },
  {
    id: 530721, name: '玉龙纳西族自治县', pid: '530700', type: 'district', pinyin: 'yu long na xi zu zi zhi xian', py: 'ylnxzzzx', prefix: 'y',
  },
  {
    id: 530722, name: '永胜县', pid: '530700', type: 'district', pinyin: 'yong sheng xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 530723, name: '华坪县', pid: '530700', type: 'district', pinyin: 'hua ping xian', py: 'hpx', prefix: 'h',
  },
  {
    id: 530724, name: '宁蒗彝族自治县', pid: '530700', type: 'district', pinyin: 'ning lang yi zu zi zhi xian', py: 'nlyzzzx', prefix: 'n',
  },
  {
    id: 530802, name: '思茅区', pid: '530800', type: 'district', pinyin: 'si mao qu', py: 'smq', prefix: 's',
  },
  {
    id: 530821, name: '宁洱哈尼族彝族自治县', pid: '530800', type: 'district', pinyin: 'ning er ha ni zu yi zu zi zhi xian', py: 'nehnzyzzzx', prefix: 'n',
  },
  {
    id: 530822, name: '墨江哈尼族自治县', pid: '530800', type: 'district', pinyin: 'mo jiang ha ni zu zi zhi xian', py: 'mjhnzzzx', prefix: 'm',
  },
  {
    id: 530823, name: '景东彝族自治县', pid: '530800', type: 'district', pinyin: 'jing dong yi zu zi zhi xian', py: 'jdyzzzx', prefix: 'j',
  },
  {
    id: 530824, name: '景谷傣族彝族自治县', pid: '530800', type: 'district', pinyin: 'jing gu dai zu yi zu zi zhi xian', py: 'jgdzyzzzx', prefix: 'j',
  },
  {
    id: 530825, name: '镇沅彝族哈尼族拉祜族自治县', pid: '530800', type: 'district', pinyin: 'zhen yuan yi zu ha ni zu la hu zu zi zhi xian', py: 'zyyzhnzlhzzzx', prefix: 'z',
  },
  {
    id: 530826, name: '江城哈尼族彝族自治县', pid: '530800', type: 'district', pinyin: 'jiang cheng ha ni zu yi zu zi zhi xian', py: 'jchnzyzzzx', prefix: 'j',
  },
  {
    id: 530827, name: '孟连傣族拉祜族佤族自治县', pid: '530800', type: 'district', pinyin: 'meng lian dai zu la hu zu wa zu zi zhi xian', py: 'mldzlhzwzzzx', prefix: 'm',
  },
  {
    id: 530828, name: '澜沧拉祜族自治县', pid: '530800', type: 'district', pinyin: 'lan cang la hu zu zi zhi xian', py: 'lclhzzzx', prefix: 'l',
  },
  {
    id: 530829, name: '西盟佤族自治县', pid: '530800', type: 'district', pinyin: 'xi meng wa zu zi zhi xian', py: 'xmwzzzx', prefix: 'x',
  },
  {
    id: 530902, name: '临翔区', pid: '530900', type: 'district', pinyin: 'lin xiang qu', py: 'lxq', prefix: 'l',
  },
  {
    id: 530921, name: '凤庆县', pid: '530900', type: 'district', pinyin: 'feng qing xian', py: 'fqx', prefix: 'f',
  },
  {
    id: 530922, name: '云县', pid: '530900', type: 'district', pinyin: 'yun xian', py: 'yx', prefix: 'y',
  },
  {
    id: 530923, name: '永德县', pid: '530900', type: 'district', pinyin: 'yong de xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 530924, name: '镇康县', pid: '530900', type: 'district', pinyin: 'zhen kang xian', py: 'zkx', prefix: 'z',
  },
  {
    id: 530925, name: '双江拉祜族佤族布朗族傣族自治县', pid: '530900', type: 'district', pinyin: 'shuang jiang la hu zu wa zu bu lang zu dai zu zi zhi xian', py: 'sjlhzwzblzdzzzx', prefix: 's',
  },
  {
    id: 530926, name: '耿马傣族佤族自治县', pid: '530900', type: 'district', pinyin: 'geng ma dai zu wa zu zi zhi xian', py: 'gmdzwzzzx', prefix: 'g',
  },
  {
    id: 530927, name: '沧源佤族自治县', pid: '530900', type: 'district', pinyin: 'cang yuan wa zu zi zhi xian', py: 'cywzzzx', prefix: 'c',
  },
  {
    id: 532301, name: '楚雄市', pid: '532300', type: 'district', pinyin: 'chu xiong shi', py: 'cxs', prefix: 'c',
  },
  {
    id: 532322, name: '双柏县', pid: '532300', type: 'district', pinyin: 'shuang bo xian', py: 'sbx', prefix: 's',
  },
  {
    id: 532323, name: '牟定县', pid: '532300', type: 'district', pinyin: 'mou ding xian', py: 'mdx', prefix: 'm',
  },
  {
    id: 532324, name: '南华县', pid: '532300', type: 'district', pinyin: 'nan hua xian', py: 'nhx', prefix: 'n',
  },
  {
    id: 532325, name: '姚安县', pid: '532300', type: 'district', pinyin: 'yao an xian', py: 'yax', prefix: 'y',
  },
  {
    id: 532326, name: '大姚县', pid: '532300', type: 'district', pinyin: 'da yao xian', py: 'dyx', prefix: 'd',
  },
  {
    id: 532327, name: '永仁县', pid: '532300', type: 'district', pinyin: 'yong ren xian', py: 'yrx', prefix: 'y',
  },
  {
    id: 532328, name: '元谋县', pid: '532300', type: 'district', pinyin: 'yuan mou xian', py: 'ymx', prefix: 'y',
  },
  {
    id: 532329, name: '武定县', pid: '532300', type: 'district', pinyin: 'wu ding xian', py: 'wdx', prefix: 'w',
  },
  {
    id: 532331, name: '禄丰县', pid: '532300', type: 'district', pinyin: 'lu feng xian', py: 'lfx', prefix: 'l',
  },
  {
    id: 532501, name: '个旧市', pid: '532500', type: 'district', pinyin: 'ge jiu shi', py: 'gjs', prefix: 'g',
  },
  {
    id: 532502, name: '开远市', pid: '532500', type: 'district', pinyin: 'kai yuan shi', py: 'kys', prefix: 'k',
  },
  {
    id: 532503, name: '蒙自市', pid: '532500', type: 'district', pinyin: 'meng zi shi', py: 'mzs', prefix: 'm',
  },
  {
    id: 532504, name: '弥勒市', pid: '532500', type: 'district', pinyin: 'mi le shi', py: 'mls', prefix: 'm',
  },
  {
    id: 532523, name: '屏边苗族自治县', pid: '532500', type: 'district', pinyin: 'ping bian miao zu zi zhi xian', py: 'pbmzzzx', prefix: 'p',
  },
  {
    id: 532524, name: '建水县', pid: '532500', type: 'district', pinyin: 'jian shui xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 532525, name: '石屏县', pid: '532500', type: 'district', pinyin: 'shi ping xian', py: 'spx', prefix: 's',
  },
  {
    id: 532527, name: '泸西县', pid: '532500', type: 'district', pinyin: 'lu xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 532528, name: '元阳县', pid: '532500', type: 'district', pinyin: 'yuan yang xian', py: 'yyx', prefix: 'y',
  },
  {
    id: 532529, name: '红河县', pid: '532500', type: 'district', pinyin: 'hong he xian', py: 'hhx', prefix: 'h',
  },
  {
    id: 532530, name: '金平苗族瑶族傣族自治县', pid: '532500', type: 'district', pinyin: 'jin ping miao zu yao zu dai zu zi zhi xian', py: 'jpmzyzdzzzx', prefix: 'j',
  },
  {
    id: 532531, name: '绿春县', pid: '532500', type: 'district', pinyin: 'lv chun xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 532532, name: '河口瑶族自治县', pid: '532500', type: 'district', pinyin: 'he kou yao zu zi zhi xian', py: 'hkyzzzx', prefix: 'h',
  },
  {
    id: 532601, name: '文山市', pid: '532600', type: 'district', pinyin: 'wen shan shi', py: 'wss', prefix: 'w',
  },
  {
    id: 532622, name: '砚山县', pid: '532600', type: 'district', pinyin: 'yan shan xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 532623, name: '西畴县', pid: '532600', type: 'district', pinyin: 'xi chou xian', py: 'xcx', prefix: 'x',
  },
  {
    id: 532624, name: '麻栗坡县', pid: '532600', type: 'district', pinyin: 'ma li po xian', py: 'mlpx', prefix: 'm',
  },
  {
    id: 532625, name: '马关县', pid: '532600', type: 'district', pinyin: 'ma guan xian', py: 'mgx', prefix: 'm',
  },
  {
    id: 532626, name: '丘北县', pid: '532600', type: 'district', pinyin: 'qiu bei xian', py: 'qbx', prefix: 'q',
  },
  {
    id: 532627, name: '广南县', pid: '532600', type: 'district', pinyin: 'guang nan xian', py: 'gnx', prefix: 'g',
  },
  {
    id: 532628, name: '富宁县', pid: '532600', type: 'district', pinyin: 'fu ning xian', py: 'fnx', prefix: 'f',
  },
  {
    id: 532801, name: '景洪市', pid: '532800', type: 'district', pinyin: 'jing hong shi', py: 'jhs', prefix: 'j',
  },
  {
    id: 532822, name: '勐海县', pid: '532800', type: 'district', pinyin: 'meng hai xian', py: 'mhx', prefix: 'm',
  },
  {
    id: 532823, name: '勐腊县', pid: '532800', type: 'district', pinyin: 'meng la xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 532901, name: '大理市', pid: '532900', type: 'district', pinyin: 'da li shi', py: 'dls', prefix: 'd',
  },
  {
    id: 532922, name: '漾濞彝族自治县', pid: '532900', type: 'district', pinyin: 'yang bi yi zu zi zhi xian', py: 'ybyzzzx', prefix: 'y',
  },
  {
    id: 532923, name: '祥云县', pid: '532900', type: 'district', pinyin: 'xiang yun xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 532924, name: '宾川县', pid: '532900', type: 'district', pinyin: 'bin chuan xian', py: 'bcx', prefix: 'b',
  },
  {
    id: 532925, name: '弥渡县', pid: '532900', type: 'district', pinyin: 'mi du xian', py: 'mdx', prefix: 'm',
  },
  {
    id: 532926, name: '南涧彝族自治县', pid: '532900', type: 'district', pinyin: 'nan jian yi zu zi zhi xian', py: 'njyzzzx', prefix: 'n',
  },
  {
    id: 532927, name: '巍山彝族回族自治县', pid: '532900', type: 'district', pinyin: 'wei shan yi zu hui zu zi zhi xian', py: 'wsyzhzzzx', prefix: 'w',
  },
  {
    id: 532928, name: '永平县', pid: '532900', type: 'district', pinyin: 'yong ping xian', py: 'ypx', prefix: 'y',
  },
  {
    id: 532929, name: '云龙县', pid: '532900', type: 'district', pinyin: 'yun long xian', py: 'ylx', prefix: 'y',
  },
  {
    id: 532930, name: '洱源县', pid: '532900', type: 'district', pinyin: 'er yuan xian', py: 'eyx', prefix: 'e',
  },
  {
    id: 532931, name: '剑川县', pid: '532900', type: 'district', pinyin: 'jian chuan xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 532932, name: '鹤庆县', pid: '532900', type: 'district', pinyin: 'he qing xian', py: 'hqx', prefix: 'h',
  },
  {
    id: 533102, name: '瑞丽市', pid: '533100', type: 'district', pinyin: 'rui li shi', py: 'rls', prefix: 'r',
  },
  {
    id: 533103, name: '芒市', pid: '533100', type: 'district', pinyin: 'mang shi', py: 'ms', prefix: 'm',
  },
  {
    id: 533122, name: '梁河县', pid: '533100', type: 'district', pinyin: 'liang he xian', py: 'lhx', prefix: 'l',
  },
  {
    id: 533123, name: '盈江县', pid: '533100', type: 'district', pinyin: 'ying jiang xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 533124, name: '陇川县', pid: '533100', type: 'district', pinyin: 'long chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 533321, name: '泸水县', pid: '533300', type: 'district', pinyin: 'lu shui xian', py: 'lsx', prefix: 'l',
  },
  {
    id: 533323, name: '福贡县', pid: '533300', type: 'district', pinyin: 'fu gong xian', py: 'fgx', prefix: 'f',
  },
  {
    id: 533324, name: '贡山独龙族怒族自治县', pid: '533300', type: 'district', pinyin: 'gong shan du long zu nu zu zi zhi xian', py: 'gsdlznzzzx', prefix: 'g',
  },
  {
    id: 533325, name: '兰坪白族普米族自治县', pid: '533300', type: 'district', pinyin: 'lan ping bai zu pu mi zu zi zhi xian', py: 'lpbzpmzzzx', prefix: 'l',
  },
  {
    id: 533421, name: '香格里拉县', pid: '533400', type: 'district', pinyin: 'xiang ge li la xian', py: 'xgllx', prefix: 'x',
  },
  {
    id: 533422, name: '德钦县', pid: '533400', type: 'district', pinyin: 'de qin xian', py: 'dqx', prefix: 'd',
  },
  {
    id: 533423, name: '维西傈僳族自治县', pid: '533400', type: 'district', pinyin: 'wei xi li su zu zi zhi xian', py: 'wxlszzzx', prefix: 'w',
  },
  {
    id: 540102, name: '城关区', pid: '540100', type: 'district', pinyin: 'cheng guan qu', py: 'cgq', prefix: 'c',
  },
  {
    id: 540121, name: '林周县', pid: '540100', type: 'district', pinyin: 'lin zhou xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 540122, name: '当雄县', pid: '540100', type: 'district', pinyin: 'dang xiong xian', py: 'dxx', prefix: 'd',
  },
  {
    id: 540123, name: '尼木县', pid: '540100', type: 'district', pinyin: 'ni mu xian', py: 'nmx', prefix: 'n',
  },
  {
    id: 540124, name: '曲水县', pid: '540100', type: 'district', pinyin: 'qu shui xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 540125, name: '堆龙德庆县', pid: '540100', type: 'district', pinyin: 'dui long de qing xian', py: 'dldqx', prefix: 'd',
  },
  {
    id: 540126, name: '达孜县', pid: '540100', type: 'district', pinyin: 'da zi xian', py: 'dzx', prefix: 'd',
  },
  {
    id: 540127, name: '墨竹工卡县', pid: '540100', type: 'district', pinyin: 'mo zhu gong ka xian', py: 'mzgkx', prefix: 'm',
  },
  {
    id: 542121, name: '昌都县', pid: '542100', type: 'district', pinyin: 'chang dou xian', py: 'cdx', prefix: 'c',
  },
  {
    id: 542122, name: '江达县', pid: '542100', type: 'district', pinyin: 'jiang da xian', py: 'jdx', prefix: 'j',
  },
  {
    id: 542123, name: '贡觉县', pid: '542100', type: 'district', pinyin: 'gong jue xian', py: 'gjx', prefix: 'g',
  },
  {
    id: 542124, name: '类乌齐县', pid: '542100', type: 'district', pinyin: 'lei wu qi xian', py: 'lwqx', prefix: 'l',
  },
  {
    id: 542125, name: '丁青县', pid: '542100', type: 'district', pinyin: 'ding qing xian', py: 'dqx', prefix: 'd',
  },
  {
    id: 542126, name: '察雅县', pid: '542100', type: 'district', pinyin: 'cha ya xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 542127, name: '八宿县', pid: '542100', type: 'district', pinyin: 'ba su xian', py: 'bsx', prefix: 'b',
  },
  {
    id: 542128, name: '左贡县', pid: '542100', type: 'district', pinyin: 'zuo gong xian', py: 'zgx', prefix: 'z',
  },
  {
    id: 542129, name: '芒康县', pid: '542100', type: 'district', pinyin: 'mang kang xian', py: 'mkx', prefix: 'm',
  },
  {
    id: 542132, name: '洛隆县', pid: '542100', type: 'district', pinyin: 'luo long xian', py: 'llx', prefix: 'l',
  },
  {
    id: 542133, name: '边坝县', pid: '542100', type: 'district', pinyin: 'bian ba xian', py: 'bbx', prefix: 'b',
  },
  {
    id: 542221, name: '乃东县', pid: '542200', type: 'district', pinyin: 'nai dong xian', py: 'ndx', prefix: 'n',
  },
  {
    id: 542222, name: '扎囊县', pid: '542200', type: 'district', pinyin: 'zha nang xian', py: 'znx', prefix: 'z',
  },
  {
    id: 542223, name: '贡嘎县', pid: '542200', type: 'district', pinyin: 'gong ga xian', py: 'ggx', prefix: 'g',
  },
  {
    id: 542224, name: '桑日县', pid: '542200', type: 'district', pinyin: 'sang ri xian', py: 'srx', prefix: 's',
  },
  {
    id: 542225, name: '琼结县', pid: '542200', type: 'district', pinyin: 'qiong jie xian', py: 'qjx', prefix: 'q',
  },
  {
    id: 542226, name: '曲松县', pid: '542200', type: 'district', pinyin: 'qu song xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 542227, name: '措美县', pid: '542200', type: 'district', pinyin: 'cuo mei xian', py: 'cmx', prefix: 'c',
  },
  {
    id: 542228, name: '洛扎县', pid: '542200', type: 'district', pinyin: 'luo zha xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 542229, name: '加查县', pid: '542200', type: 'district', pinyin: 'jia cha xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 542231, name: '隆子县', pid: '542200', type: 'district', pinyin: 'long zi xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 542232, name: '错那县', pid: '542200', type: 'district', pinyin: 'cuo nei xian', py: 'cnx', prefix: 'c',
  },
  {
    id: 542233, name: '浪卡子县', pid: '542200', type: 'district', pinyin: 'lang ka zi xian', py: 'lkzx', prefix: 'l',
  },
  {
    id: 542301, name: '日喀则市', pid: '542300', type: 'district', pinyin: 'ri ka ze shi', py: 'rkzs', prefix: 'r',
  },
  {
    id: 542322, name: '南木林县', pid: '542300', type: 'district', pinyin: 'nan mu lin xian', py: 'nmlx', prefix: 'n',
  },
  {
    id: 542323, name: '江孜县', pid: '542300', type: 'district', pinyin: 'jiang zi xian', py: 'jzx', prefix: 'j',
  },
  {
    id: 542324, name: '定日县', pid: '542300', type: 'district', pinyin: 'ding ri xian', py: 'drx', prefix: 'd',
  },
  {
    id: 542325, name: '萨迦县', pid: '542300', type: 'district', pinyin: 'sa jia xian', py: 'sjx', prefix: 's',
  },
  {
    id: 542326, name: '拉孜县', pid: '542300', type: 'district', pinyin: 'la zi xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 542327, name: '昂仁县', pid: '542300', type: 'district', pinyin: 'ang ren xian', py: 'arx', prefix: 'a',
  },
  {
    id: 542328, name: '谢通门县', pid: '542300', type: 'district', pinyin: 'xie tong men xian', py: 'xtmx', prefix: 'x',
  },
  {
    id: 542329, name: '白朗县', pid: '542300', type: 'district', pinyin: 'bai lang xian', py: 'blx', prefix: 'b',
  },
  {
    id: 542330, name: '仁布县', pid: '542300', type: 'district', pinyin: 'ren bu xian', py: 'rbx', prefix: 'r',
  },
  {
    id: 542331, name: '康马县', pid: '542300', type: 'district', pinyin: 'kang ma xian', py: 'kmx', prefix: 'k',
  },
  {
    id: 542332, name: '定结县', pid: '542300', type: 'district', pinyin: 'ding jie xian', py: 'djx', prefix: 'd',
  },
  {
    id: 542333, name: '仲巴县', pid: '542300', type: 'district', pinyin: 'zhong ba xian', py: 'zbx', prefix: 'z',
  },
  {
    id: 542334, name: '亚东县', pid: '542300', type: 'district', pinyin: 'ya dong xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 542335, name: '吉隆县', pid: '542300', type: 'district', pinyin: 'ji long xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 542336, name: '聂拉木县', pid: '542300', type: 'district', pinyin: 'nie la mu xian', py: 'nlmx', prefix: 'n',
  },
  {
    id: 542337, name: '萨嘎县', pid: '542300', type: 'district', pinyin: 'sa ga xian', py: 'sgx', prefix: 's',
  },
  {
    id: 542338, name: '岗巴县', pid: '542300', type: 'district', pinyin: 'gang ba xian', py: 'gbx', prefix: 'g',
  },
  {
    id: 542421, name: '那曲县', pid: '542400', type: 'district', pinyin: 'nei qu xian', py: 'nqx', prefix: 'n',
  },
  {
    id: 542422, name: '嘉黎县', pid: '542400', type: 'district', pinyin: 'jia li xian', py: 'jlx', prefix: 'j',
  },
  {
    id: 542423, name: '比如县', pid: '542400', type: 'district', pinyin: 'bi ru xian', py: 'brx', prefix: 'b',
  },
  {
    id: 542424, name: '聂荣县', pid: '542400', type: 'district', pinyin: 'nie rong xian', py: 'nrx', prefix: 'n',
  },
  {
    id: 542425, name: '安多县', pid: '542400', type: 'district', pinyin: 'an duo xian', py: 'adx', prefix: 'a',
  },
  {
    id: 542426, name: '申扎县', pid: '542400', type: 'district', pinyin: 'shen zha xian', py: 'szx', prefix: 's',
  },
  {
    id: 542427, name: '索县', pid: '542400', type: 'district', pinyin: 'suo xian', py: 'sx', prefix: 's',
  },
  {
    id: 542428, name: '班戈县', pid: '542400', type: 'district', pinyin: 'ban ge xian', py: 'bgx', prefix: 'b',
  },
  {
    id: 542429, name: '巴青县', pid: '542400', type: 'district', pinyin: 'ba qing xian', py: 'bqx', prefix: 'b',
  },
  {
    id: 542430, name: '尼玛县', pid: '542400', type: 'district', pinyin: 'ni ma xian', py: 'nmx', prefix: 'n',
  },
  {
    id: 542431, name: '双湖县', pid: '542400', type: 'district', pinyin: 'shuang hu xian', py: 'shx', prefix: 's',
  },
  {
    id: 542521, name: '普兰县', pid: '542500', type: 'district', pinyin: 'pu lan xian', py: 'plx', prefix: 'p',
  },
  {
    id: 542522, name: '札达县', pid: '542500', type: 'district', pinyin: 'zha da xian', py: 'zdx', prefix: 'z',
  },
  {
    id: 542523, name: '噶尔县', pid: '542500', type: 'district', pinyin: 'ga er xian', py: 'gex', prefix: 'g',
  },
  {
    id: 542524, name: '日土县', pid: '542500', type: 'district', pinyin: 'ri tu xian', py: 'rtx', prefix: 'r',
  },
  {
    id: 542525, name: '革吉县', pid: '542500', type: 'district', pinyin: 'ge ji xian', py: 'gjx', prefix: 'g',
  },
  {
    id: 542526, name: '改则县', pid: '542500', type: 'district', pinyin: 'gai ze xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 542527, name: '措勤县', pid: '542500', type: 'district', pinyin: 'cuo qin xian', py: 'cqx', prefix: 'c',
  },
  {
    id: 542621, name: '林芝县', pid: '542600', type: 'district', pinyin: 'lin zhi xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 542622, name: '工布江达县', pid: '542600', type: 'district', pinyin: 'gong bu jiang da xian', py: 'gbjdx', prefix: 'g',
  },
  {
    id: 542623, name: '米林县', pid: '542600', type: 'district', pinyin: 'mi lin xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 542624, name: '墨脱县', pid: '542600', type: 'district', pinyin: 'mo tuo xian', py: 'mtx', prefix: 'm',
  },
  {
    id: 542625, name: '波密县', pid: '542600', type: 'district', pinyin: 'bo mi xian', py: 'bmx', prefix: 'b',
  },
  {
    id: 542626, name: '察隅县', pid: '542600', type: 'district', pinyin: 'cha yu xian', py: 'cyx', prefix: 'c',
  },
  {
    id: 542627, name: '朗县', pid: '542600', type: 'district', pinyin: 'lang xian', py: 'lx', prefix: 'l',
  },
  {
    id: 610102, name: '新城区', pid: '610100', type: 'district', pinyin: 'xin cheng qu', py: 'xcq', prefix: 'x',
  },
  {
    id: 610103, name: '碑林区', pid: '610100', type: 'district', pinyin: 'bei lin qu', py: 'blq', prefix: 'b',
  },
  {
    id: 610104, name: '莲湖区', pid: '610100', type: 'district', pinyin: 'lian hu qu', py: 'lhq', prefix: 'l',
  },
  {
    id: 610111, name: '灞桥区', pid: '610100', type: 'district', pinyin: 'ba qiao qu', py: 'bqq', prefix: 'b',
  },
  {
    id: 610112, name: '未央区', pid: '610100', type: 'district', pinyin: 'wei yang qu', py: 'wyq', prefix: 'w',
  },
  {
    id: 610113, name: '雁塔区', pid: '610100', type: 'district', pinyin: 'yan ta qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 610114, name: '阎良区', pid: '610100', type: 'district', pinyin: 'yan liang qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 610115, name: '临潼区', pid: '610100', type: 'district', pinyin: 'lin tong qu', py: 'ltq', prefix: 'l',
  },
  {
    id: 610116, name: '长安区', pid: '610100', type: 'district', pinyin: 'chang an qu', py: 'caq', prefix: 'c',
  },
  {
    id: 610122, name: '蓝田县', pid: '610100', type: 'district', pinyin: 'lan tian xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 610124, name: '周至县', pid: '610100', type: 'district', pinyin: 'zhou zhi xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 610125, name: '户县', pid: '610100', type: 'district', pinyin: 'hu xian', py: 'hx', prefix: 'h',
  },
  {
    id: 610126, name: '高陵县', pid: '610100', type: 'district', pinyin: 'gao ling xian', py: 'glx', prefix: 'g',
  },
  {
    id: 610202, name: '王益区', pid: '610200', type: 'district', pinyin: 'wang yi qu', py: 'wyq', prefix: 'w',
  },
  {
    id: 610203, name: '印台区', pid: '610200', type: 'district', pinyin: 'yin tai qu', py: 'ytq', prefix: 'y',
  },
  {
    id: 610204, name: '耀州区', pid: '610200', type: 'district', pinyin: 'yao zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 610222, name: '宜君县', pid: '610200', type: 'district', pinyin: 'yi jun xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 610302, name: '渭滨区', pid: '610300', type: 'district', pinyin: 'wei bin qu', py: 'wbq', prefix: 'w',
  },
  {
    id: 610303, name: '金台区', pid: '610300', type: 'district', pinyin: 'jin tai qu', py: 'jtq', prefix: 'j',
  },
  {
    id: 610304, name: '陈仓区', pid: '610300', type: 'district', pinyin: 'chen cang qu', py: 'ccq', prefix: 'c',
  },
  {
    id: 610322, name: '凤翔县', pid: '610300', type: 'district', pinyin: 'feng xiang xian', py: 'fxx', prefix: 'f',
  },
  {
    id: 610323, name: '岐山县', pid: '610300', type: 'district', pinyin: 'qi shan xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 610324, name: '扶风县', pid: '610300', type: 'district', pinyin: 'fu feng xian', py: 'ffx', prefix: 'f',
  },
  {
    id: 610326, name: '眉县', pid: '610300', type: 'district', pinyin: 'mei xian', py: 'mx', prefix: 'm',
  },
  {
    id: 610327, name: '陇县', pid: '610300', type: 'district', pinyin: 'long xian', py: 'lx', prefix: 'l',
  },
  {
    id: 610328, name: '千阳县', pid: '610300', type: 'district', pinyin: 'qian yang xian', py: 'qyx', prefix: 'q',
  },
  {
    id: 610329, name: '麟游县', pid: '610300', type: 'district', pinyin: 'lin you xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 610330, name: '凤县', pid: '610300', type: 'district', pinyin: 'feng xian', py: 'fx', prefix: 'f',
  },
  {
    id: 610331, name: '太白县', pid: '610300', type: 'district', pinyin: 'tai bai xian', py: 'tbx', prefix: 't',
  },
  {
    id: 610402, name: '秦都区', pid: '610400', type: 'district', pinyin: 'qin dou qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 610403, name: '杨陵区', pid: '610400', type: 'district', pinyin: 'yang ling qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 610404, name: '渭城区', pid: '610400', type: 'district', pinyin: 'wei cheng qu', py: 'wcq', prefix: 'w',
  },
  {
    id: 610422, name: '三原县', pid: '610400', type: 'district', pinyin: 'san yuan xian', py: 'syx', prefix: 's',
  },
  {
    id: 610423, name: '泾阳县', pid: '610400', type: 'district', pinyin: 'jing yang xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 610424, name: '乾县', pid: '610400', type: 'district', pinyin: 'qian xian', py: 'qx', prefix: 'q',
  },
  {
    id: 610425, name: '礼泉县', pid: '610400', type: 'district', pinyin: 'li quan xian', py: 'lqx', prefix: 'l',
  },
  {
    id: 610426, name: '永寿县', pid: '610400', type: 'district', pinyin: 'yong shou xian', py: 'ysx', prefix: 'y',
  },
  {
    id: 610427, name: '彬县', pid: '610400', type: 'district', pinyin: 'bin xian', py: 'bx', prefix: 'b',
  },
  {
    id: 610428, name: '长武县', pid: '610400', type: 'district', pinyin: 'chang wu xian', py: 'cwx', prefix: 'c',
  },
  {
    id: 610429, name: '旬邑县', pid: '610400', type: 'district', pinyin: 'xun yi xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 610430, name: '淳化县', pid: '610400', type: 'district', pinyin: 'chun hua xian', py: 'chx', prefix: 'c',
  },
  {
    id: 610431, name: '武功县', pid: '610400', type: 'district', pinyin: 'wu gong xian', py: 'wgx', prefix: 'w',
  },
  {
    id: 610481, name: '兴平市', pid: '610400', type: 'district', pinyin: 'xing ping shi', py: 'xps', prefix: 'x',
  },
  {
    id: 610502, name: '临渭区', pid: '610500', type: 'district', pinyin: 'lin wei qu', py: 'lwq', prefix: 'l',
  },
  {
    id: 610521, name: '华县', pid: '610500', type: 'district', pinyin: 'hua xian', py: 'hx', prefix: 'h',
  },
  {
    id: 610522, name: '潼关县', pid: '610500', type: 'district', pinyin: 'tong guan xian', py: 'tgx', prefix: 't',
  },
  {
    id: 610523, name: '大荔县', pid: '610500', type: 'district', pinyin: 'da li xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 610524, name: '合阳县', pid: '610500', type: 'district', pinyin: 'he yang xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 610525, name: '澄城县', pid: '610500', type: 'district', pinyin: 'cheng cheng xian', py: 'ccx', prefix: 'c',
  },
  {
    id: 610526, name: '蒲城县', pid: '610500', type: 'district', pinyin: 'pu cheng xian', py: 'pcx', prefix: 'p',
  },
  {
    id: 610527, name: '白水县', pid: '610500', type: 'district', pinyin: 'bai shui xian', py: 'bsx', prefix: 'b',
  },
  {
    id: 610528, name: '富平县', pid: '610500', type: 'district', pinyin: 'fu ping xian', py: 'fpx', prefix: 'f',
  },
  {
    id: 610581, name: '韩城市', pid: '610500', type: 'district', pinyin: 'han cheng shi', py: 'hcs', prefix: 'h',
  },
  {
    id: 610582, name: '华阴市', pid: '610500', type: 'district', pinyin: 'hua yin shi', py: 'hys', prefix: 'h',
  },
  {
    id: 610602, name: '宝塔区', pid: '610600', type: 'district', pinyin: 'bao ta qu', py: 'btq', prefix: 'b',
  },
  {
    id: 610621, name: '延长县', pid: '610600', type: 'district', pinyin: 'yan chang xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 610622, name: '延川县', pid: '610600', type: 'district', pinyin: 'yan chuan xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 610623, name: '子长县', pid: '610600', type: 'district', pinyin: 'zi chang xian', py: 'zcx', prefix: 'z',
  },
  {
    id: 610624, name: '安塞县', pid: '610600', type: 'district', pinyin: 'an sai xian', py: 'asx', prefix: 'a',
  },
  {
    id: 610625, name: '志丹县', pid: '610600', type: 'district', pinyin: 'zhi dan xian', py: 'zdx', prefix: 'z',
  },
  {
    id: 610626, name: '吴起县', pid: '610600', type: 'district', pinyin: 'wu qi xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 610627, name: '甘泉县', pid: '610600', type: 'district', pinyin: 'gan quan xian', py: 'gqx', prefix: 'g',
  },
  {
    id: 610628, name: '富县', pid: '610600', type: 'district', pinyin: 'fu xian', py: 'fx', prefix: 'f',
  },
  {
    id: 610629, name: '洛川县', pid: '610600', type: 'district', pinyin: 'luo chuan xian', py: 'lcx', prefix: 'l',
  },
  {
    id: 610630, name: '宜川县', pid: '610600', type: 'district', pinyin: 'yi chuan xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 610631, name: '黄龙县', pid: '610600', type: 'district', pinyin: 'huang long xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 610632, name: '黄陵县', pid: '610600', type: 'district', pinyin: 'huang ling xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 610702, name: '汉台区', pid: '610700', type: 'district', pinyin: 'han tai qu', py: 'htq', prefix: 'h',
  },
  {
    id: 610721, name: '南郑县', pid: '610700', type: 'district', pinyin: 'nan zheng xian', py: 'nzx', prefix: 'n',
  },
  {
    id: 610722, name: '城固县', pid: '610700', type: 'district', pinyin: 'cheng gu xian', py: 'cgx', prefix: 'c',
  },
  {
    id: 610723, name: '洋县', pid: '610700', type: 'district', pinyin: 'yang xian', py: 'yx', prefix: 'y',
  },
  {
    id: 610724, name: '西乡县', pid: '610700', type: 'district', pinyin: 'xi xiang xian', py: 'xxx', prefix: 'x',
  },
  {
    id: 610725, name: '勉县', pid: '610700', type: 'district', pinyin: 'mian xian', py: 'mx', prefix: 'm',
  },
  {
    id: 610726, name: '宁强县', pid: '610700', type: 'district', pinyin: 'ning qiang xian', py: 'nqx', prefix: 'n',
  },
  {
    id: 610727, name: '略阳县', pid: '610700', type: 'district', pinyin: 'lve yang xian', py: 'lyx', prefix: 'l',
  },
  {
    id: 610728, name: '镇巴县', pid: '610700', type: 'district', pinyin: 'zhen ba xian', py: 'zbx', prefix: 'z',
  },
  {
    id: 610729, name: '留坝县', pid: '610700', type: 'district', pinyin: 'liu ba xian', py: 'lbx', prefix: 'l',
  },
  {
    id: 610730, name: '佛坪县', pid: '610700', type: 'district', pinyin: 'fo ping xian', py: 'fpx', prefix: 'f',
  },
  {
    id: 610802, name: '榆阳区', pid: '610800', type: 'district', pinyin: 'yu yang qu', py: 'yyq', prefix: 'y',
  },
  {
    id: 610821, name: '神木县', pid: '610800', type: 'district', pinyin: 'shen mu xian', py: 'smx', prefix: 's',
  },
  {
    id: 610822, name: '府谷县', pid: '610800', type: 'district', pinyin: 'fu gu xian', py: 'fgx', prefix: 'f',
  },
  {
    id: 610823, name: '横山县', pid: '610800', type: 'district', pinyin: 'heng shan xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 610824, name: '靖边县', pid: '610800', type: 'district', pinyin: 'jing bian xian', py: 'jbx', prefix: 'j',
  },
  {
    id: 610825, name: '定边县', pid: '610800', type: 'district', pinyin: 'ding bian xian', py: 'dbx', prefix: 'd',
  },
  {
    id: 610826, name: '绥德县', pid: '610800', type: 'district', pinyin: 'sui de xian', py: 'sdx', prefix: 's',
  },
  {
    id: 610827, name: '米脂县', pid: '610800', type: 'district', pinyin: 'mi zhi xian', py: 'mzx', prefix: 'm',
  },
  {
    id: 610828, name: '佳县', pid: '610800', type: 'district', pinyin: 'jia xian', py: 'jx', prefix: 'j',
  },
  {
    id: 610829, name: '吴堡县', pid: '610800', type: 'district', pinyin: 'wu bao xian', py: 'wbx', prefix: 'w',
  },
  {
    id: 610830, name: '清涧县', pid: '610800', type: 'district', pinyin: 'qing jian xian', py: 'qjx', prefix: 'q',
  },
  {
    id: 610831, name: '子洲县', pid: '610800', type: 'district', pinyin: 'zi zhou xian', py: 'zzx', prefix: 'z',
  },
  {
    id: 610902, name: '汉滨区', pid: '610900', type: 'district', pinyin: 'han bin qu', py: 'hbq', prefix: 'h',
  },
  {
    id: 610921, name: '汉阴县', pid: '610900', type: 'district', pinyin: 'han yin xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 610922, name: '石泉县', pid: '610900', type: 'district', pinyin: 'shi quan xian', py: 'sqx', prefix: 's',
  },
  {
    id: 610923, name: '宁陕县', pid: '610900', type: 'district', pinyin: 'ning shan xian', py: 'nsx', prefix: 'n',
  },
  {
    id: 610924, name: '紫阳县', pid: '610900', type: 'district', pinyin: 'zi yang xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 610925, name: '岚皋县', pid: '610900', type: 'district', pinyin: 'lan gao xian', py: 'lgx', prefix: 'l',
  },
  {
    id: 610926, name: '平利县', pid: '610900', type: 'district', pinyin: 'ping li xian', py: 'plx', prefix: 'p',
  },
  {
    id: 610927, name: '镇坪县', pid: '610900', type: 'district', pinyin: 'zhen ping xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 610928, name: '旬阳县', pid: '610900', type: 'district', pinyin: 'xun yang xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 610929, name: '白河县', pid: '610900', type: 'district', pinyin: 'bai he xian', py: 'bhx', prefix: 'b',
  },
  {
    id: 611002, name: '商州区', pid: '611000', type: 'district', pinyin: 'shang zhou qu', py: 'szq', prefix: 's',
  },
  {
    id: 611021, name: '洛南县', pid: '611000', type: 'district', pinyin: 'luo nan xian', py: 'lnx', prefix: 'l',
  },
  {
    id: 611022, name: '丹凤县', pid: '611000', type: 'district', pinyin: 'dan feng xian', py: 'dfx', prefix: 'd',
  },
  {
    id: 611023, name: '商南县', pid: '611000', type: 'district', pinyin: 'shang nan xian', py: 'snx', prefix: 's',
  },
  {
    id: 611024, name: '山阳县', pid: '611000', type: 'district', pinyin: 'shan yang xian', py: 'syx', prefix: 's',
  },
  {
    id: 611025, name: '镇安县', pid: '611000', type: 'district', pinyin: 'zhen an xian', py: 'zax', prefix: 'z',
  },
  {
    id: 611026, name: '柞水县', pid: '611000', type: 'district', pinyin: 'zuo shui xian', py: 'zsx', prefix: 'z',
  },
  {
    id: 620102, name: '城关区', pid: '620100', type: 'district', pinyin: 'cheng guan qu', py: 'cgq', prefix: 'c',
  },
  {
    id: 620103, name: '七里河区', pid: '620100', type: 'district', pinyin: 'qi li he qu', py: 'qlhq', prefix: 'q',
  },
  {
    id: 620104, name: '西固区', pid: '620100', type: 'district', pinyin: 'xi gu qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 620105, name: '安宁区', pid: '620100', type: 'district', pinyin: 'an ning qu', py: 'anq', prefix: 'a',
  },
  {
    id: 620111, name: '红古区', pid: '620100', type: 'district', pinyin: 'hong gu qu', py: 'hgq', prefix: 'h',
  },
  {
    id: 620121, name: '永登县', pid: '620100', type: 'district', pinyin: 'yong deng xian', py: 'ydx', prefix: 'y',
  },
  {
    id: 620122, name: '皋兰县', pid: '620100', type: 'district', pinyin: 'gao lan xian', py: 'glx', prefix: 'g',
  },
  {
    id: 620123, name: '榆中县', pid: '620100', type: 'district', pinyin: 'yu zhong xian', py: 'yzx', prefix: 'y',
  },
  {
    id: 620302, name: '金川区', pid: '620300', type: 'district', pinyin: 'jin chuan qu', py: 'jcq', prefix: 'j',
  },
  {
    id: 620321, name: '永昌县', pid: '620300', type: 'district', pinyin: 'yong chang xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 620402, name: '白银区', pid: '620400', type: 'district', pinyin: 'bai yin qu', py: 'byq', prefix: 'b',
  },
  {
    id: 620403, name: '平川区', pid: '620400', type: 'district', pinyin: 'ping chuan qu', py: 'pcq', prefix: 'p',
  },
  {
    id: 620421, name: '靖远县', pid: '620400', type: 'district', pinyin: 'jing yuan xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 620422, name: '会宁县', pid: '620400', type: 'district', pinyin: 'hui ning xian', py: 'hnx', prefix: 'h',
  },
  {
    id: 620423, name: '景泰县', pid: '620400', type: 'district', pinyin: 'jing tai xian', py: 'jtx', prefix: 'j',
  },
  {
    id: 620502, name: '秦州区', pid: '620500', type: 'district', pinyin: 'qin zhou qu', py: 'qzq', prefix: 'q',
  },
  {
    id: 620503, name: '麦积区', pid: '620500', type: 'district', pinyin: 'mai ji qu', py: 'mjq', prefix: 'm',
  },
  {
    id: 620521, name: '清水县', pid: '620500', type: 'district', pinyin: 'qing shui xian', py: 'qsx', prefix: 'q',
  },
  {
    id: 620522, name: '秦安县', pid: '620500', type: 'district', pinyin: 'qin an xian', py: 'qax', prefix: 'q',
  },
  {
    id: 620523, name: '甘谷县', pid: '620500', type: 'district', pinyin: 'gan gu xian', py: 'ggx', prefix: 'g',
  },
  {
    id: 620524, name: '武山县', pid: '620500', type: 'district', pinyin: 'wu shan xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 620525, name: '张家川回族自治县', pid: '620500', type: 'district', pinyin: 'zhang jia chuan hui zu zi zhi xian', py: 'zjchzzzx', prefix: 'z',
  },
  {
    id: 620602, name: '凉州区', pid: '620600', type: 'district', pinyin: 'liang zhou qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 620621, name: '民勤县', pid: '620600', type: 'district', pinyin: 'min qin xian', py: 'mqx', prefix: 'm',
  },
  {
    id: 620622, name: '古浪县', pid: '620600', type: 'district', pinyin: 'gu lang xian', py: 'glx', prefix: 'g',
  },
  {
    id: 620623, name: '天祝藏族自治县', pid: '620600', type: 'district', pinyin: 'tian zhu zang zu zi zhi xian', py: 'tzzzzzx', prefix: 't',
  },
  {
    id: 620702, name: '甘州区', pid: '620700', type: 'district', pinyin: 'gan zhou qu', py: 'gzq', prefix: 'g',
  },
  {
    id: 620721, name: '肃南裕固族自治县', pid: '620700', type: 'district', pinyin: 'su nan yu gu zu zi zhi xian', py: 'snygzzzx', prefix: 's',
  },
  {
    id: 620722, name: '民乐县', pid: '620700', type: 'district', pinyin: 'min le xian', py: 'mlx', prefix: 'm',
  },
  {
    id: 620723, name: '临泽县', pid: '620700', type: 'district', pinyin: 'lin ze xian', py: 'lzx', prefix: 'l',
  },
  {
    id: 620724, name: '高台县', pid: '620700', type: 'district', pinyin: 'gao tai xian', py: 'gtx', prefix: 'g',
  },
  {
    id: 620725, name: '山丹县', pid: '620700', type: 'district', pinyin: 'shan dan xian', py: 'sdx', prefix: 's',
  },
  {
    id: 620802, name: '崆峒区', pid: '620800', type: 'district', pinyin: 'kong tong qu', py: 'ktq', prefix: 'k',
  },
  {
    id: 620821, name: '泾川县', pid: '620800', type: 'district', pinyin: 'jing chuan xian', py: 'jcx', prefix: 'j',
  },
  {
    id: 620822, name: '灵台县', pid: '620800', type: 'district', pinyin: 'ling tai xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 620823, name: '崇信县', pid: '620800', type: 'district', pinyin: 'chong xin xian', py: 'cxx', prefix: 'c',
  },
  {
    id: 620824, name: '华亭县', pid: '620800', type: 'district', pinyin: 'hua ting xian', py: 'htx', prefix: 'h',
  },
  {
    id: 620825, name: '庄浪县', pid: '620800', type: 'district', pinyin: 'zhuang lang xian', py: 'zlx', prefix: 'z',
  },
  {
    id: 620826, name: '静宁县', pid: '620800', type: 'district', pinyin: 'jing ning xian', py: 'jnx', prefix: 'j',
  },
  {
    id: 620902, name: '肃州区', pid: '620900', type: 'district', pinyin: 'su zhou qu', py: 'szq', prefix: 's',
  },
  {
    id: 620921, name: '金塔县', pid: '620900', type: 'district', pinyin: 'jin ta xian', py: 'jtx', prefix: 'j',
  },
  {
    id: 620922, name: '瓜州县', pid: '620900', type: 'district', pinyin: 'gua zhou xian', py: 'gzx', prefix: 'g',
  },
  {
    id: 620923, name: '肃北蒙古族自治县', pid: '620900', type: 'district', pinyin: 'su bei meng gu zu zi zhi xian', py: 'sbmgzzzx', prefix: 's',
  },
  {
    id: 620924, name: '阿克塞哈萨克族自治县', pid: '620900', type: 'district', pinyin: 'a ke sai ha sa ke zu zi zhi xian', py: 'akshskzzzx', prefix: 'a',
  },
  {
    id: 620981, name: '玉门市', pid: '620900', type: 'district', pinyin: 'yu men shi', py: 'yms', prefix: 'y',
  },
  {
    id: 620982, name: '敦煌市', pid: '620900', type: 'district', pinyin: 'dun huang shi', py: 'dhs', prefix: 'd',
  },
  {
    id: 621002, name: '西峰区', pid: '621000', type: 'district', pinyin: 'xi feng qu', py: 'xfq', prefix: 'x',
  },
  {
    id: 621021, name: '庆城县', pid: '621000', type: 'district', pinyin: 'qing cheng xian', py: 'qcx', prefix: 'q',
  },
  {
    id: 621022, name: '环县', pid: '621000', type: 'district', pinyin: 'huan xian', py: 'hx', prefix: 'h',
  },
  {
    id: 621023, name: '华池县', pid: '621000', type: 'district', pinyin: 'hua chi xian', py: 'hcx', prefix: 'h',
  },
  {
    id: 621024, name: '合水县', pid: '621000', type: 'district', pinyin: 'he shui xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 621025, name: '正宁县', pid: '621000', type: 'district', pinyin: 'zheng ning xian', py: 'znx', prefix: 'z',
  },
  {
    id: 621026, name: '宁县', pid: '621000', type: 'district', pinyin: 'ning xian', py: 'nx', prefix: 'n',
  },
  {
    id: 621027, name: '镇原县', pid: '621000', type: 'district', pinyin: 'zhen yuan xian', py: 'zyx', prefix: 'z',
  },
  {
    id: 621102, name: '安定区', pid: '621100', type: 'district', pinyin: 'an ding qu', py: 'adq', prefix: 'a',
  },
  {
    id: 621121, name: '通渭县', pid: '621100', type: 'district', pinyin: 'tong wei xian', py: 'twx', prefix: 't',
  },
  {
    id: 621122, name: '陇西县', pid: '621100', type: 'district', pinyin: 'long xi xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 621123, name: '渭源县', pid: '621100', type: 'district', pinyin: 'wei yuan xian', py: 'wyx', prefix: 'w',
  },
  {
    id: 621124, name: '临洮县', pid: '621100', type: 'district', pinyin: 'lin tao xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 621125, name: '漳县', pid: '621100', type: 'district', pinyin: 'zhang xian', py: 'zx', prefix: 'z',
  },
  {
    id: 621126, name: '岷县', pid: '621100', type: 'district', pinyin: 'min xian', py: 'mx', prefix: 'm',
  },
  {
    id: 621202, name: '武都区', pid: '621200', type: 'district', pinyin: 'wu dou qu', py: 'wdq', prefix: 'w',
  },
  {
    id: 621221, name: '成县', pid: '621200', type: 'district', pinyin: 'cheng xian', py: 'cx', prefix: 'c',
  },
  {
    id: 621222, name: '文县', pid: '621200', type: 'district', pinyin: 'wen xian', py: 'wx', prefix: 'w',
  },
  {
    id: 621223, name: '宕昌县', pid: '621200', type: 'district', pinyin: 'dang chang xian', py: 'dcx', prefix: 'd',
  },
  {
    id: 621224, name: '康县', pid: '621200', type: 'district', pinyin: 'kang xian', py: 'kx', prefix: 'k',
  },
  {
    id: 621225, name: '西和县', pid: '621200', type: 'district', pinyin: 'xi he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 621226, name: '礼县', pid: '621200', type: 'district', pinyin: 'li xian', py: 'lx', prefix: 'l',
  },
  {
    id: 621227, name: '徽县', pid: '621200', type: 'district', pinyin: 'hui xian', py: 'hx', prefix: 'h',
  },
  {
    id: 621228, name: '两当县', pid: '621200', type: 'district', pinyin: 'liang dang xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 622901, name: '临夏市', pid: '622900', type: 'district', pinyin: 'lin xia shi', py: 'lxs', prefix: 'l',
  },
  {
    id: 622921, name: '临夏县', pid: '622900', type: 'district', pinyin: 'lin xia xian', py: 'lxx', prefix: 'l',
  },
  {
    id: 622922, name: '康乐县', pid: '622900', type: 'district', pinyin: 'kang le xian', py: 'klx', prefix: 'k',
  },
  {
    id: 622923, name: '永靖县', pid: '622900', type: 'district', pinyin: 'yong jing xian', py: 'yjx', prefix: 'y',
  },
  {
    id: 622924, name: '广河县', pid: '622900', type: 'district', pinyin: 'guang he xian', py: 'ghx', prefix: 'g',
  },
  {
    id: 622925, name: '和政县', pid: '622900', type: 'district', pinyin: 'he zheng xian', py: 'hzx', prefix: 'h',
  },
  {
    id: 622926, name: '东乡族自治县', pid: '622900', type: 'district', pinyin: 'dong xiang zu zi zhi xian', py: 'dxzzzx', prefix: 'd',
  },
  {
    id: 622927, name: '积石山保安族东乡族撒拉族自治县', pid: '622900', type: 'district', pinyin: 'ji shi shan bao an zu dong xiang zu sa la zu zi zhi xian', py: 'jssbazdxzslzzzx', prefix: 'j',
  },
  {
    id: 623001, name: '合作市', pid: '623000', type: 'district', pinyin: 'he zuo shi', py: 'hzs', prefix: 'h',
  },
  {
    id: 623021, name: '临潭县', pid: '623000', type: 'district', pinyin: 'lin tan xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 623022, name: '卓尼县', pid: '623000', type: 'district', pinyin: 'zhuo ni xian', py: 'znx', prefix: 'z',
  },
  {
    id: 623023, name: '舟曲县', pid: '623000', type: 'district', pinyin: 'zhou qu xian', py: 'zqx', prefix: 'z',
  },
  {
    id: 623024, name: '迭部县', pid: '623000', type: 'district', pinyin: 'die bu xian', py: 'dbx', prefix: 'd',
  },
  {
    id: 623025, name: '玛曲县', pid: '623000', type: 'district', pinyin: 'ma qu xian', py: 'mqx', prefix: 'm',
  },
  {
    id: 623026, name: '碌曲县', pid: '623000', type: 'district', pinyin: 'liu qu xian', py: 'lqx', prefix: 'l',
  },
  {
    id: 623027, name: '夏河县', pid: '623000', type: 'district', pinyin: 'xia he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 630102, name: '城东区', pid: '630100', type: 'district', pinyin: 'cheng dong qu', py: 'cdq', prefix: 'c',
  },
  {
    id: 630103, name: '城中区', pid: '630100', type: 'district', pinyin: 'cheng zhong qu', py: 'czq', prefix: 'c',
  },
  {
    id: 630104, name: '城西区', pid: '630100', type: 'district', pinyin: 'cheng xi qu', py: 'cxq', prefix: 'c',
  },
  {
    id: 630105, name: '城北区', pid: '630100', type: 'district', pinyin: 'cheng bei qu', py: 'cbq', prefix: 'c',
  },
  {
    id: 630121, name: '大通回族土族自治县', pid: '630100', type: 'district', pinyin: 'da tong hui zu tu zu zi zhi xian', py: 'dthztzzzx', prefix: 'd',
  },
  {
    id: 630122, name: '湟中县', pid: '630100', type: 'district', pinyin: 'huang zhong xian', py: 'hzx', prefix: 'h',
  },
  {
    id: 630123, name: '湟源县', pid: '630100', type: 'district', pinyin: 'huang yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 630202, name: '乐都区', pid: '630200', type: 'district', pinyin: 'le dou qu', py: 'ldq', prefix: 'l',
  },
  {
    id: 630221, name: '平安县', pid: '630200', type: 'district', pinyin: 'ping an xian', py: 'pax', prefix: 'p',
  },
  {
    id: 630222, name: '民和回族土族自治县', pid: '630200', type: 'district', pinyin: 'min he hui zu tu zu zi zhi xian', py: 'mhhztzzzx', prefix: 'm',
  },
  {
    id: 630223, name: '互助土族自治县', pid: '630200', type: 'district', pinyin: 'hu zhu tu zu zi zhi xian', py: 'hztzzzx', prefix: 'h',
  },
  {
    id: 630224, name: '化隆回族自治县', pid: '630200', type: 'district', pinyin: 'hua long hui zu zi zhi xian', py: 'hlhzzzx', prefix: 'h',
  },
  {
    id: 630225, name: '循化撒拉族自治县', pid: '630200', type: 'district', pinyin: 'xun hua sa la zu zi zhi xian', py: 'xhslzzzx', prefix: 'x',
  },
  {
    id: 632221, name: '门源回族自治县', pid: '632200', type: 'district', pinyin: 'men yuan hui zu zi zhi xian', py: 'myhzzzx', prefix: 'm',
  },
  {
    id: 632222, name: '祁连县', pid: '632200', type: 'district', pinyin: 'qi lian xian', py: 'qlx', prefix: 'q',
  },
  {
    id: 632223, name: '海晏县', pid: '632200', type: 'district', pinyin: 'hai yan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 632224, name: '刚察县', pid: '632200', type: 'district', pinyin: 'gang cha xian', py: 'gcx', prefix: 'g',
  },
  {
    id: 632321, name: '同仁县', pid: '632300', type: 'district', pinyin: 'tong ren xian', py: 'trx', prefix: 't',
  },
  {
    id: 632322, name: '尖扎县', pid: '632300', type: 'district', pinyin: 'jian zha xian', py: 'jzx', prefix: 'j',
  },
  {
    id: 632323, name: '泽库县', pid: '632300', type: 'district', pinyin: 'ze ku xian', py: 'zkx', prefix: 'z',
  },
  {
    id: 632324, name: '河南蒙古族自治县', pid: '632300', type: 'district', pinyin: 'he nan meng gu zu zi zhi xian', py: 'hnmgzzzx', prefix: 'h',
  },
  {
    id: 632521, name: '共和县', pid: '632500', type: 'district', pinyin: 'gong he xian', py: 'ghx', prefix: 'g',
  },
  {
    id: 632522, name: '同德县', pid: '632500', type: 'district', pinyin: 'tong de xian', py: 'tdx', prefix: 't',
  },
  {
    id: 632523, name: '贵德县', pid: '632500', type: 'district', pinyin: 'gui de xian', py: 'gdx', prefix: 'g',
  },
  {
    id: 632524, name: '兴海县', pid: '632500', type: 'district', pinyin: 'xing hai xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 632525, name: '贵南县', pid: '632500', type: 'district', pinyin: 'gui nan xian', py: 'gnx', prefix: 'g',
  },
  {
    id: 632621, name: '玛沁县', pid: '632600', type: 'district', pinyin: 'ma qin xian', py: 'mqx', prefix: 'm',
  },
  {
    id: 632622, name: '班玛县', pid: '632600', type: 'district', pinyin: 'ban ma xian', py: 'bmx', prefix: 'b',
  },
  {
    id: 632623, name: '甘德县', pid: '632600', type: 'district', pinyin: 'gan de xian', py: 'gdx', prefix: 'g',
  },
  {
    id: 632624, name: '达日县', pid: '632600', type: 'district', pinyin: 'da ri xian', py: 'drx', prefix: 'd',
  },
  {
    id: 632625, name: '久治县', pid: '632600', type: 'district', pinyin: 'jiu zhi xian', py: 'jzx', prefix: 'j',
  },
  {
    id: 632626, name: '玛多县', pid: '632600', type: 'district', pinyin: 'ma duo xian', py: 'mdx', prefix: 'm',
  },
  {
    id: 632701, name: '玉树市', pid: '632700', type: 'district', pinyin: 'yu shu shi', py: 'yss', prefix: 'y',
  },
  {
    id: 632722, name: '杂多县', pid: '632700', type: 'district', pinyin: 'za duo xian', py: 'zdx', prefix: 'z',
  },
  {
    id: 632723, name: '称多县', pid: '632700', type: 'district', pinyin: 'cheng duo xian', py: 'cdx', prefix: 'c',
  },
  {
    id: 632724, name: '治多县', pid: '632700', type: 'district', pinyin: 'zhi duo xian', py: 'zdx', prefix: 'z',
  },
  {
    id: 632725, name: '囊谦县', pid: '632700', type: 'district', pinyin: 'nang qian xian', py: 'nqx', prefix: 'n',
  },
  {
    id: 632726, name: '曲麻莱县', pid: '632700', type: 'district', pinyin: 'qu ma lai xian', py: 'qmlx', prefix: 'q',
  },
  {
    id: 632801, name: '格尔木市', pid: '632800', type: 'district', pinyin: 'ge er mu shi', py: 'gems', prefix: 'g',
  },
  {
    id: 632802, name: '德令哈市', pid: '632800', type: 'district', pinyin: 'de ling ha shi', py: 'dlhs', prefix: 'd',
  },
  {
    id: 632821, name: '乌兰县', pid: '632800', type: 'district', pinyin: 'wu lan xian', py: 'wlx', prefix: 'w',
  },
  {
    id: 632822, name: '都兰县', pid: '632800', type: 'district', pinyin: 'dou lan xian', py: 'dlx', prefix: 'd',
  },
  {
    id: 632823, name: '天峻县', pid: '632800', type: 'district', pinyin: 'tian jun xian', py: 'tjx', prefix: 't',
  },
  {
    id: 640104, name: '兴庆区', pid: '640100', type: 'district', pinyin: 'xing qing qu', py: 'xqq', prefix: 'x',
  },
  {
    id: 640105, name: '西夏区', pid: '640100', type: 'district', pinyin: 'xi xia qu', py: 'xxq', prefix: 'x',
  },
  {
    id: 640106, name: '金凤区', pid: '640100', type: 'district', pinyin: 'jin feng qu', py: 'jfq', prefix: 'j',
  },
  {
    id: 640121, name: '永宁县', pid: '640100', type: 'district', pinyin: 'yong ning xian', py: 'ynx', prefix: 'y',
  },
  {
    id: 640122, name: '贺兰县', pid: '640100', type: 'district', pinyin: 'he lan xian', py: 'hlx', prefix: 'h',
  },
  {
    id: 640181, name: '灵武市', pid: '640100', type: 'district', pinyin: 'ling wu shi', py: 'lws', prefix: 'l',
  },
  {
    id: 640202, name: '大武口区', pid: '640200', type: 'district', pinyin: 'da wu kou qu', py: 'dwkq', prefix: 'd',
  },
  {
    id: 640205, name: '惠农区', pid: '640200', type: 'district', pinyin: 'hui nong qu', py: 'hnq', prefix: 'h',
  },
  {
    id: 640221, name: '平罗县', pid: '640200', type: 'district', pinyin: 'ping luo xian', py: 'plx', prefix: 'p',
  },
  {
    id: 640302, name: '利通区', pid: '640300', type: 'district', pinyin: 'li tong qu', py: 'ltq', prefix: 'l',
  },
  {
    id: 640303, name: '红寺堡区', pid: '640300', type: 'district', pinyin: 'hong si bao qu', py: 'hsbq', prefix: 'h',
  },
  {
    id: 640323, name: '盐池县', pid: '640300', type: 'district', pinyin: 'yan chi xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 640324, name: '同心县', pid: '640300', type: 'district', pinyin: 'tong xin xian', py: 'txx', prefix: 't',
  },
  {
    id: 640381, name: '青铜峡市', pid: '640300', type: 'district', pinyin: 'qing tong xia shi', py: 'qtxs', prefix: 'q',
  },
  {
    id: 640402, name: '原州区', pid: '640400', type: 'district', pinyin: 'yuan zhou qu', py: 'yzq', prefix: 'y',
  },
  {
    id: 640422, name: '西吉县', pid: '640400', type: 'district', pinyin: 'xi ji xian', py: 'xjx', prefix: 'x',
  },
  {
    id: 640423, name: '隆德县', pid: '640400', type: 'district', pinyin: 'long de xian', py: 'ldx', prefix: 'l',
  },
  {
    id: 640424, name: '泾源县', pid: '640400', type: 'district', pinyin: 'jing yuan xian', py: 'jyx', prefix: 'j',
  },
  {
    id: 640425, name: '彭阳县', pid: '640400', type: 'district', pinyin: 'peng yang xian', py: 'pyx', prefix: 'p',
  },
  {
    id: 640502, name: '沙坡头区', pid: '640500', type: 'district', pinyin: 'sha po tou qu', py: 'sptq', prefix: 's',
  },
  {
    id: 640521, name: '中宁县', pid: '640500', type: 'district', pinyin: 'zhong ning xian', py: 'znx', prefix: 'z',
  },
  {
    id: 640522, name: '海原县', pid: '640500', type: 'district', pinyin: 'hai yuan xian', py: 'hyx', prefix: 'h',
  },
  {
    id: 650102, name: '天山区', pid: '650100', type: 'district', pinyin: 'tian shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 650103, name: '沙依巴克区', pid: '650100', type: 'district', pinyin: 'sha yi ba ke qu', py: 'sybkq', prefix: 's',
  },
  {
    id: 650104, name: '新市区', pid: '650100', type: 'district', pinyin: 'xin shi qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 650105, name: '水磨沟区', pid: '650100', type: 'district', pinyin: 'shui mo gou qu', py: 'smgq', prefix: 's',
  },
  {
    id: 650106, name: '头屯河区', pid: '650100', type: 'district', pinyin: 'tou tun he qu', py: 'tthq', prefix: 't',
  },
  {
    id: 650107, name: '达坂城区', pid: '650100', type: 'district', pinyin: 'da ban cheng qu', py: 'dbcq', prefix: 'd',
  },
  {
    id: 650109, name: '米东区', pid: '650100', type: 'district', pinyin: 'mi dong qu', py: 'mdq', prefix: 'm',
  },
  {
    id: 650121, name: '乌鲁木齐县', pid: '650100', type: 'district', pinyin: 'wu lu mu qi xian', py: 'wlmqx', prefix: 'w',
  },
  {
    id: 650202, name: '独山子区', pid: '650200', type: 'district', pinyin: 'du shan zi qu', py: 'dszq', prefix: 'd',
  },
  {
    id: 650203, name: '克拉玛依区', pid: '650200', type: 'district', pinyin: 'ke la ma yi qu', py: 'klmyq', prefix: 'k',
  },
  {
    id: 650204, name: '白碱滩区', pid: '650200', type: 'district', pinyin: 'bai jian tan qu', py: 'bjtq', prefix: 'b',
  },
  {
    id: 650205, name: '乌尔禾区', pid: '650200', type: 'district', pinyin: 'wu er he qu', py: 'wehq', prefix: 'w',
  },
  {
    id: 652101, name: '吐鲁番市', pid: '652100', type: 'district', pinyin: 'tu lu fan shi', py: 'tlfs', prefix: 't',
  },
  {
    id: 652122, name: '鄯善县', pid: '652100', type: 'district', pinyin: 'shan shan xian', py: 'ssx', prefix: 's',
  },
  {
    id: 652123, name: '托克逊县', pid: '652100', type: 'district', pinyin: 'tuo ke xun xian', py: 'tkxx', prefix: 't',
  },
  {
    id: 652201, name: '哈密市', pid: '652200', type: 'district', pinyin: 'ha mi shi', py: 'hms', prefix: 'h',
  },
  {
    id: 652222, name: '巴里坤哈萨克自治县', pid: '652200', type: 'district', pinyin: 'ba li kun ha sa ke zi zhi xian', py: 'blkhskzzx', prefix: 'b',
  },
  {
    id: 652223, name: '伊吾县', pid: '652200', type: 'district', pinyin: 'yi wu xian', py: 'ywx', prefix: 'y',
  },
  {
    id: 652301, name: '昌吉市', pid: '652300', type: 'district', pinyin: 'chang ji shi', py: 'cjs', prefix: 'c',
  },
  {
    id: 652302, name: '阜康市', pid: '652300', type: 'district', pinyin: 'fu kang shi', py: 'fks', prefix: 'f',
  },
  {
    id: 652323, name: '呼图壁县', pid: '652300', type: 'district', pinyin: 'hu tu bi xian', py: 'htbx', prefix: 'h',
  },
  {
    id: 652324, name: '玛纳斯县', pid: '652300', type: 'district', pinyin: 'ma na si xian', py: 'mnsx', prefix: 'm',
  },
  {
    id: 652325, name: '奇台县', pid: '652300', type: 'district', pinyin: 'qi tai xian', py: 'qtx', prefix: 'q',
  },
  {
    id: 652327, name: '吉木萨尔县', pid: '652300', type: 'district', pinyin: 'ji mu sa er xian', py: 'jmsex', prefix: 'j',
  },
  {
    id: 652328, name: '木垒哈萨克自治县', pid: '652300', type: 'district', pinyin: 'mu lei ha sa ke zi zhi xian', py: 'mlhskzzx', prefix: 'm',
  },
  {
    id: 652701, name: '博乐市', pid: '652700', type: 'district', pinyin: 'bo le shi', py: 'bls', prefix: 'b',
  },
  {
    id: 652702, name: '阿拉山口市', pid: '652700', type: 'district', pinyin: 'a la shan kou shi', py: 'alsks', prefix: 'a',
  },
  {
    id: 652722, name: '精河县', pid: '652700', type: 'district', pinyin: 'jing he xian', py: 'jhx', prefix: 'j',
  },
  {
    id: 652723, name: '温泉县', pid: '652700', type: 'district', pinyin: 'wen quan xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 652801, name: '库尔勒市', pid: '652800', type: 'district', pinyin: 'ku er le shi', py: 'kels', prefix: 'k',
  },
  {
    id: 652822, name: '轮台县', pid: '652800', type: 'district', pinyin: 'lun tai xian', py: 'ltx', prefix: 'l',
  },
  {
    id: 652823, name: '尉犁县', pid: '652800', type: 'district', pinyin: 'wei li xian', py: 'wlx', prefix: 'w',
  },
  {
    id: 652824, name: '若羌县', pid: '652800', type: 'district', pinyin: 'ruo qiang xian', py: 'rqx', prefix: 'r',
  },
  {
    id: 652825, name: '且末县', pid: '652800', type: 'district', pinyin: 'qie mo xian', py: 'qmx', prefix: 'q',
  },
  {
    id: 652826, name: '焉耆回族自治县', pid: '652800', type: 'district', pinyin: 'yan qi hui zu zi zhi xian', py: 'yqhzzzx', prefix: 'y',
  },
  {
    id: 652827, name: '和静县', pid: '652800', type: 'district', pinyin: 'he jing xian', py: 'hjx', prefix: 'h',
  },
  {
    id: 652828, name: '和硕县', pid: '652800', type: 'district', pinyin: 'he shuo xian', py: 'hsx', prefix: 'h',
  },
  {
    id: 652829, name: '博湖县', pid: '652800', type: 'district', pinyin: 'bo hu xian', py: 'bhx', prefix: 'b',
  },
  {
    id: 652901, name: '阿克苏市', pid: '652900', type: 'district', pinyin: 'a ke su shi', py: 'akss', prefix: 'a',
  },
  {
    id: 652922, name: '温宿县', pid: '652900', type: 'district', pinyin: 'wen su xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 652923, name: '库车县', pid: '652900', type: 'district', pinyin: 'ku che xian', py: 'kcx', prefix: 'k',
  },
  {
    id: 652924, name: '沙雅县', pid: '652900', type: 'district', pinyin: 'sha ya xian', py: 'syx', prefix: 's',
  },
  {
    id: 652925, name: '新和县', pid: '652900', type: 'district', pinyin: 'xin he xian', py: 'xhx', prefix: 'x',
  },
  {
    id: 652926, name: '拜城县', pid: '652900', type: 'district', pinyin: 'bai cheng xian', py: 'bcx', prefix: 'b',
  },
  {
    id: 652927, name: '乌什县', pid: '652900', type: 'district', pinyin: 'wu shen xian', py: 'wsx', prefix: 'w',
  },
  {
    id: 652928, name: '阿瓦提县', pid: '652900', type: 'district', pinyin: 'a wa ti xian', py: 'awtx', prefix: 'a',
  },
  {
    id: 652929, name: '柯坪县', pid: '652900', type: 'district', pinyin: 'ke ping xian', py: 'kpx', prefix: 'k',
  },
  {
    id: 653001, name: '阿图什市', pid: '653000', type: 'district', pinyin: 'a tu shen shi', py: 'atss', prefix: 'a',
  },
  {
    id: 653022, name: '阿克陶县', pid: '653000', type: 'district', pinyin: 'a ke tao xian', py: 'aktx', prefix: 'a',
  },
  {
    id: 653023, name: '阿合奇县', pid: '653000', type: 'district', pinyin: 'a he qi xian', py: 'ahqx', prefix: 'a',
  },
  {
    id: 653024, name: '乌恰县', pid: '653000', type: 'district', pinyin: 'wu qia xian', py: 'wqx', prefix: 'w',
  },
  {
    id: 653101, name: '喀什市', pid: '653100', type: 'district', pinyin: 'ka shen shi', py: 'kss', prefix: 'k',
  },
  {
    id: 653121, name: '疏附县', pid: '653100', type: 'district', pinyin: 'shu fu xian', py: 'sfx', prefix: 's',
  },
  {
    id: 653122, name: '疏勒县', pid: '653100', type: 'district', pinyin: 'shu le xian', py: 'slx', prefix: 's',
  },
  {
    id: 653123, name: '英吉沙县', pid: '653100', type: 'district', pinyin: 'ying ji sha xian', py: 'yjsx', prefix: 'y',
  },
  {
    id: 653124, name: '泽普县', pid: '653100', type: 'district', pinyin: 'ze pu xian', py: 'zpx', prefix: 'z',
  },
  {
    id: 653125, name: '莎车县', pid: '653100', type: 'district', pinyin: 'sha che xian', py: 'scx', prefix: 's',
  },
  {
    id: 653126, name: '叶城县', pid: '653100', type: 'district', pinyin: 'ye cheng xian', py: 'ycx', prefix: 'y',
  },
  {
    id: 653127, name: '麦盖提县', pid: '653100', type: 'district', pinyin: 'mai gai ti xian', py: 'mgtx', prefix: 'm',
  },
  {
    id: 653128, name: '岳普湖县', pid: '653100', type: 'district', pinyin: 'yue pu hu xian', py: 'yphx', prefix: 'y',
  },
  {
    id: 653129, name: '伽师县', pid: '653100', type: 'district', pinyin: 'jia shi xian', py: 'jsx', prefix: 'j',
  },
  {
    id: 653130, name: '巴楚县', pid: '653100', type: 'district', pinyin: 'ba chu xian', py: 'bcx', prefix: 'b',
  },
  {
    id: 653131, name: '塔什库尔干塔吉克自治县', pid: '653100', type: 'district', pinyin: 'ta shen ku er gan ta ji ke zi zhi xian', py: 'tskegtjkzzx', prefix: 't',
  },
  {
    id: 653201, name: '和田市', pid: '653200', type: 'district', pinyin: 'he tian shi', py: 'hts', prefix: 'h',
  },
  {
    id: 653221, name: '和田县', pid: '653200', type: 'district', pinyin: 'he tian xian', py: 'htx', prefix: 'h',
  },
  {
    id: 653222, name: '墨玉县', pid: '653200', type: 'district', pinyin: 'mo yu xian', py: 'myx', prefix: 'm',
  },
  {
    id: 653223, name: '皮山县', pid: '653200', type: 'district', pinyin: 'pi shan xian', py: 'psx', prefix: 'p',
  },
  {
    id: 653224, name: '洛浦县', pid: '653200', type: 'district', pinyin: 'luo pu xian', py: 'lpx', prefix: 'l',
  },
  {
    id: 653225, name: '策勒县', pid: '653200', type: 'district', pinyin: 'ce le xian', py: 'clx', prefix: 'c',
  },
  {
    id: 653226, name: '于田县', pid: '653200', type: 'district', pinyin: 'yu tian xian', py: 'ytx', prefix: 'y',
  },
  {
    id: 653227, name: '民丰县', pid: '653200', type: 'district', pinyin: 'min feng xian', py: 'mfx', prefix: 'm',
  },
  {
    id: 654002, name: '伊宁市', pid: '654000', type: 'district', pinyin: 'yi ning shi', py: 'yns', prefix: 'y',
  },
  {
    id: 654003, name: '奎屯市', pid: '654000', type: 'district', pinyin: 'kui tun shi', py: 'kts', prefix: 'k',
  },
  {
    id: 654021, name: '伊宁县', pid: '654000', type: 'district', pinyin: 'yi ning xian', py: 'ynx', prefix: 'y',
  },
  {
    id: 654022, name: '察布查尔锡伯自治县', pid: '654000', type: 'district', pinyin: 'cha bu cha er xi bo zi zhi xian', py: 'cbcexbzzx', prefix: 'c',
  },
  {
    id: 654023, name: '霍城县', pid: '654000', type: 'district', pinyin: 'huo cheng xian', py: 'hcx', prefix: 'h',
  },
  {
    id: 654024, name: '巩留县', pid: '654000', type: 'district', pinyin: 'gong liu xian', py: 'glx', prefix: 'g',
  },
  {
    id: 654025, name: '新源县', pid: '654000', type: 'district', pinyin: 'xin yuan xian', py: 'xyx', prefix: 'x',
  },
  {
    id: 654026, name: '昭苏县', pid: '654000', type: 'district', pinyin: 'zhao su xian', py: 'zsx', prefix: 'z',
  },
  {
    id: 654027, name: '特克斯县', pid: '654000', type: 'district', pinyin: 'te ke si xian', py: 'tksx', prefix: 't',
  },
  {
    id: 654028, name: '尼勒克县', pid: '654000', type: 'district', pinyin: 'ni le ke xian', py: 'nlkx', prefix: 'n',
  },
  {
    id: 654201, name: '塔城市', pid: '654200', type: 'district', pinyin: 'ta cheng shi', py: 'tcs', prefix: 't',
  },
  {
    id: 654202, name: '乌苏市', pid: '654200', type: 'district', pinyin: 'wu su shi', py: 'wss', prefix: 'w',
  },
  {
    id: 654221, name: '额敏县', pid: '654200', type: 'district', pinyin: 'e min xian', py: 'emx', prefix: 'e',
  },
  {
    id: 654223, name: '沙湾县', pid: '654200', type: 'district', pinyin: 'sha wan xian', py: 'swx', prefix: 's',
  },
  {
    id: 654224, name: '托里县', pid: '654200', type: 'district', pinyin: 'tuo li xian', py: 'tlx', prefix: 't',
  },
  {
    id: 654225, name: '裕民县', pid: '654200', type: 'district', pinyin: 'yu min xian', py: 'ymx', prefix: 'y',
  },
  {
    id: 654226, name: '和布克赛尔蒙古自治县', pid: '654200', type: 'district', pinyin: 'he bu ke sai er meng gu zi zhi xian', py: 'hbksemgzzx', prefix: 'h',
  },
  {
    id: 654301, name: '阿勒泰市', pid: '654300', type: 'district', pinyin: 'a le tai shi', py: 'alts', prefix: 'a',
  },
  {
    id: 654321, name: '布尔津县', pid: '654300', type: 'district', pinyin: 'bu er jin xian', py: 'bejx', prefix: 'b',
  },
  {
    id: 654322, name: '富蕴县', pid: '654300', type: 'district', pinyin: 'fu yun xian', py: 'fyx', prefix: 'f',
  },
  {
    id: 654323, name: '福海县', pid: '654300', type: 'district', pinyin: 'fu hai xian', py: 'fhx', prefix: 'f',
  },
  {
    id: 654324, name: '哈巴河县', pid: '654300', type: 'district', pinyin: 'ha ba he xian', py: 'hbhx', prefix: 'h',
  },
  {
    id: 654325, name: '青河县', pid: '654300', type: 'district', pinyin: 'qing he xian', py: 'qhx', prefix: 'q',
  },
  {
    id: 654326, name: '吉木乃县', pid: '654300', type: 'district', pinyin: 'ji mu nai xian', py: 'jmnx', prefix: 'j',
  },
  {
    id: 659001, name: '石河子市', pid: '659000', type: 'district', pinyin: 'shi he zi shi', py: 'shzs', prefix: 's',
  },
  {
    id: 659002, name: '阿拉尔市', pid: '659000', type: 'district', pinyin: 'a la er shi', py: 'ales', prefix: 'a',
  },
  {
    id: 659003, name: '图木舒克市', pid: '659000', type: 'district', pinyin: 'tu mu shu ke shi', py: 'tmsks', prefix: 't',
  },
  {
    id: 659004, name: '五家渠市', pid: '659000', type: 'district', pinyin: 'wu jia qu shi', py: 'wjqs', prefix: 'w',
  },
  {
    id: 710101, name: '中正区', pid: '710100', type: 'district', pinyin: 'zhong zheng qu', py: 'zzq', prefix: 'z',
  },
  {
    id: 710102, name: '大同区', pid: '710100', type: 'district', pinyin: 'da tong qu', py: 'dtq', prefix: 'd',
  },
  {
    id: 710103, name: '中山区', pid: '710100', type: 'district', pinyin: 'zhong shan qu', py: 'zsq', prefix: 'z',
  },
  {
    id: 710104, name: '松山区', pid: '710100', type: 'district', pinyin: 'song shan qu', py: 'ssq', prefix: 's',
  },
  {
    id: 710105, name: '大安区', pid: '710100', type: 'district', pinyin: 'da an qu', py: 'daq', prefix: 'd',
  },
  {
    id: 710106, name: '万华区', pid: '710100', type: 'district', pinyin: 'wan hua qu', py: 'whq', prefix: 'w',
  },
  {
    id: 710107, name: '信义区', pid: '710100', type: 'district', pinyin: 'xin yi qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 710108, name: '士林区', pid: '710100', type: 'district', pinyin: 'shi lin qu', py: 'slq', prefix: 's',
  },
  {
    id: 710109, name: '北投区', pid: '710100', type: 'district', pinyin: 'bei tou qu', py: 'btq', prefix: 'b',
  },
  {
    id: 710110, name: '内湖区', pid: '710100', type: 'district', pinyin: 'nei hu qu', py: 'nhq', prefix: 'n',
  },
  {
    id: 710111, name: '南港区', pid: '710100', type: 'district', pinyin: 'nan gang qu', py: 'ngq', prefix: 'n',
  },
  {
    id: 710112, name: '文山区', pid: '710100', type: 'district', pinyin: 'wen shan qu', py: 'wsq', prefix: 'w',
  },
  {
    id: 710113, name: '其它区', pid: '710100', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710201, name: '新兴区', pid: '710200', type: 'district', pinyin: 'xin xing qu', py: 'xxq', prefix: 'x',
  },
  {
    id: 710202, name: '前金区', pid: '710200', type: 'district', pinyin: 'qian jin qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 710203, name: '芩雅区', pid: '710200', type: 'district', pinyin: 'qin ya qu', py: 'qyq', prefix: 'q',
  },
  {
    id: 710204, name: '盐埕区', pid: '710200', type: 'district', pinyin: 'yan cheng qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 710205, name: '鼓山区', pid: '710200', type: 'district', pinyin: 'gu shan qu', py: 'gsq', prefix: 'g',
  },
  {
    id: 710206, name: '旗津区', pid: '710200', type: 'district', pinyin: 'qi jin qu', py: 'qjq', prefix: 'q',
  },
  {
    id: 710207, name: '前镇区', pid: '710200', type: 'district', pinyin: 'qian zhen qu', py: 'qzq', prefix: 'q',
  },
  {
    id: 710208, name: '三民区', pid: '710200', type: 'district', pinyin: 'san min qu', py: 'smq', prefix: 's',
  },
  {
    id: 710209, name: '左营区', pid: '710200', type: 'district', pinyin: 'zuo ying qu', py: 'zyq', prefix: 'z',
  },
  {
    id: 710210, name: '楠梓区', pid: '710200', type: 'district', pinyin: 'nan zi qu', py: 'nzq', prefix: 'n',
  },
  {
    id: 710211, name: '小港区', pid: '710200', type: 'district', pinyin: 'xiao gang qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 710212, name: '其它区', pid: '710200', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710241, name: '苓雅区', pid: '710200', type: 'district', pinyin: 'ling ya qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 710242, name: '仁武区', pid: '710200', type: 'district', pinyin: 'ren wu qu', py: 'rwq', prefix: 'r',
  },
  {
    id: 710243, name: '大社区', pid: '710200', type: 'district', pinyin: 'da she qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 710244, name: '冈山区', pid: '710200', type: 'district', pinyin: 'gang shan qu', py: 'gsq', prefix: 'g',
  },
  {
    id: 710245, name: '路竹区', pid: '710200', type: 'district', pinyin: 'lu zhu qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 710246, name: '阿莲区', pid: '710200', type: 'district', pinyin: 'a lian qu', py: 'alq', prefix: 'a',
  },
  {
    id: 710247, name: '田寮区', pid: '710200', type: 'district', pinyin: 'tian liao qu', py: 'tlq', prefix: 't',
  },
  {
    id: 710248, name: '燕巢区', pid: '710200', type: 'district', pinyin: 'yan chao qu', py: 'ycq', prefix: 'y',
  },
  {
    id: 710249, name: '桥头区', pid: '710200', type: 'district', pinyin: 'qiao tou qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710250, name: '梓官区', pid: '710200', type: 'district', pinyin: 'zi guan qu', py: 'zgq', prefix: 'z',
  },
  {
    id: 710251, name: '弥陀区', pid: '710200', type: 'district', pinyin: 'mi tuo qu', py: 'mtq', prefix: 'm',
  },
  {
    id: 710252, name: '永安区', pid: '710200', type: 'district', pinyin: 'yong an qu', py: 'yaq', prefix: 'y',
  },
  {
    id: 710253, name: '湖内区', pid: '710200', type: 'district', pinyin: 'hu nei qu', py: 'hnq', prefix: 'h',
  },
  {
    id: 710254, name: '凤山区', pid: '710200', type: 'district', pinyin: 'feng shan qu', py: 'fsq', prefix: 'f',
  },
  {
    id: 710255, name: '大寮区', pid: '710200', type: 'district', pinyin: 'da liao qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 710256, name: '林园区', pid: '710200', type: 'district', pinyin: 'lin yuan qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 710257, name: '鸟松区', pid: '710200', type: 'district', pinyin: 'niao song qu', py: 'nsq', prefix: 'n',
  },
  {
    id: 710258, name: '大树区', pid: '710200', type: 'district', pinyin: 'da shu qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 710259, name: '旗山区', pid: '710200', type: 'district', pinyin: 'qi shan qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 710260, name: '美浓区', pid: '710200', type: 'district', pinyin: 'mei nong qu', py: 'mnq', prefix: 'm',
  },
  {
    id: 710261, name: '六龟区', pid: '710200', type: 'district', pinyin: 'liu gui qu', py: 'lgq', prefix: 'l',
  },
  {
    id: 710262, name: '内门区', pid: '710200', type: 'district', pinyin: 'nei men qu', py: 'nmq', prefix: 'n',
  },
  {
    id: 710263, name: '杉林区', pid: '710200', type: 'district', pinyin: 'shan lin qu', py: 'slq', prefix: 's',
  },
  {
    id: 710264, name: '甲仙区', pid: '710200', type: 'district', pinyin: 'jia xian qu', py: 'jxq', prefix: 'j',
  },
  {
    id: 710265, name: '桃源区', pid: '710200', type: 'district', pinyin: 'tao yuan qu', py: 'tyq', prefix: 't',
  },
  {
    id: 710266, name: '那玛夏区', pid: '710200', type: 'district', pinyin: 'nei ma xia qu', py: 'nmxq', prefix: 'n',
  },
  {
    id: 710267, name: '茂林区', pid: '710200', type: 'district', pinyin: 'mao lin qu', py: 'mlq', prefix: 'm',
  },
  {
    id: 710268, name: '茄萣区', pid: '710200', type: 'district', pinyin: 'qie ding qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 710301, name: '中西区', pid: '710300', type: 'district', pinyin: 'zhong xi qu', py: 'zxq', prefix: 'z',
  },
  {
    id: 710302, name: '东区', pid: '710300', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 710303, name: '南区', pid: '710300', type: 'district', pinyin: 'nan qu', py: 'nq', prefix: 'n',
  },
  {
    id: 710304, name: '北区', pid: '710300', type: 'district', pinyin: 'bei qu', py: 'bq', prefix: 'b',
  },
  {
    id: 710305, name: '安平区', pid: '710300', type: 'district', pinyin: 'an ping qu', py: 'apq', prefix: 'a',
  },
  {
    id: 710306, name: '安南区', pid: '710300', type: 'district', pinyin: 'an nan qu', py: 'anq', prefix: 'a',
  },
  {
    id: 710307, name: '其它区', pid: '710300', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710339, name: '永康区', pid: '710300', type: 'district', pinyin: 'yong kang qu', py: 'ykq', prefix: 'y',
  },
  {
    id: 710340, name: '归仁区', pid: '710300', type: 'district', pinyin: 'gui ren qu', py: 'grq', prefix: 'g',
  },
  {
    id: 710341, name: '新化区', pid: '710300', type: 'district', pinyin: 'xin hua qu', py: 'xhq', prefix: 'x',
  },
  {
    id: 710342, name: '左镇区', pid: '710300', type: 'district', pinyin: 'zuo zhen qu', py: 'zzq', prefix: 'z',
  },
  {
    id: 710343, name: '玉井区', pid: '710300', type: 'district', pinyin: 'yu jing qu', py: 'yjq', prefix: 'y',
  },
  {
    id: 710344, name: '楠西区', pid: '710300', type: 'district', pinyin: 'nan xi qu', py: 'nxq', prefix: 'n',
  },
  {
    id: 710345, name: '南化区', pid: '710300', type: 'district', pinyin: 'nan hua qu', py: 'nhq', prefix: 'n',
  },
  {
    id: 710346, name: '仁德区', pid: '710300', type: 'district', pinyin: 'ren de qu', py: 'rdq', prefix: 'r',
  },
  {
    id: 710347, name: '关庙区', pid: '710300', type: 'district', pinyin: 'guan miao qu', py: 'gmq', prefix: 'g',
  },
  {
    id: 710348, name: '龙崎区', pid: '710300', type: 'district', pinyin: 'long qi qu', py: 'lqq', prefix: 'l',
  },
  {
    id: 710349, name: '官田区', pid: '710300', type: 'district', pinyin: 'guan tian qu', py: 'gtq', prefix: 'g',
  },
  {
    id: 710350, name: '麻豆区', pid: '710300', type: 'district', pinyin: 'ma dou qu', py: 'mdq', prefix: 'm',
  },
  {
    id: 710351, name: '佳里区', pid: '710300', type: 'district', pinyin: 'jia li qu', py: 'jlq', prefix: 'j',
  },
  {
    id: 710352, name: '西港区', pid: '710300', type: 'district', pinyin: 'xi gang qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 710353, name: '七股区', pid: '710300', type: 'district', pinyin: 'qi gu qu', py: 'qgq', prefix: 'q',
  },
  {
    id: 710354, name: '将军区', pid: '710300', type: 'district', pinyin: 'jiang jun qu', py: 'jjq', prefix: 'j',
  },
  {
    id: 710355, name: '学甲区', pid: '710300', type: 'district', pinyin: 'xue jia qu', py: 'xjq', prefix: 'x',
  },
  {
    id: 710356, name: '北门区', pid: '710300', type: 'district', pinyin: 'bei men qu', py: 'bmq', prefix: 'b',
  },
  {
    id: 710357, name: '新营区', pid: '710300', type: 'district', pinyin: 'xin ying qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 710358, name: '后壁区', pid: '710300', type: 'district', pinyin: 'hou bi qu', py: 'hbq', prefix: 'h',
  },
  {
    id: 710359, name: '白河区', pid: '710300', type: 'district', pinyin: 'bai he qu', py: 'bhq', prefix: 'b',
  },
  {
    id: 710360, name: '东山区', pid: '710300', type: 'district', pinyin: 'dong shan qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 710361, name: '六甲区', pid: '710300', type: 'district', pinyin: 'liu jia qu', py: 'ljq', prefix: 'l',
  },
  {
    id: 710362, name: '下营区', pid: '710300', type: 'district', pinyin: 'xia ying qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 710363, name: '柳营区', pid: '710300', type: 'district', pinyin: 'liu ying qu', py: 'lyq', prefix: 'l',
  },
  {
    id: 710364, name: '盐水区', pid: '710300', type: 'district', pinyin: 'yan shui qu', py: 'ysq', prefix: 'y',
  },
  {
    id: 710365, name: '善化区', pid: '710300', type: 'district', pinyin: 'shan hua qu', py: 'shq', prefix: 's',
  },
  {
    id: 710366, name: '大内区', pid: '710300', type: 'district', pinyin: 'da nei qu', py: 'dnq', prefix: 'd',
  },
  {
    id: 710367, name: '山上区', pid: '710300', type: 'district', pinyin: 'shan shang qu', py: 'ssq', prefix: 's',
  },
  {
    id: 710368, name: '新市区', pid: '710300', type: 'district', pinyin: 'xin shi qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 710369, name: '安定区', pid: '710300', type: 'district', pinyin: 'an ding qu', py: 'adq', prefix: 'a',
  },
  {
    id: 710401, name: '中区', pid: '710400', type: 'district', pinyin: 'zhong qu', py: 'zq', prefix: 'z',
  },
  {
    id: 710402, name: '东区', pid: '710400', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 710403, name: '南区', pid: '710400', type: 'district', pinyin: 'nan qu', py: 'nq', prefix: 'n',
  },
  {
    id: 710404, name: '西区', pid: '710400', type: 'district', pinyin: 'xi qu', py: 'xq', prefix: 'x',
  },
  {
    id: 710405, name: '北区', pid: '710400', type: 'district', pinyin: 'bei qu', py: 'bq', prefix: 'b',
  },
  {
    id: 710406, name: '北屯区', pid: '710400', type: 'district', pinyin: 'bei tun qu', py: 'btq', prefix: 'b',
  },
  {
    id: 710407, name: '西屯区', pid: '710400', type: 'district', pinyin: 'xi tun qu', py: 'xtq', prefix: 'x',
  },
  {
    id: 710408, name: '南屯区', pid: '710400', type: 'district', pinyin: 'nan tun qu', py: 'ntq', prefix: 'n',
  },
  {
    id: 710409, name: '其它区', pid: '710400', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710431, name: '太平区', pid: '710400', type: 'district', pinyin: 'tai ping qu', py: 'tpq', prefix: 't',
  },
  {
    id: 710432, name: '大里区', pid: '710400', type: 'district', pinyin: 'da li qu', py: 'dlq', prefix: 'd',
  },
  {
    id: 710433, name: '雾峰区', pid: '710400', type: 'district', pinyin: 'wu feng qu', py: 'wfq', prefix: 'w',
  },
  {
    id: 710434, name: '乌日区', pid: '710400', type: 'district', pinyin: 'wu ri qu', py: 'wrq', prefix: 'w',
  },
  {
    id: 710435, name: '丰原区', pid: '710400', type: 'district', pinyin: 'feng yuan qu', py: 'fyq', prefix: 'f',
  },
  {
    id: 710436, name: '后里区', pid: '710400', type: 'district', pinyin: 'hou li qu', py: 'hlq', prefix: 'h',
  },
  {
    id: 710437, name: '石冈区', pid: '710400', type: 'district', pinyin: 'shi gang qu', py: 'sgq', prefix: 's',
  },
  {
    id: 710438, name: '东势区', pid: '710400', type: 'district', pinyin: 'dong shi qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 710439, name: '和平区', pid: '710400', type: 'district', pinyin: 'he ping qu', py: 'hpq', prefix: 'h',
  },
  {
    id: 710440, name: '新社区', pid: '710400', type: 'district', pinyin: 'xin she qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 710441, name: '潭子区', pid: '710400', type: 'district', pinyin: 'tan zi qu', py: 'tzq', prefix: 't',
  },
  {
    id: 710442, name: '大雅区', pid: '710400', type: 'district', pinyin: 'da ya qu', py: 'dyq', prefix: 'd',
  },
  {
    id: 710443, name: '神冈区', pid: '710400', type: 'district', pinyin: 'shen gang qu', py: 'sgq', prefix: 's',
  },
  {
    id: 710444, name: '大肚区', pid: '710400', type: 'district', pinyin: 'da du qu', py: 'ddq', prefix: 'd',
  },
  {
    id: 710445, name: '沙鹿区', pid: '710400', type: 'district', pinyin: 'sha lu qu', py: 'slq', prefix: 's',
  },
  {
    id: 710446, name: '龙井区', pid: '710400', type: 'district', pinyin: 'long jing qu', py: 'ljq', prefix: 'l',
  },
  {
    id: 710447, name: '梧栖区', pid: '710400', type: 'district', pinyin: 'wu qi qu', py: 'wqq', prefix: 'w',
  },
  {
    id: 710448, name: '清水区', pid: '710400', type: 'district', pinyin: 'qing shui qu', py: 'qsq', prefix: 'q',
  },
  {
    id: 710449, name: '大甲区', pid: '710400', type: 'district', pinyin: 'da jia qu', py: 'djq', prefix: 'd',
  },
  {
    id: 710450, name: '外埔区', pid: '710400', type: 'district', pinyin: 'wai pu qu', py: 'wpq', prefix: 'w',
  },
  {
    id: 710451, name: '大安区', pid: '710400', type: 'district', pinyin: 'da an qu', py: 'daq', prefix: 'd',
  },
  {
    id: 710507, name: '金沙镇', pid: '710500', type: 'district', pinyin: 'jin sha zhen', py: 'jsz', prefix: 'j',
  },
  {
    id: 710508, name: '金湖镇', pid: '710500', type: 'district', pinyin: 'jin hu zhen', py: 'jhz', prefix: 'j',
  },
  {
    id: 710509, name: '金宁乡', pid: '710500', type: 'district', pinyin: 'jin ning xiang', py: 'jnx', prefix: 'j',
  },
  {
    id: 710510, name: '金城镇', pid: '710500', type: 'district', pinyin: 'jin cheng zhen', py: 'jcz', prefix: 'j',
  },
  {
    id: 710511, name: '烈屿乡', pid: '710500', type: 'district', pinyin: 'lie yu xiang', py: 'lyx', prefix: 'l',
  },
  {
    id: 710512, name: '乌坵乡', pid: '710500', type: 'district', pinyin: 'wu qiu xiang', py: 'wqx', prefix: 'w',
  },
  {
    id: 710614, name: '南投市', pid: '710600', type: 'district', pinyin: 'nan tou shi', py: 'nts', prefix: 'n',
  },
  {
    id: 710615, name: '中寮乡', pid: '710600', type: 'district', pinyin: 'zhong liao xiang', py: 'zlx', prefix: 'z',
  },
  {
    id: 710616, name: '草屯镇', pid: '710600', type: 'district', pinyin: 'cao tun zhen', py: 'ctz', prefix: 'c',
  },
  {
    id: 710617, name: '国姓乡', pid: '710600', type: 'district', pinyin: 'guo xing xiang', py: 'gxx', prefix: 'g',
  },
  {
    id: 710618, name: '埔里镇', pid: '710600', type: 'district', pinyin: 'pu li zhen', py: 'plz', prefix: 'p',
  },
  {
    id: 710619, name: '仁爱乡', pid: '710600', type: 'district', pinyin: 'ren ai xiang', py: 'rax', prefix: 'r',
  },
  {
    id: 710620, name: '名间乡', pid: '710600', type: 'district', pinyin: 'ming jian xiang', py: 'mjx', prefix: 'm',
  },
  {
    id: 710621, name: '集集镇', pid: '710600', type: 'district', pinyin: 'ji ji zhen', py: 'jjz', prefix: 'j',
  },
  {
    id: 710622, name: '水里乡', pid: '710600', type: 'district', pinyin: 'shui li xiang', py: 'slx', prefix: 's',
  },
  {
    id: 710623, name: '鱼池乡', pid: '710600', type: 'district', pinyin: 'yu chi xiang', py: 'ycx', prefix: 'y',
  },
  {
    id: 710624, name: '信义乡', pid: '710600', type: 'district', pinyin: 'xin yi xiang', py: 'xyx', prefix: 'x',
  },
  {
    id: 710625, name: '竹山镇', pid: '710600', type: 'district', pinyin: 'zhu shan zhen', py: 'zsz', prefix: 'z',
  },
  {
    id: 710626, name: '鹿谷乡', pid: '710600', type: 'district', pinyin: 'lu gu xiang', py: 'lgx', prefix: 'l',
  },
  {
    id: 710701, name: '仁爱区', pid: '710700', type: 'district', pinyin: 'ren ai qu', py: 'raq', prefix: 'r',
  },
  {
    id: 710702, name: '信义区', pid: '710700', type: 'district', pinyin: 'xin yi qu', py: 'xyq', prefix: 'x',
  },
  {
    id: 710703, name: '中正区', pid: '710700', type: 'district', pinyin: 'zhong zheng qu', py: 'zzq', prefix: 'z',
  },
  {
    id: 710704, name: '中山区', pid: '710700', type: 'district', pinyin: 'zhong shan qu', py: 'zsq', prefix: 'z',
  },
  {
    id: 710705, name: '安乐区', pid: '710700', type: 'district', pinyin: 'an le qu', py: 'alq', prefix: 'a',
  },
  {
    id: 710706, name: '暖暖区', pid: '710700', type: 'district', pinyin: 'nuan nuan qu', py: 'nnq', prefix: 'n',
  },
  {
    id: 710707, name: '七堵区', pid: '710700', type: 'district', pinyin: 'qi du qu', py: 'qdq', prefix: 'q',
  },
  {
    id: 710708, name: '其它区', pid: '710700', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710801, name: '东区', pid: '710800', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 710802, name: '北区', pid: '710800', type: 'district', pinyin: 'bei qu', py: 'bq', prefix: 'b',
  },
  {
    id: 710803, name: '香山区', pid: '710800', type: 'district', pinyin: 'xiang shan qu', py: 'xsq', prefix: 'x',
  },
  {
    id: 710804, name: '其它区', pid: '710800', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 710901, name: '东区', pid: '710900', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 710902, name: '西区', pid: '710900', type: 'district', pinyin: 'xi qu', py: 'xq', prefix: 'x',
  },
  {
    id: 710903, name: '其它区', pid: '710900', type: 'district', pinyin: 'qi ta qu', py: 'qtq', prefix: 'q',
  },
  {
    id: 711130, name: '万里区', pid: '711100', type: 'district', pinyin: 'wan li qu', py: 'wlq', prefix: 'w',
  },
  {
    id: 711131, name: '金山区', pid: '711100', type: 'district', pinyin: 'jin shan qu', py: 'jsq', prefix: 'j',
  },
  {
    id: 711132, name: '板桥区', pid: '711100', type: 'district', pinyin: 'ban qiao qu', py: 'bqq', prefix: 'b',
  },
  {
    id: 711133, name: '汐止区', pid: '711100', type: 'district', pinyin: 'xi zhi qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 711134, name: '深坑区', pid: '711100', type: 'district', pinyin: 'shen keng qu', py: 'skq', prefix: 's',
  },
  {
    id: 711135, name: '石碇区', pid: '711100', type: 'district', pinyin: 'shi ding qu', py: 'sdq', prefix: 's',
  },
  {
    id: 711136, name: '瑞芳区', pid: '711100', type: 'district', pinyin: 'rui fang qu', py: 'rfq', prefix: 'r',
  },
  {
    id: 711137, name: '平溪区', pid: '711100', type: 'district', pinyin: 'ping xi qu', py: 'pxq', prefix: 'p',
  },
  {
    id: 711138, name: '双溪区', pid: '711100', type: 'district', pinyin: 'shuang xi qu', py: 'sxq', prefix: 's',
  },
  {
    id: 711139, name: '贡寮区', pid: '711100', type: 'district', pinyin: 'gong liao qu', py: 'glq', prefix: 'g',
  },
  {
    id: 711140, name: '新店区', pid: '711100', type: 'district', pinyin: 'xin dian qu', py: 'xdq', prefix: 'x',
  },
  {
    id: 711141, name: '坪林区', pid: '711100', type: 'district', pinyin: 'ping lin qu', py: 'plq', prefix: 'p',
  },
  {
    id: 711142, name: '乌来区', pid: '711100', type: 'district', pinyin: 'wu lai qu', py: 'wlq', prefix: 'w',
  },
  {
    id: 711143, name: '永和区', pid: '711100', type: 'district', pinyin: 'yong he qu', py: 'yhq', prefix: 'y',
  },
  {
    id: 711144, name: '中和区', pid: '711100', type: 'district', pinyin: 'zhong he qu', py: 'zhq', prefix: 'z',
  },
  {
    id: 711145, name: '土城区', pid: '711100', type: 'district', pinyin: 'tu cheng qu', py: 'tcq', prefix: 't',
  },
  {
    id: 711146, name: '三峡区', pid: '711100', type: 'district', pinyin: 'san xia qu', py: 'sxq', prefix: 's',
  },
  {
    id: 711147, name: '树林区', pid: '711100', type: 'district', pinyin: 'shu lin qu', py: 'slq', prefix: 's',
  },
  {
    id: 711148, name: '莺歌区', pid: '711100', type: 'district', pinyin: 'ying ge qu', py: 'ygq', prefix: 'y',
  },
  {
    id: 711149, name: '三重区', pid: '711100', type: 'district', pinyin: 'san chong qu', py: 'scq', prefix: 's',
  },
  {
    id: 711150, name: '新庄区', pid: '711100', type: 'district', pinyin: 'xin zhuang qu', py: 'xzq', prefix: 'x',
  },
  {
    id: 711151, name: '泰山区', pid: '711100', type: 'district', pinyin: 'tai shan qu', py: 'tsq', prefix: 't',
  },
  {
    id: 711152, name: '林口区', pid: '711100', type: 'district', pinyin: 'lin kou qu', py: 'lkq', prefix: 'l',
  },
  {
    id: 711153, name: '芦洲区', pid: '711100', type: 'district', pinyin: 'lu zhou qu', py: 'lzq', prefix: 'l',
  },
  {
    id: 711154, name: '五股区', pid: '711100', type: 'district', pinyin: 'wu gu qu', py: 'wgq', prefix: 'w',
  },
  {
    id: 711155, name: '八里区', pid: '711100', type: 'district', pinyin: 'ba li qu', py: 'blq', prefix: 'b',
  },
  {
    id: 711156, name: '淡水区', pid: '711100', type: 'district', pinyin: 'dan shui qu', py: 'dsq', prefix: 'd',
  },
  {
    id: 711157, name: '三芝区', pid: '711100', type: 'district', pinyin: 'san zhi qu', py: 'szq', prefix: 's',
  },
  {
    id: 711158, name: '石门区', pid: '711100', type: 'district', pinyin: 'shi men qu', py: 'smq', prefix: 's',
  },
  {
    id: 711214, name: '宜兰市', pid: '711200', type: 'district', pinyin: 'yi lan shi', py: 'yls', prefix: 'y',
  },
  {
    id: 711215, name: '头城镇', pid: '711200', type: 'district', pinyin: 'tou cheng zhen', py: 'tcz', prefix: 't',
  },
  {
    id: 711216, name: '礁溪乡', pid: '711200', type: 'district', pinyin: 'jiao xi xiang', py: 'jxx', prefix: 'j',
  },
  {
    id: 711217, name: '壮围乡', pid: '711200', type: 'district', pinyin: 'zhuang wei xiang', py: 'zwx', prefix: 'z',
  },
  {
    id: 711218, name: '员山乡', pid: '711200', type: 'district', pinyin: 'yuan shan xiang', py: 'ysx', prefix: 'y',
  },
  {
    id: 711219, name: '罗东镇', pid: '711200', type: 'district', pinyin: 'luo dong zhen', py: 'ldz', prefix: 'l',
  },
  {
    id: 711220, name: '三星乡', pid: '711200', type: 'district', pinyin: 'san xing xiang', py: 'sxx', prefix: 's',
  },
  {
    id: 711221, name: '大同乡', pid: '711200', type: 'district', pinyin: 'da tong xiang', py: 'dtx', prefix: 'd',
  },
  {
    id: 711222, name: '五结乡', pid: '711200', type: 'district', pinyin: 'wu jie xiang', py: 'wjx', prefix: 'w',
  },
  {
    id: 711223, name: '冬山乡', pid: '711200', type: 'district', pinyin: 'dong shan xiang', py: 'dsx', prefix: 'd',
  },
  {
    id: 711224, name: '苏澳镇', pid: '711200', type: 'district', pinyin: 'su ao zhen', py: 'saz', prefix: 's',
  },
  {
    id: 711225, name: '南澳乡', pid: '711200', type: 'district', pinyin: 'nan ao xiang', py: 'nax', prefix: 'n',
  },
  {
    id: 711226, name: '钓鱼台', pid: '711200', type: 'district', pinyin: 'diao yu tai', py: 'dyt', prefix: 'd',
  },
  {
    id: 711314, name: '竹北市', pid: '711300', type: 'district', pinyin: 'zhu bei shi', py: 'zbs', prefix: 'z',
  },
  {
    id: 711315, name: '湖口乡', pid: '711300', type: 'district', pinyin: 'hu kou xiang', py: 'hkx', prefix: 'h',
  },
  {
    id: 711316, name: '新丰乡', pid: '711300', type: 'district', pinyin: 'xin feng xiang', py: 'xfx', prefix: 'x',
  },
  {
    id: 711317, name: '新埔镇', pid: '711300', type: 'district', pinyin: 'xin pu zhen', py: 'xpz', prefix: 'x',
  },
  {
    id: 711318, name: '关西镇', pid: '711300', type: 'district', pinyin: 'guan xi zhen', py: 'gxz', prefix: 'g',
  },
  {
    id: 711319, name: '芎林乡', pid: '711300', type: 'district', pinyin: 'xiong lin xiang', py: 'xlx', prefix: 'x',
  },
  {
    id: 711320, name: '宝山乡', pid: '711300', type: 'district', pinyin: 'bao shan xiang', py: 'bsx', prefix: 'b',
  },
  {
    id: 711321, name: '竹东镇', pid: '711300', type: 'district', pinyin: 'zhu dong zhen', py: 'zdz', prefix: 'z',
  },
  {
    id: 711322, name: '五峰乡', pid: '711300', type: 'district', pinyin: 'wu feng xiang', py: 'wfx', prefix: 'w',
  },
  {
    id: 711323, name: '横山乡', pid: '711300', type: 'district', pinyin: 'heng shan xiang', py: 'hsx', prefix: 'h',
  },
  {
    id: 711324, name: '尖石乡', pid: '711300', type: 'district', pinyin: 'jian shi xiang', py: 'jsx', prefix: 'j',
  },
  {
    id: 711325, name: '北埔乡', pid: '711300', type: 'district', pinyin: 'bei pu xiang', py: 'bpx', prefix: 'b',
  },
  {
    id: 711326, name: '峨眉乡', pid: '711300', type: 'district', pinyin: 'e mei xiang', py: 'emx', prefix: 'e',
  },
  {
    id: 711414, name: '中坜市', pid: '711400', type: 'district', pinyin: 'zhong li shi', py: 'zls', prefix: 'z',
  },
  {
    id: 711415, name: '平镇市', pid: '711400', type: 'district', pinyin: 'ping zhen shi', py: 'pzs', prefix: 'p',
  },
  {
    id: 711416, name: '龙潭乡', pid: '711400', type: 'district', pinyin: 'long tan xiang', py: 'ltx', prefix: 'l',
  },
  {
    id: 711417, name: '杨梅市', pid: '711400', type: 'district', pinyin: 'yang mei shi', py: 'yms', prefix: 'y',
  },
  {
    id: 711418, name: '新屋乡', pid: '711400', type: 'district', pinyin: 'xin wu xiang', py: 'xwx', prefix: 'x',
  },
  {
    id: 711419, name: '观音乡', pid: '711400', type: 'district', pinyin: 'guan yin xiang', py: 'gyx', prefix: 'g',
  },
  {
    id: 711420, name: '桃园市', pid: '711400', type: 'district', pinyin: 'tao yuan shi', py: 'tys', prefix: 't',
  },
  {
    id: 711421, name: '龟山乡', pid: '711400', type: 'district', pinyin: 'gui shan xiang', py: 'gsx', prefix: 'g',
  },
  {
    id: 711422, name: '八德市', pid: '711400', type: 'district', pinyin: 'ba de shi', py: 'bds', prefix: 'b',
  },
  {
    id: 711423, name: '大溪镇', pid: '711400', type: 'district', pinyin: 'da xi zhen', py: 'dxz', prefix: 'd',
  },
  {
    id: 711424, name: '复兴乡', pid: '711400', type: 'district', pinyin: 'fu xing xiang', py: 'fxx', prefix: 'f',
  },
  {
    id: 711425, name: '大园乡', pid: '711400', type: 'district', pinyin: 'da yuan xiang', py: 'dyx', prefix: 'd',
  },
  {
    id: 711426, name: '芦竹乡', pid: '711400', type: 'district', pinyin: 'lu zhu xiang', py: 'lzx', prefix: 'l',
  },
  {
    id: 711519, name: '竹南镇', pid: '711500', type: 'district', pinyin: 'zhu nan zhen', py: 'znz', prefix: 'z',
  },
  {
    id: 711520, name: '头份镇', pid: '711500', type: 'district', pinyin: 'tou fen zhen', py: 'tfz', prefix: 't',
  },
  {
    id: 711521, name: '三湾乡', pid: '711500', type: 'district', pinyin: 'san wan xiang', py: 'swx', prefix: 's',
  },
  {
    id: 711522, name: '南庄乡', pid: '711500', type: 'district', pinyin: 'nan zhuang xiang', py: 'nzx', prefix: 'n',
  },
  {
    id: 711523, name: '狮潭乡', pid: '711500', type: 'district', pinyin: 'shi tan xiang', py: 'stx', prefix: 's',
  },
  {
    id: 711524, name: '后龙镇', pid: '711500', type: 'district', pinyin: 'hou long zhen', py: 'hlz', prefix: 'h',
  },
  {
    id: 711525, name: '通霄镇', pid: '711500', type: 'district', pinyin: 'tong xiao zhen', py: 'txz', prefix: 't',
  },
  {
    id: 711526, name: '苑里镇', pid: '711500', type: 'district', pinyin: 'yuan li zhen', py: 'ylz', prefix: 'y',
  },
  {
    id: 711527, name: '苗栗市', pid: '711500', type: 'district', pinyin: 'miao li shi', py: 'mls', prefix: 'm',
  },
  {
    id: 711528, name: '造桥乡', pid: '711500', type: 'district', pinyin: 'zao qiao xiang', py: 'zqx', prefix: 'z',
  },
  {
    id: 711529, name: '头屋乡', pid: '711500', type: 'district', pinyin: 'tou wu xiang', py: 'twx', prefix: 't',
  },
  {
    id: 711530, name: '公馆乡', pid: '711500', type: 'district', pinyin: 'gong guan xiang', py: 'ggx', prefix: 'g',
  },
  {
    id: 711531, name: '大湖乡', pid: '711500', type: 'district', pinyin: 'da hu xiang', py: 'dhx', prefix: 'd',
  },
  {
    id: 711532, name: '泰安乡', pid: '711500', type: 'district', pinyin: 'tai an xiang', py: 'tax', prefix: 't',
  },
  {
    id: 711533, name: '铜锣乡', pid: '711500', type: 'district', pinyin: 'tong luo xiang', py: 'tlx', prefix: 't',
  },
  {
    id: 711534, name: '三义乡', pid: '711500', type: 'district', pinyin: 'san yi xiang', py: 'syx', prefix: 's',
  },
  {
    id: 711535, name: '西湖乡', pid: '711500', type: 'district', pinyin: 'xi hu xiang', py: 'xhx', prefix: 'x',
  },
  {
    id: 711536, name: '卓兰镇', pid: '711500', type: 'district', pinyin: 'zhuo lan zhen', py: 'zlz', prefix: 'z',
  },
  {
    id: 711727, name: '彰化市', pid: '711700', type: 'district', pinyin: 'zhang hua shi', py: 'zhs', prefix: 'z',
  },
  {
    id: 711728, name: '芬园乡', pid: '711700', type: 'district', pinyin: 'fen yuan xiang', py: 'fyx', prefix: 'f',
  },
  {
    id: 711729, name: '花坛乡', pid: '711700', type: 'district', pinyin: 'hua tan xiang', py: 'htx', prefix: 'h',
  },
  {
    id: 711730, name: '秀水乡', pid: '711700', type: 'district', pinyin: 'xiu shui xiang', py: 'xsx', prefix: 'x',
  },
  {
    id: 711731, name: '鹿港镇', pid: '711700', type: 'district', pinyin: 'lu gang zhen', py: 'lgz', prefix: 'l',
  },
  {
    id: 711732, name: '福兴乡', pid: '711700', type: 'district', pinyin: 'fu xing xiang', py: 'fxx', prefix: 'f',
  },
  {
    id: 711733, name: '线西乡', pid: '711700', type: 'district', pinyin: 'xian xi xiang', py: 'xxx', prefix: 'x',
  },
  {
    id: 711734, name: '和美镇', pid: '711700', type: 'district', pinyin: 'he mei zhen', py: 'hmz', prefix: 'h',
  },
  {
    id: 711735, name: '伸港乡', pid: '711700', type: 'district', pinyin: 'shen gang xiang', py: 'sgx', prefix: 's',
  },
  {
    id: 711736, name: '员林镇', pid: '711700', type: 'district', pinyin: 'yuan lin zhen', py: 'ylz', prefix: 'y',
  },
  {
    id: 711737, name: '社头乡', pid: '711700', type: 'district', pinyin: 'she tou xiang', py: 'stx', prefix: 's',
  },
  {
    id: 711738, name: '永靖乡', pid: '711700', type: 'district', pinyin: 'yong jing xiang', py: 'yjx', prefix: 'y',
  },
  {
    id: 711739, name: '埔心乡', pid: '711700', type: 'district', pinyin: 'pu xin xiang', py: 'pxx', prefix: 'p',
  },
  {
    id: 711740, name: '溪湖镇', pid: '711700', type: 'district', pinyin: 'xi hu zhen', py: 'xhz', prefix: 'x',
  },
  {
    id: 711741, name: '大村乡', pid: '711700', type: 'district', pinyin: 'da cun xiang', py: 'dcx', prefix: 'd',
  },
  {
    id: 711742, name: '埔盐乡', pid: '711700', type: 'district', pinyin: 'pu yan xiang', py: 'pyx', prefix: 'p',
  },
  {
    id: 711743, name: '田中镇', pid: '711700', type: 'district', pinyin: 'tian zhong zhen', py: 'tzz', prefix: 't',
  },
  {
    id: 711744, name: '北斗镇', pid: '711700', type: 'district', pinyin: 'bei dou zhen', py: 'bdz', prefix: 'b',
  },
  {
    id: 711745, name: '田尾乡', pid: '711700', type: 'district', pinyin: 'tian wei xiang', py: 'twx', prefix: 't',
  },
  {
    id: 711746, name: '埤头乡', pid: '711700', type: 'district', pinyin: 'pi tou xiang', py: 'ptx', prefix: 'p',
  },
  {
    id: 711747, name: '溪州乡', pid: '711700', type: 'district', pinyin: 'xi zhou xiang', py: 'xzx', prefix: 'x',
  },
  {
    id: 711748, name: '竹塘乡', pid: '711700', type: 'district', pinyin: 'zhu tang xiang', py: 'ztx', prefix: 'z',
  },
  {
    id: 711749, name: '二林镇', pid: '711700', type: 'district', pinyin: 'er lin zhen', py: 'elz', prefix: 'e',
  },
  {
    id: 711750, name: '大城乡', pid: '711700', type: 'district', pinyin: 'da cheng xiang', py: 'dcx', prefix: 'd',
  },
  {
    id: 711751, name: '芳苑乡', pid: '711700', type: 'district', pinyin: 'fang yuan xiang', py: 'fyx', prefix: 'f',
  },
  {
    id: 711752, name: '二水乡', pid: '711700', type: 'district', pinyin: 'er shui xiang', py: 'esx', prefix: 'e',
  },
  {
    id: 711919, name: '番路乡', pid: '711900', type: 'district', pinyin: 'fan lu xiang', py: 'flx', prefix: 'f',
  },
  {
    id: 711920, name: '梅山乡', pid: '711900', type: 'district', pinyin: 'mei shan xiang', py: 'msx', prefix: 'm',
  },
  {
    id: 711921, name: '竹崎乡', pid: '711900', type: 'district', pinyin: 'zhu qi xiang', py: 'zqx', prefix: 'z',
  },
  {
    id: 711922, name: '阿里山乡', pid: '711900', type: 'district', pinyin: 'a li shan xiang', py: 'alsx', prefix: 'a',
  },
  {
    id: 711923, name: '中埔乡', pid: '711900', type: 'district', pinyin: 'zhong pu xiang', py: 'zpx', prefix: 'z',
  },
  {
    id: 711924, name: '大埔乡', pid: '711900', type: 'district', pinyin: 'da pu xiang', py: 'dpx', prefix: 'd',
  },
  {
    id: 711925, name: '水上乡', pid: '711900', type: 'district', pinyin: 'shui shang xiang', py: 'ssx', prefix: 's',
  },
  {
    id: 711926, name: '鹿草乡', pid: '711900', type: 'district', pinyin: 'lu cao xiang', py: 'lcx', prefix: 'l',
  },
  {
    id: 711927, name: '太保市', pid: '711900', type: 'district', pinyin: 'tai bao shi', py: 'tbs', prefix: 't',
  },
  {
    id: 711928, name: '朴子市', pid: '711900', type: 'district', pinyin: 'po zi shi', py: 'pzs', prefix: 'p',
  },
  {
    id: 711929, name: '东石乡', pid: '711900', type: 'district', pinyin: 'dong shi xiang', py: 'dsx', prefix: 'd',
  },
  {
    id: 711930, name: '六脚乡', pid: '711900', type: 'district', pinyin: 'liu jiao xiang', py: 'ljx', prefix: 'l',
  },
  {
    id: 711931, name: '新港乡', pid: '711900', type: 'district', pinyin: 'xin gang xiang', py: 'xgx', prefix: 'x',
  },
  {
    id: 711932, name: '民雄乡', pid: '711900', type: 'district', pinyin: 'min xiong xiang', py: 'mxx', prefix: 'm',
  },
  {
    id: 711933, name: '大林镇', pid: '711900', type: 'district', pinyin: 'da lin zhen', py: 'dlz', prefix: 'd',
  },
  {
    id: 711934, name: '溪口乡', pid: '711900', type: 'district', pinyin: 'xi kou xiang', py: 'xkx', prefix: 'x',
  },
  {
    id: 711935, name: '义竹乡', pid: '711900', type: 'district', pinyin: 'yi zhu xiang', py: 'yzx', prefix: 'y',
  },
  {
    id: 711936, name: '布袋镇', pid: '711900', type: 'district', pinyin: 'bu dai zhen', py: 'bdz', prefix: 'b',
  },
  {
    id: 712121, name: '斗南镇', pid: '712100', type: 'district', pinyin: 'dou nan zhen', py: 'dnz', prefix: 'd',
  },
  {
    id: 712122, name: '大埤乡', pid: '712100', type: 'district', pinyin: 'da pi xiang', py: 'dpx', prefix: 'd',
  },
  {
    id: 712123, name: '虎尾镇', pid: '712100', type: 'district', pinyin: 'hu wei zhen', py: 'hwz', prefix: 'h',
  },
  {
    id: 712124, name: '土库镇', pid: '712100', type: 'district', pinyin: 'tu ku zhen', py: 'tkz', prefix: 't',
  },
  {
    id: 712125, name: '褒忠乡', pid: '712100', type: 'district', pinyin: 'bao zhong xiang', py: 'bzx', prefix: 'b',
  },
  {
    id: 712126, name: '东势乡', pid: '712100', type: 'district', pinyin: 'dong shi xiang', py: 'dsx', prefix: 'd',
  },
  {
    id: 712127, name: '台西乡', pid: '712100', type: 'district', pinyin: 'tai xi xiang', py: 'txx', prefix: 't',
  },
  {
    id: 712128, name: '仑背乡', pid: '712100', type: 'district', pinyin: 'lun bei xiang', py: 'lbx', prefix: 'l',
  },
  {
    id: 712129, name: '麦寮乡', pid: '712100', type: 'district', pinyin: 'mai liao xiang', py: 'mlx', prefix: 'm',
  },
  {
    id: 712130, name: '斗六市', pid: '712100', type: 'district', pinyin: 'dou liu shi', py: 'dls', prefix: 'd',
  },
  {
    id: 712131, name: '林内乡', pid: '712100', type: 'district', pinyin: 'lin nei xiang', py: 'lnx', prefix: 'l',
  },
  {
    id: 712132, name: '古坑乡', pid: '712100', type: 'district', pinyin: 'gu keng xiang', py: 'gkx', prefix: 'g',
  },
  {
    id: 712133, name: '莿桐乡', pid: '712100', type: 'district', pinyin: 'ci tong xiang', py: 'ctx', prefix: 'c',
  },
  {
    id: 712134, name: '西螺镇', pid: '712100', type: 'district', pinyin: 'xi luo zhen', py: 'xlz', prefix: 'x',
  },
  {
    id: 712135, name: '二仑乡', pid: '712100', type: 'district', pinyin: 'er lun xiang', py: 'elx', prefix: 'e',
  },
  {
    id: 712136, name: '北港镇', pid: '712100', type: 'district', pinyin: 'bei gang zhen', py: 'bgz', prefix: 'b',
  },
  {
    id: 712137, name: '水林乡', pid: '712100', type: 'district', pinyin: 'shui lin xiang', py: 'slx', prefix: 's',
  },
  {
    id: 712138, name: '口湖乡', pid: '712100', type: 'district', pinyin: 'kou hu xiang', py: 'khx', prefix: 'k',
  },
  {
    id: 712139, name: '四湖乡', pid: '712100', type: 'district', pinyin: 'si hu xiang', py: 'shx', prefix: 's',
  },
  {
    id: 712140, name: '元长乡', pid: '712100', type: 'district', pinyin: 'yuan chang xiang', py: 'ycx', prefix: 'y',
  },
  {
    id: 712434, name: '屏东市', pid: '712400', type: 'district', pinyin: 'ping dong shi', py: 'pds', prefix: 'p',
  },
  {
    id: 712435, name: '三地门乡', pid: '712400', type: 'district', pinyin: 'san di men xiang', py: 'sdmx', prefix: 's',
  },
  {
    id: 712436, name: '雾台乡', pid: '712400', type: 'district', pinyin: 'wu tai xiang', py: 'wtx', prefix: 'w',
  },
  {
    id: 712437, name: '玛家乡', pid: '712400', type: 'district', pinyin: 'ma jia xiang', py: 'mjx', prefix: 'm',
  },
  {
    id: 712438, name: '九如乡', pid: '712400', type: 'district', pinyin: 'jiu ru xiang', py: 'jrx', prefix: 'j',
  },
  {
    id: 712439, name: '里港乡', pid: '712400', type: 'district', pinyin: 'li gang xiang', py: 'lgx', prefix: 'l',
  },
  {
    id: 712440, name: '高树乡', pid: '712400', type: 'district', pinyin: 'gao shu xiang', py: 'gsx', prefix: 'g',
  },
  {
    id: 712441, name: '盐埔乡', pid: '712400', type: 'district', pinyin: 'yan pu xiang', py: 'ypx', prefix: 'y',
  },
  {
    id: 712442, name: '长治乡', pid: '712400', type: 'district', pinyin: 'chang zhi xiang', py: 'czx', prefix: 'c',
  },
  {
    id: 712443, name: '麟洛乡', pid: '712400', type: 'district', pinyin: 'lin luo xiang', py: 'llx', prefix: 'l',
  },
  {
    id: 712444, name: '竹田乡', pid: '712400', type: 'district', pinyin: 'zhu tian xiang', py: 'ztx', prefix: 'z',
  },
  {
    id: 712445, name: '内埔乡', pid: '712400', type: 'district', pinyin: 'nei pu xiang', py: 'npx', prefix: 'n',
  },
  {
    id: 712446, name: '万丹乡', pid: '712400', type: 'district', pinyin: 'wan dan xiang', py: 'wdx', prefix: 'w',
  },
  {
    id: 712447, name: '潮州镇', pid: '712400', type: 'district', pinyin: 'chao zhou zhen', py: 'czz', prefix: 'c',
  },
  {
    id: 712448, name: '泰武乡', pid: '712400', type: 'district', pinyin: 'tai wu xiang', py: 'twx', prefix: 't',
  },
  {
    id: 712449, name: '来义乡', pid: '712400', type: 'district', pinyin: 'lai yi xiang', py: 'lyx', prefix: 'l',
  },
  {
    id: 712450, name: '万峦乡', pid: '712400', type: 'district', pinyin: 'wan luan xiang', py: 'wlx', prefix: 'w',
  },
  {
    id: 712451, name: '崁顶乡', pid: '712400', type: 'district', pinyin: 'kan ding xiang', py: 'kdx', prefix: 'k',
  },
  {
    id: 712452, name: '新埤乡', pid: '712400', type: 'district', pinyin: 'xin pi xiang', py: 'xpx', prefix: 'x',
  },
  {
    id: 712453, name: '南州乡', pid: '712400', type: 'district', pinyin: 'nan zhou xiang', py: 'nzx', prefix: 'n',
  },
  {
    id: 712454, name: '林边乡', pid: '712400', type: 'district', pinyin: 'lin bian xiang', py: 'lbx', prefix: 'l',
  },
  {
    id: 712455, name: '东港镇', pid: '712400', type: 'district', pinyin: 'dong gang zhen', py: 'dgz', prefix: 'd',
  },
  {
    id: 712456, name: '琉球乡', pid: '712400', type: 'district', pinyin: 'liu qiu xiang', py: 'lqx', prefix: 'l',
  },
  {
    id: 712457, name: '佳冬乡', pid: '712400', type: 'district', pinyin: 'jia dong xiang', py: 'jdx', prefix: 'j',
  },
  {
    id: 712458, name: '新园乡', pid: '712400', type: 'district', pinyin: 'xin yuan xiang', py: 'xyx', prefix: 'x',
  },
  {
    id: 712459, name: '枋寮乡', pid: '712400', type: 'district', pinyin: 'fang liao xiang', py: 'flx', prefix: 'f',
  },
  {
    id: 712460, name: '枋山乡', pid: '712400', type: 'district', pinyin: 'fang shan xiang', py: 'fsx', prefix: 'f',
  },
  {
    id: 712461, name: '春日乡', pid: '712400', type: 'district', pinyin: 'chun ri xiang', py: 'crx', prefix: 'c',
  },
  {
    id: 712462, name: '狮子乡', pid: '712400', type: 'district', pinyin: 'shi zi xiang', py: 'szx', prefix: 's',
  },
  {
    id: 712463, name: '车城乡', pid: '712400', type: 'district', pinyin: 'che cheng xiang', py: 'ccx', prefix: 'c',
  },
  {
    id: 712464, name: '牡丹乡', pid: '712400', type: 'district', pinyin: 'mu dan xiang', py: 'mdx', prefix: 'm',
  },
  {
    id: 712465, name: '恒春镇', pid: '712400', type: 'district', pinyin: 'heng chun zhen', py: 'hcz', prefix: 'h',
  },
  {
    id: 712466, name: '满州乡', pid: '712400', type: 'district', pinyin: 'man zhou xiang', py: 'mzx', prefix: 'm',
  },
  {
    id: 712517, name: '台东市', pid: '712500', type: 'district', pinyin: 'tai dong shi', py: 'tds', prefix: 't',
  },
  {
    id: 712518, name: '绿岛乡', pid: '712500', type: 'district', pinyin: 'lv dao xiang', py: 'ldx', prefix: 'l',
  },
  {
    id: 712519, name: '兰屿乡', pid: '712500', type: 'district', pinyin: 'lan yu xiang', py: 'lyx', prefix: 'l',
  },
  {
    id: 712520, name: '延平乡', pid: '712500', type: 'district', pinyin: 'yan ping xiang', py: 'ypx', prefix: 'y',
  },
  {
    id: 712521, name: '卑南乡', pid: '712500', type: 'district', pinyin: 'bei nan xiang', py: 'bnx', prefix: 'b',
  },
  {
    id: 712522, name: '鹿野乡', pid: '712500', type: 'district', pinyin: 'lu ye xiang', py: 'lyx', prefix: 'l',
  },
  {
    id: 712523, name: '关山镇', pid: '712500', type: 'district', pinyin: 'guan shan zhen', py: 'gsz', prefix: 'g',
  },
  {
    id: 712524, name: '海端乡', pid: '712500', type: 'district', pinyin: 'hai duan xiang', py: 'hdx', prefix: 'h',
  },
  {
    id: 712525, name: '池上乡', pid: '712500', type: 'district', pinyin: 'chi shang xiang', py: 'csx', prefix: 'c',
  },
  {
    id: 712526, name: '东河乡', pid: '712500', type: 'district', pinyin: 'dong he xiang', py: 'dhx', prefix: 'd',
  },
  {
    id: 712527, name: '成功镇', pid: '712500', type: 'district', pinyin: 'cheng gong zhen', py: 'cgz', prefix: 'c',
  },
  {
    id: 712528, name: '长滨乡', pid: '712500', type: 'district', pinyin: 'chang bin xiang', py: 'cbx', prefix: 'c',
  },
  {
    id: 712529, name: '金峰乡', pid: '712500', type: 'district', pinyin: 'jin feng xiang', py: 'jfx', prefix: 'j',
  },
  {
    id: 712530, name: '大武乡', pid: '712500', type: 'district', pinyin: 'da wu xiang', py: 'dwx', prefix: 'd',
  },
  {
    id: 712531, name: '达仁乡', pid: '712500', type: 'district', pinyin: 'da ren xiang', py: 'drx', prefix: 'd',
  },
  {
    id: 712532, name: '太麻里乡', pid: '712500', type: 'district', pinyin: 'tai ma li xiang', py: 'tmlx', prefix: 't',
  },
  {
    id: 712615, name: '花莲市', pid: '712600', type: 'district', pinyin: 'hua lian shi', py: 'hls', prefix: 'h',
  },
  {
    id: 712616, name: '新城乡', pid: '712600', type: 'district', pinyin: 'xin cheng xiang', py: 'xcx', prefix: 'x',
  },
  {
    id: 712617, name: '太鲁阁', pid: '712600', type: 'district', pinyin: 'tai lu ge', py: 'tlg', prefix: 't',
  },
  {
    id: 712618, name: '秀林乡', pid: '712600', type: 'district', pinyin: 'xiu lin xiang', py: 'xlx', prefix: 'x',
  },
  {
    id: 712619, name: '吉安乡', pid: '712600', type: 'district', pinyin: 'ji an xiang', py: 'jax', prefix: 'j',
  },
  {
    id: 712620, name: '寿丰乡', pid: '712600', type: 'district', pinyin: 'shou feng xiang', py: 'sfx', prefix: 's',
  },
  {
    id: 712621, name: '凤林镇', pid: '712600', type: 'district', pinyin: 'feng lin zhen', py: 'flz', prefix: 'f',
  },
  {
    id: 712622, name: '光复乡', pid: '712600', type: 'district', pinyin: 'guang fu xiang', py: 'gfx', prefix: 'g',
  },
  {
    id: 712623, name: '丰滨乡', pid: '712600', type: 'district', pinyin: 'feng bin xiang', py: 'fbx', prefix: 'f',
  },
  {
    id: 712624, name: '瑞穗乡', pid: '712600', type: 'district', pinyin: 'rui sui xiang', py: 'rsx', prefix: 'r',
  },
  {
    id: 712625, name: '万荣乡', pid: '712600', type: 'district', pinyin: 'wan rong xiang', py: 'wrx', prefix: 'w',
  },
  {
    id: 712626, name: '玉里镇', pid: '712600', type: 'district', pinyin: 'yu li zhen', py: 'ylz', prefix: 'y',
  },
  {
    id: 712627, name: '卓溪乡', pid: '712600', type: 'district', pinyin: 'zhuo xi xiang', py: 'zxx', prefix: 'z',
  },
  {
    id: 712628, name: '富里乡', pid: '712600', type: 'district', pinyin: 'fu li xiang', py: 'flx', prefix: 'f',
  },
  {
    id: 712707, name: '马公市', pid: '712700', type: 'district', pinyin: 'ma gong shi', py: 'mgs', prefix: 'm',
  },
  {
    id: 712708, name: '西屿乡', pid: '712700', type: 'district', pinyin: 'xi yu xiang', py: 'xyx', prefix: 'x',
  },
  {
    id: 712709, name: '望安乡', pid: '712700', type: 'district', pinyin: 'wang an xiang', py: 'wax', prefix: 'w',
  },
  {
    id: 712710, name: '七美乡', pid: '712700', type: 'district', pinyin: 'qi mei xiang', py: 'qmx', prefix: 'q',
  },
  {
    id: 712711, name: '白沙乡', pid: '712700', type: 'district', pinyin: 'bai sha xiang', py: 'bsx', prefix: 'b',
  },
  {
    id: 712712, name: '湖西乡', pid: '712700', type: 'district', pinyin: 'hu xi xiang', py: 'hxx', prefix: 'h',
  },
  {
    id: 712805, name: '南竿乡', pid: '712800', type: 'district', pinyin: 'nan gan xiang', py: 'ngx', prefix: 'n',
  },
  {
    id: 712806, name: '北竿乡', pid: '712800', type: 'district', pinyin: 'bei gan xiang', py: 'bgx', prefix: 'b',
  },
  {
    id: 712807, name: '莒光乡', pid: '712800', type: 'district', pinyin: 'ju guang xiang', py: 'jgx', prefix: 'j',
  },
  {
    id: 712808, name: '东引乡', pid: '712800', type: 'district', pinyin: 'dong yin xiang', py: 'dyx', prefix: 'd',
  },
  {
    id: 810101, name: '中西区', pid: '810100', type: 'district', pinyin: 'zhong xi qu', py: 'zxq', prefix: 'z',
  },
  {
    id: 810102, name: '湾仔', pid: '810100', type: 'district', pinyin: 'wan zi', py: 'wz', prefix: 'w',
  },
  {
    id: 810103, name: '东区', pid: '810100', type: 'district', pinyin: 'dong qu', py: 'dq', prefix: 'd',
  },
  {
    id: 810104, name: '南区', pid: '810100', type: 'district', pinyin: 'nan qu', py: 'nq', prefix: 'n',
  },
  {
    id: 810201, name: '九龙城区', pid: '810200', type: 'district', pinyin: 'jiu long cheng qu', py: 'jlcq', prefix: 'j',
  },
  {
    id: 810202, name: '油尖旺区', pid: '810200', type: 'district', pinyin: 'you jian wang qu', py: 'yjwq', prefix: 'y',
  },
  {
    id: 810203, name: '深水埗区', pid: '810200', type: 'district', pinyin: 'shen shui bu qu', py: 'ssbq', prefix: 's',
  },
  {
    id: 810204, name: '黄大仙区', pid: '810200', type: 'district', pinyin: 'huang da xian qu', py: 'hdxq', prefix: 'h',
  },
  {
    id: 810205, name: '观塘区', pid: '810200', type: 'district', pinyin: 'guan tang qu', py: 'gtq', prefix: 'g',
  },
  {
    id: 810301, name: '北区', pid: '810300', type: 'district', pinyin: 'bei qu', py: 'bq', prefix: 'b',
  },
  {
    id: 810302, name: '大埔区', pid: '810300', type: 'district', pinyin: 'da pu qu', py: 'dpq', prefix: 'd',
  },
  {
    id: 810303, name: '沙田区', pid: '810300', type: 'district', pinyin: 'sha tian qu', py: 'stq', prefix: 's',
  },
  {
    id: 810304, name: '西贡区', pid: '810300', type: 'district', pinyin: 'xi gong qu', py: 'xgq', prefix: 'x',
  },
  {
    id: 810305, name: '元朗区', pid: '810300', type: 'district', pinyin: 'yuan lang qu', py: 'ylq', prefix: 'y',
  },
  {
    id: 810306, name: '屯门区', pid: '810300', type: 'district', pinyin: 'tun men qu', py: 'tmq', prefix: 't',
  },
  {
    id: 810307, name: '荃湾区', pid: '810300', type: 'district', pinyin: 'quan wan qu', py: 'qwq', prefix: 'q',
  },
  {
    id: 810308, name: '葵青区', pid: '810300', type: 'district', pinyin: 'kui qing qu', py: 'kqq', prefix: 'k',
  },
  {
    id: 810309, name: '离岛区', pid: '810300', type: 'district', pinyin: 'li dao qu', py: 'ldq', prefix: 'l',
  },
  {
    id: 441901, name: '直辖市', pid: '441900', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 东莞
  {
    id: 442001, name: '直辖市', pid: '442000', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 中山市
  {
    id: 460201, name: '直辖市', pid: '460200', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 三亚市
  {
    id: 620201, name: '直辖市', pid: '620200', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 嘉峪关
  {
    id: 820101, name: '直辖市', pid: '820100', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 澳门半岛
  {
    id: 820201, name: '直辖市', pid: '820200', type: 'district', pinyin: 'zhi xia qu', py: 'zxq', prefix: 'z',
  }, // 澳门离岛
];

const mapTree = prov.map((porvItem, index) => ({
  selected: index === 0,
  value: String(porvItem.id),
  label: porvItem.name,
  children: city.filter(obj => `${obj.pid}`.substr(0, 2) === `${porvItem.id}`.substr(0, 2)).map((cityObj, index) => ({
    selected: index === 0,
    value: String(cityObj.id),
    label: cityObj.name,
    children: area.filter(obj => `${obj.pid}`.substr(0, 4) === `${cityObj.id}`.substr(0, 4)).map((areaObj, index) => ({
      selected: index === 0,
      value: String(areaObj.id),
      label: areaObj.name,
    })),
  })),
}));
export { mapTree };
