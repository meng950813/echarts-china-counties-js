(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('白银区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"620402","properties":{"name":"白银区","cp":[104.148556,36.535398],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCBA@A@@@A@@@AAA@@AAEAC@C@C@C@A@GBC@AAC@A@AAABA@AB@@AB@@AF@BAB@@C@A@G@@@AA@@ACCC@AACAC@A@@AACC@ACACAEAEAA@AA@@@AA@@ABA@@@AAK@C@G@A@@@AAA@@@AAA@@AAC@@@A@AAGCCACCEAEAC@@@@AAC@AACAAAC@AAA@ABC@A@A@AACAEAEAA@@AA@C@A@@AA@ABA@ABA@A@AB@@AB@@AAAAACAAA@@AC@@ABABCBABA@ABA@@@EDCBABC@@@A@AB@@@@B@F@@@B@BBBB@@@@@BABABAB@@@B@B@B@@AD@@@@BD@B@B@@BB@B@D@BB@@@B@@BBB@@BB@BB@AB@BB@A@AB@@@B@@BB@@@DDD@BBD@BBB@BFDDD@BA@@@@B@@A@CBA@G@AAC@@BA@@B@@@@A@A@@@AB@@@AAB@@@@@B@B@@BB@@BBB@@B@@@B@B@@@B@B@@A@@@A@@BA@@@@@A@@@ABDD@@@@BB@@AB@@ABC@@@AB@@@B@B@BDB@@BBB@@@@@@@@@@@BB@@B@@BBA@B@@@@B@@@B@B@@BBB@@BA@B@@@@@@B@@@B@@@DBBBDB@@@BBB@B@BA@@@@BAB@BA@A@A@AB@@A@ABA@A@@@AB@DA@A@@@@BB@A@@B@@AB@@@@A@@BA@ABCBA@@@A@@@@A@@@@A@@@@B@@BB@@@BA@@@@BA@@BAD@BA@@B@@A@@BA@@BCDA@@B@@@BA@@@A@@BEH@B@@@B@@@B@B@B@@@B@BBDA@@B@@A@@@@B@@A@@@@@A@@@C@A@A@AA@@C@@@@@@@@B@@CB@@AB@BA@@@@BAD@@@B@@@@@@A@C@ABC@A@@B@@@BAD@B@@A@@@A@A@@@A@AD@@ABA@@@BB@@ABABAB@@@BB@@@@@AB@BA@@@@@@@AB@@@BCB@@@@@B@@DBBB@B@@AB@@C@A@ABA@@BCA@@E@C@@@@@AB@BBBBDBB@@AB@DADABAB@B@BBB@@@@ABAB@@@@@B@BB@@B@@A@@B@BBB@B@B@@@B@@A@A@AAA@@@@@ADABA@A@@@@@@BB@@BBB@@@BB@B@@B@BAB@@@BBB@F@@@BCB@B@B@@@@B@@ADBB@BBB@@@DB@@@@@BBD@BBB@@A@A@AB@BABAF@D@BA@A@@@ABABAB@B@B@@@@BBA@@B@@@@@@@BEBA@CB@@@B@@C@A@@@A@A@@@A@@@C@AB@@A@@@@@@B@@@@A@AB@@A@A@@@ABCB@@@B@BA@AB@BAB@@@BA@@BB@@@@BBBBB@BBB@@@@@BABAB@@@BBD@BBBAB@@@BB@@BB@@D@DBD@B@@@D@B@@@BB@@@@BB@@B@@@@B@B@@@@B@BB@BF@@@@B@BA@@@@@BBBBDBBA@BB@BBB@@@@@BA@@BA@C@A@CF@@AB@B@@@BBB@@@@@B@@BDBBB@@@CB@B@@@FBB@BBB@@DBBB@@@B@DBBBB@@B@B@BB@@@D@@BBB@@@BBB@@B@B@B@@BB@@@@@BABA@EAA@A@@@A@A@@@AB@@C@CAG@C@C@A@ABCBCDA@@@@@DDBB@BABA@A@C@@@EAAA@@@BA@@B@@CDA@A@AB@A@@A@@AA@@@CB@@@@@@ACAAAAA@AA@@A@@BA@@@CA@BA@ABA@A@@@@B@@ABA@A@A@ABC@A@GBA@@DABA@CBABA@@@A@@BAB@BBB@@@B@@CB@@ABA@@@A@@F@@@@AB@@@@@B@@BB@@AD@@@@CBABB@@BBB@BA@GBA@@BC@@@@B@@@@@BBB@@BBB@@@BBBD@B@@BD@@@BB@@D@@B@@@B@B@@B@@@@@B@@EBABC@ABCDA@EDA@@@AB@@EBABCB@B@@@@@@AB@BGDA@@@@F@@@@CBCBEB@BABA@@B@D@D@BAB@@CBA@EBCBE@ABC@EB@@@@AB@@E@@@@BBB@BB@BBBB@@@D@@A@ABA@C@@@CD@@C@A@@@@@BBB@BBDBBBBBB@@B@@@DBB@BAB@@@B@B@@@@@B@@@BB@@@BBD@@@B@BBFJ@@CBA@A@@@A@@@A@AD@@AB@@@B@@A@EF@@C@@@AB@BCBC@@B@@@BB@@B@@@B@@A@@@C@@B@@@@ABA@@B@@@@@B@@DBBB@@BDDBB@DBB@BBF@BB@@BBB@B@BBFBDBBB@@B@@ABA@@BC@@B@BAB@BBB@@@F@B@BAB@@B@@AB@@@BDAB@@@BB@BBB@@BBD@B@B@B@BBFB@@B@BBBBFFBB@BBB@@BBB@@@DBB@BBBB@BB@B@RAD@B@B@@@BBBB@DB@@@@@DA@A@A@@AA@@@@A@@@AA@@@A@@@C@@C@@@@A@A@AB@@@@@@C@@B@B@@@@A@@BC@@@@BBB@B@B@D@D@BBBAB@B@@@@B@@@B@@@B@@BDBB@BA@@B@BB@BFB@A@@DABBB@@@@HDDB@@DB@@@@@@@BADA@@BBB@@@BBBD@B@FADAB@L@@@BA@@H@BAB@@@BAB@H@HABBD@DBB@@@BAB@@AB@@@D@@@B@BB@@@B@@ABBB@@@@DD@@B@@@B@BAB@@@B@@@@@@B@@B@@@B@B@@B@@@B@@B@@@B@B@B@B@B@B@@@@@@B@DA@@B@B@@@@@@D@H@B@B@@@BAB@@@B@@BB@BBB@BB@@@@@B@@@BBADCB@B@BC@AB@@@B@@@@@B@@@@B@@@B@@DA@@@@@B@@@@B@@@BBB@@@B@B@B@@@BB@@@@@A@@B@@@BB@@@B@@@@B@@@@@B@@@@@@@@@BBD@@B@@BB@@B@B@@@B@BB@B@@@@@@@B@@@@BB@B@@@@DB@@@B@@@B@@BB@@@@@BB@@B@@@AB@@A@@BB@@B@@@B@B@BB@@B@B@B@@@BBB@@@BB@@@B@@@AB@@B@@BB@@@B@@B@@@B@@@DBB@B@@@@BB@@@D@p@@@BABA@@B@@@BA@@BB@@BB@@B@@@B@B@@@D@BBB@BAD@HBB@D@@@@B@@@@B@BAB@B@B@@@B@@@B@B@@@B@@@@@@@B@B@@@D@DAB@B@BAB@B@@AB@@AB@@@BA@AB@DCBA@@B@B@B@B@@ABADA@AB@@@BBB@B@F@@BB@BAB@@AB@BA@@BA@@B@@ABA@A@@@AFC@A@A@@@AB@@A@@CA@AA@CACA@@@@ACCCAC@@@@@AAA@@AC@@@@@A@AAAA@@A@@B@@@@AAA@ABA@@@@BA@@BA@@B@BA@@D@@@@@@@@A@@@@@A@@@ABA@@AA@AB@@@@ABBB@B@B@@@FC@@B@BB@@B@BB@@@@BA@BB@@B@@@BB@@@B@B@D@@@B@@BB@@@@B@AB@@@@AB@@@B@BB@@B@B@B@@@B@@@B@BB@B@@BA@@B@@BB@@@@@BA@@B@@@@B@@@@@@B@@@@AB@@BB@@@@@@@@@@@B@@@@B@B@@B@@BB@@@BBB@B@@@B@@@DA@@B@@B@@BAD@@@BAB@BBB@@@@AB@@ABA@@@C@@B@BAB@BA@A@A@@AA@@@A@AA@@AAA@@A@E@CAC@@@AA@@AA@ABC@ABCBEBA@E@CBEAA@ABA@@BABAB@BA@@@AAAAA@@@AB@BA@@B@@ADA@A@A@@@AB@@A@@@A@@A@A@@A@CB@@AB@@A@@@A@@B@B@BA@@@@@AB@@@@@@AB@@A@@B@@@B@B@@@@A@@@@B@@@@@@@@@@@@A@@D@@AB@@B@@B@@@BA@C@@@AB@BA@A@@@C@@@@AA@A@@A@A@@@@@CBA@A@@ACCAA@A@E@A@@AAAA@E@AAA@@@C@AAA@ACEAA@@@AA@@@A@AA@@@@A@AA@@A@@@A@A@AB@@A@C@@@AAACCC@@@C@C@@AAAC@AAC@C@A@K@C@CBABA@ABAB@DA@ADCBABADAHGBAB@BADAB@BA@@@@BA@@B@@@B@@@@ABA@AB@@AB@@A@A@@AC@@@AAC@@@AB@FEB@B@@AB@@AB@BABA@@BB@@D@@@BB@@@@@@B@@A@@BA@@@@@A@@@A@AB@BA@@@A@CBCA@@A@@@A@@BABC@@@A@AAA@@@@BADEBABCBA@@BA@@H@@AB@@@@AA@@@@A@AAA@A@AB@@ABA@A@AB@@AB@B@@@DA@@B@B@B@@ABADABABCBEB@@@B@@A@@BE@A@@BA@A@@BA@@BE@C@@BABABC@@@C@@B@BABAD@@AD@@@@A@@@@B@BA@@@@@A@A@@BAB@@A@@@@@@DA@@@@@AB@@@B@B@@@@A@@@A@@@@@@@@@@@ABA@@BA@@@AB@B@@@D@@A@@@AB@@B@@@@@@DA@@@@@@@@@@@@D@B@B@BA@@@B@@@@@@B@@@@B@@B@@@B@@@@@B@@@BABBDA@@@A@@AA@@@@@@B@B@@@@@@C@@BA@@B@@@B@@@B@@@@AA@@@@@@AB@B@@@B@@A@@@@@A@@@AB@B@@@B@B@@@@B@@B@@BBA@@BA@@D@@@@A@AB@BA@@BA@A@@@AB@@@BA@@@@@A@@@@BAD@DA@@@A@@@@B@@@@@B@@A@@@A@@@ABC@A@@@@DA@@@@@ADGBGBA@@@AA@@ABI@E@A@A@@DCDE@@CACAICA@CAAAA@A@CAEACA@@CCACAC@C@C@A@ABE@A@AHGJGBCBC@ADE@AB@@AAC@A@@ACA@AAA@A@AAG@@@A@AAA@A@EAA@CBCAEACA@@C@CAC@EAGAA@CAC@A@C@C@A@A@CAAAA@AAC@@@A@@@A@@@A@A@ABA@@@A@@BA@CB@@AAA@GBEBC@A@C@G@AAAA@AAA@A@A@AAE@A@AAC@AAACA@@A@AAIECAAACACAA@CAE@IBG@E@EBCBEBEBABABIBC@A@ABA@AAEA@@C@AAMACAEAC@A@E@C@E@A@EACACCCA@AAA@A@@@C@@@ABA"],"encodeOffsets":[[106721,37218]]}}],"UTF8Encoding":true});}));