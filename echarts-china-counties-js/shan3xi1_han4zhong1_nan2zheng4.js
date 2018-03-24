(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南郑县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610721","properties":{"name":"南郑县","cp":[106.93623,32.999333],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AKAIIMEGGECGBGAKKGGBEBCBIDEDGDIDGBGDSJEFEDEFCFGNAHAFCFAHCFADEFGFCJIFKFIBGDIB@A@@AAA@AA@@A@@@A@C@@BA@A@@BA@@@A@C@AA@@A@@B@@@B@@@BA@CAG@@@A@A@@@ABA@EBCBODEBADCFAFGLCFA@CHAFGJCJEDGBCFGFGBEFCFAF@JCDFFHHJFFNFR@JFTFNDHDPAHAHIPALEJ@F@F@HBHBF@LCFCJEHCFEFEBODGAGBGDCFCDAJ@HBNDF@FBHBDBFBBAB@BEBG@CBEAA@EACBCBC@G@GCE@ABEBCJABABC@C@E@C@A@CDC@G@C@AACAE@IAAAEACEACE@E@SFEDKBGAE@C@C@EBCAAAAECCCAEAYAKAGEC@EBCFEFCDCD@D@@@H@BABGBEBCAKEC@EBCBG@A@CFCBMAGAM@MCCACEAECCEAAAE@E@AACACECAC@CBEBADIDIBG@G@AAA@EBA@C@@A@G@A@@AA@AAC@@@A@AAC@@CCA@@@ABCBADBDAB@DAH@DBF@F@DAD@FAFBBFJ@B@DCBCBMAG@I@KAU@KBGBEBCBAAAACEACACOAGCIEGGUOICMCCCCEIGCEEEMGEAIAEAOBA@GCEAKEAAAAA@CBA@E@E@C@I@CBMFA@CAA@E@KFEBCAA@CA@@AA@@@AA@@@CEA@AABAA@A@A@ACA@GAAAC@E@AA@@C@]CKAMAC@DN@@@BAB@DABAF@DAB@B@BABADADGR@@@BFF@B@@DBDB@B@@@BAB@BBF@B@@D@B@@@@B@@@B@@@BD@B@@BBBB@@DBB@F@BB@DBD@BBB@BBDB@@@B@BBBB@BBD@@@B@@B@B@BBDAB@B@BDB@B@@AF@@A@@@A@AAE@A@AB@@ABAFAD@B@@ABEDGDCBABA@AD@BA@@B@BBB@BBB@BAB@B@F@DCFGHADA@ABCB@@@BA@@BB@@B@@@BA@@@A@@@AD@B@D@@@B@@@BAB@BA@AD@BAB@@BB@@AB@B@BA@@BABAB@@@BB@@@@B@@AB@BAB@@@BAB@H@BAB@B@B@BBBH@BB@BB@B@BBDDDFBBAB@B@@C@CB@@A@@@@BFFBHBB@BAB@@@B@B@B@@@BA@@@@@A@ABC@EDA@@BCB@@AB@B@BBB@B@B@B@@@B@B@B@@AD@D@BAB@@@B@B@@B@HFDBFDHDFDBBB@DDBAD@H@B@D@BBB@BBB@FDB@HDDBB@B@B@N@F@DBDBFBD@BDDBBDDD@BBBHBDBB@FBBBB@B@FBD@BBB@B@DBD@B@@@JCBAHAB@F@F@BAFAB@B@@@D@DBP@B@BC@ABAB@B@B@@@BCBADCBA@ABC@CBA@CB@DCB@BAB@DAHBBAF@B@FAJBD@B@B@B@B@BBBBDBFBDB@@@@@B@B@@@B@@@@@@@@@B@@@@B@@BA@@@@B@B@B@B@@B@BBB@@@B@B@B@B@B@B@B@B@BBD@B@B@DBDB@@BABC@AB@DA@@B@D@B@@@@BBF@BBDBBBBFF@@BB@BDF@B@@@@CBC@EBA@A@C@@@@@@@@BFD@@BBDB@BB@@HBB@@BB@@@@BAB@@AB@@AB@@@D@B@B@F@@@@@@B@@@BA@A@A@AB@@@BB@@@B@@@@@@B@@@@D@@@@@@BCB@BA@@@BB@BDBBB@@BB@D@D@BAB@BABABC@@BA@@@CA@AE@AAAAA@@@A@CBEDCDCB@@AB@@@DAD@B@B@B@@DBBBBBBB@B@BB@BDDDHDBB@@BB@@B@@B@@@B@@@@AB@@A@@B@BCD@@A@@@A@@@A@C@@A@BA@@BB@@D@B@B@BAD@@ADA@ADA@AB@@@B@B@@B@@@@@@BBAB@@AB@BB@@B@B@BB@@BB@@BAB@@BB@BB@B@@B@@@@BB@B@@B@@@@@@@@BB@@ABAD@B@@DBBB@@BBBBBDDD@BBB@BB@BBDBDBDBBBD@@@BB@B@@@BBB@@AD@@A@@B@@@@@BFBD@@@B@F@@BB@@@@DA@@@@@AAA@BB@B@@@@A@A@@@@@BB@@AFCB@@A@C@C@OBA@I@A@AAA@@B@@@@@@@B@@BBJDDBBBL@DB@@B@B@@@DA@@@@B@B@@BB@@B@HBD@@DFBD@@@B@D@@FBB@B@B@@@@@@B@B@BB@BDDB@B@B@B@BB@@@B@@@BBDB@B@BB@@@FDBB@BBBBB@@BA@AB@BA@A@C@AFCBAB@B@B@@BBBD@BBD@DBB@B@BB@@@B@BAB@F@B@@FBB@D@B@F@BBD@BBB@D@@BB@@B@@@BB@BBBBB@@@BA@A@@@A@@@G@@B@BB@@@@BA@@DBB@B@B@@AB@@@B@@@AB@@A@@@AB@@B@@@@@AB@@@BBBBBBBHDBB@@B@B@@@F@B@@@@A@@AA@@A@C@ACD@D@D@H@F@DBFBDB@@BB@B@D@@BBBB@B@B@@BBD@BBB@@BF@B@D@@@BBBB@@@BB@B@DAB@B@J@D@B@B@@@BABAB@@@BB@@BBBBB@@AB@@AB@B@BB@@B@B@@@@B@@AB@@@B@@B@B@@B@@@B@@@@A@@@BB@@@@B@@@B@ABB@@B@@BBDAB@DBB@@BB@BBFDABAA@@A@@@@B@@@@ABB@@B@@B@@@B@AAFA@@B@@@@@B@@@@AB@@@B@@AAABA@@@@BC@ABA@@@BDC@@@A@@BAB@@@B@@A@@BABADABA@@BA@@BAB@F@FCB@FAB@BAHE@ABABCDADCDAD@B@DAHGD@DAD@BAB@DABAB@BABADCFCBCBCFI@A@A@@@C@@B@@A@AA@@A@@@@B@B@@@BA@@@@@A@@DIB@BA@@DC@A@A@@B@@@B@D@B@B@@ADADABAFADAD@D@BBFBDDDBBDBBB@FBDBF@D@D@DAJGHEBCBAAA@@@ABA@ABA@@@AB@BAB@FCDCDAHCDADABADAB@B@D@B@FBFDDBDBBBBBFF@BBBJHFDBDBD@DBLBHB@@BBBBBBBDBDBD@DAFC@@D@JAD@@@F@B@B@F@D@BBB@BBDDFDDBBBBDDB@BBBBBBBBBB@DBDBFB@@DJBHDDDBBDFJDB@@@BABABAD@BBBBBDBBDB@@@B@B@B@BBB@D@BBB@B@B@@@B@@@BABCBC@@@AAC@AA@@A@C@AFGBA@@@A@@@AEA@A@@GCCCCCAA@@@A@@@C@A@C@A@AAAACCI@AAG@A@A@A@C@ABE@@@AA@@AA@@@A@A@@@@A@AB@@BB@@A@@@@AA@A@@BCB@B@BAB@B@@CB@@A@@@@A@A@@ABA@@@@BAD@@@DCB@@A@A@@@@@ABA@@AA@A@A@@@AA@@AA@AAA@@@@AAA@@A@@@CACCA@@@@AA@@A@@DA@@EA@@AAA@@@A@@@A@@@@@A@AA@@AAA@AAC@@AAABC@AA@@AA@@AC@A@@A@A@@AAAAAC@@AAGAAAA@@A@@B@B@BA@@@@@A@A@@@C@@@A@@CA@@A@@A@@@@AA@@A@A@AAAE@@@@A@E@@AA@@@BAB@@A@@A@@A@A@A@A@@@@BA@@@AB@DB@@BAA@@@@ABA@@@AA@@@@A@AB@@A@AAC@A@@BA@@BABAB@@A@@BA@@AA@@@A@@B@@AB@@@BA@@B@D@B@BA@@B@@@B@B@B@@@@A@AB@@@B@@@B@B@B@DAB@@@BAD@@@@@DC@A@@@A@A@@CA@@A@@A@@@A@AA@AAA@AAC@A@A@AAA@@@A@@@AB@@CBA@A@A@A@A@@@AAAAAC@@AC@@@CAAAA@A@A@A@A@@A@@@A@@@CB@@A@@@A@@@BC@@AA@AACA@@@A@C@ABAAA@AA@@@A@@DADA@@BAB@D@@AB@@A@C@A@A@A@A@@AA@CBA@A@AA@AC@@AAA@A@A@A@AAA@@AA@@A@A@AA@@@A@A@AA@@@@C@@A@@@A@@AA@@@@BA@@BA@@@A@AB@@A@@AA@AAA@@@@BAB@BAB@@@B@B@BBB@@@B@B@B@B@@AB@@@BB@BB@DD@@B@B@BB@@@@@@@B@@@B@@@@@BDAB@B@@BBB@@BB@BB@@@BBBB@@B@@@@@@@F@D@B@BBB@@@@B@@BB@@B@@B@@@B@@@B@B@@@@BB@@@@@FBBAB@BAB@B@@B@@@BB@@B@@@B@B@@@B@@BABB@@B@@A@@D@@B@@@B@B@@@BBBAB@B@B@@@BA@@@@@A@ABA@@@@D@@@BABA@@@A@A@A@@AAB@@@BAB@@@@A@A@A@ACAA@@@AA@AACGGCAA@AAA@C@AAAA@@A@AA@@@@AA@AAAA@ACAAECC@@AA@AAA@@@BCBAB@BA@ABGB@@CBABAB@DAB@B@@@@A@@@@@@@AB@@AB@B@DADC@@BA@AA@@AEAA@@AAAA@A@AAA@ACAAA@@A@@@A@@DA@@BC@@DAB@D@BADA@ABA@A@AA@@AA@@@E@A@@AA@@A@ABA@@BA@@B@@AACBC@@BA@@@ABABA@AB@DAB@@A@@B@BAB@BABABAB@@ABA@@DABABABABABAB@DAB@@@F@DB@AB@B@BA@@@A@AB@@A@CBA@@AA@@@A@ABA@@BA@A@A@EBE@AFAB@@ADA@A@@B@B@@@@A@A@@B@@@B@@@B@D@@@F@@@HBF@HBH@D@B@F@D@F@DAF@B@B@F@DAB@DABA@AB@@A@A@@CA@AA@@AA@@@@A@AAA@@AAAAA@@@A@@A@@@AB@@A@@@C@@B@@ABA@@@A@ABC@AB@@A@ABA@ABA@@B@B@F@@@@@BBBB@@@B@B@@@@@BB@@BBBABB@@B@@B@B@@@BABAD@DAB@@AB@FBB@FBDB@B@@@B@@B@@AB@BBB@DBB@@@@ABABABA@@BA@@BADABC@@B@BAB@DAD@@@DA@ABA@ABA@@@A@A@@AC@@@@CAA@@AAA@@AA@AC@@@A@C@@C@A@A@@A@@AA@@A@@@A@@BC@A@@B@@ABA@@D@@AB@@@AAAAA@A@A@@@A@AAA@CC@@C@A@A@A@A@CAA@A@A@E@C@A@EAAACA@@@@AAIE@@@@@A@A@ADABA@A@ABC@AAA@CAG@@C@@A@CCC@@ACA@AAA@AA@CA@@@@AA@@BA@@@@A@@@A@ABA@@BA@AB@BA@@FAB@B@B@B@B@@@B@B@B@B@B@DA@AB@B@@@B@B@B@@A@E@A@@@ABABA@AB@@A@@AA@C@A@E@A@ABA@A@A@@@C@@@AB@B@B@F@@@DA@@BA@@@ADCBCDABA@ABAB@B@D@B@D@B@DAD@BA@@B@B@B@B@@@B@B@@@BAB@JEB@@@BA@@@@@@BB@@B@@A@@DB@@BBB@BB@@BCB@@@D@BC@@B@@B@@B@B@B@B@BB@@@AF@@A@@BADG@@@C@A@@BA@AACB@@ABAB@DAAE@A@AAA@@AA@@@AAAAA@@AA@A@@BGFE@@@A@@BA@AAC@@A@AA@@@@ACA@@@AAABAAA@@@@@@A@A@A@@@A@@@@@AA@@@@A@A@A@@@A@@@A@@BC@A@@@@BA@@BC@@BG@@@AAA@E@@@AA@@AA@B@@AH@D@DAD@D@BAAA@@@A@C@A@A@A@ABA@CBABEBA@@@@B@B@D@JBB@B@@@@C@ADMCA@CCC@CCEEIGG@CCEEGCEEEICME@@QGGAQEGCKCGCGCGGCE@C@E@C@KAEECGCCAEACE@K@G"],"encodeOffsets":[[109861,33224]]}}],"UTF8Encoding":true});}));