(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('友好区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230704","properties":{"name":"友好区","cp":[128.836291,47.841032],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCGCM@UACAGCIKKOIOYL]NmPiNeJEBWB_@a@A@WDEDKFILGTEZC\\QzOpWhAFSZWZ]Z[PSP]ZSJSBSAYGKIOUEKMCI@[FSDOAGGEKA]CIGEMCQ@YAOEIGEIAMAOAIGGABABC@ABA@ABA@AB@@C@@B@@A@@@@B@@@@@DAB@B@@@BA@@B@@@@AB@@@@A@@@AB@@A@@@A@@BA@@@A@A@@@@@A@ABA@@@@@AB@@@@AB@@@@ABABABA@@BA@@@@@@@@@A@@@@@@@A@@@A@@@A@@@ABA@@BA@@@ADC@ABABA@@@A@@@@@CACAA@C@AAE@A@CA@@@@ABA@@@A@@@A@@@A@A@@@A@AAA@A@C@@@A@@AA@@@@@@@A@@@@@@@A@ABA@@BA@A@@@A@@@A@@BABA@ABABCBCDABABAB@@@@A@@B@@BB@@A@@@@@A@AB@@A@AB@@@B@@A@@B@@@B@@A@@BA@@B@@A@ABAB@@A@AB@@@@AB@@A@A@A@A@@@A@CBCBA@@@A@A@@@A@A@A@@@A@C@C@A@C@A@A@@@A@A@@@CA@@A@@@A@ABA@A@@@A@@@A@ABA@ABA@ABA@@BA@@@@A@@A@AA@@A@A@AAA@AAA@AA@@AA@AA@@AA@A@@A@@A@A@C@A@A@@@AA@@@@@@@@A@@BB@@@@B@B@B@@@BAB@@A@@BABA@@B@@@B@B@B@@BB@@BB@@B@@@@B@@@B@B@@@B@D@@@D@B@@BB@B@BBD@DA@@B@@ABA@AB@@@@@BA@@@@BB@@B@@@B@@@BA@@BA@@B@@@B@@@BBBBBDDBBBD@@BB@@@B@@AB@@@@ABAB@@@BA@ABABABABAB@@@B@@AB@B@B@D@B@@@BB@BBB@@BB@@B@BBBB@B@@B@@@@@BBB@B@BA@@B@BABA@ABA@@BA@@BAB@@@BBB@B@@@@ABAB@@AB@B@B@B@@@BBBBD@BB@BBDDBDDBDBBBDBB@@@BBB@B@B@@@BBB@@BBBBB@@@B@@@BABA@A@AB@@C@AAC@AAC@AAA@@@AB@@ABABAB@B@@@@@BBB@B@B@B@BA@@BA@AB@@@BAB@BA@A@A@A@A@A@ABA@A@AB@@A@A@@@@B@@A@@@A@@@A@A@A@CBEBABCBAB@@DBB@BBB@DBDBDBBBBBB@D@DBB@B@B@@BB@@BD@@B@BB@ABB@@B@@B@DAB@B@@@BBD@FDDBB@B@@B@B@B@B@BBB@D@D@B@BADAD@@@B@B@BB@@BBD@BB@@BB@BBB@BBB@B@B@BBB@BBDBB@BBD@DBB@B@BB@@B@BBBB@@B@BB@@FDDBBBD@DBD@BBB@B@F@B@DAB@B@BBB@D@B@BBB@B@B@B@@@B@@@@BBB@B@D@B@BB@@@B@BBD@BAB@FAB@DA@@B@B@B@@BB@@B@B@BBB@@BB@BBBBB@BB@B@BB@@D@@@@@@@B@BAB@BA@@B@@@B@@@B@@@BB@@BBBBBBBBB@BBDBB@DBB@B@B@DAB@BAD@DADA@@DA@@DABAFAB@B@BAB@@A@@B@@@@AB@@BB@B@@BB@@@B@D@B@B@@@B@B@@@B@B@D@BAB@D@B@B@F@B@B@D@F@B@B@B@@BBBB@@DBB@B@BBB@B@BB@BBB@B@BBBBB@@BBB@BBB@BBB@BBBB@BBHB@B@@@@@BABABA@ABCD@@@B@@@B@BB@@B@@ABA@@@AAA@A@CBA@@BA@@B@B@BBB@@AB@B@B@@@B@@@@BB@@BB@@@B@B@@@@BB@@@BA@@BCB@BAB@@@BB@@BB@@B@@@B@@BBBBB@BBBBB@@BB@AB@BABA@ADAB@BAB@B@@@B@B@BBB@@BB@@BBB@BBB@@AF@B@B@@B@@@B@@@BB@@BB@BBBB@@@B@BBB@F@BB@@@BB@BB@BBBDBB@@@B@@ABAB@@@@BB@@BBBB@@@B@@@B@@BB@@BBBB@@BB@@@B@BB@@D@B@@@BBB@@B@BBB@@B@BB@BBB@B@D@B@B@BBB@@@D@D@B@B@BBB@BBDBBDB@@B@@ABA@C@A@@BA@@B@B@B@@@B@B@B@@BB@@@B@BB@@B@BB@@B@@@@ABA@A@@@AB@@A@@B@@BB@@BBB@BB@@@BBD@@BBBBBB@@BBD@BBB@D@D@BB@@B@@B@@@BAD@BB@@@@B@B@BB@@B@B@B@B@@BB@BB@@BB@BBBBB@DB@BB@@@DBB@@@B@@BB@@D@B@DBB@@@BB@BBDBD@DBB@DBB@BBBB@BB@@B@@@B@@@B@@BBB@BBBB@BBBBBBBBD@BBB@B@@@BBB@@@BBB@D@BBD@DB@BBDBDBDBHBD@B@D@DBD@DBLDD@BBF@FBDBB@BB@@DD@BB@BBBBB@D@B@@@B@BAB@BAB@B@BBB@@@@@B@@@D@FAFAD@D@FAB@D@@BB@DDDFBDBBBBBBB@BBB@DAF@BAB@B@D@D@B@DAHAB@BAB@B@BBDBB@B@D@B@@@B@@@@B@BB@@BBBB@D@B@B@@@BB@@BBB@B@BAB@BABCB@BA@@D@B@B@B@BB@BB@BBB@B@@B@B@@BB@B@BB@B@B@B@BABAB@@@B@B@D@D@DBBBB@BBBB@@@BAB@B@@@B@@@@B@BBB@BBDBDB@BB@@@B@B@B@B@B@D@DBBBB@B@BBB@B@D@B@B@D@DAB@BA@@B@FBDB@@DBDBB@@@B@@@D@B@B@B@B@BB@BB@BBDBDBDBDBDBB@@@BAB@@ABAB@B@@@D@B@B@D@@AB@BAB@B@B@DBHB@@B@B@DADAFADADADADAB@BAB@B@B@BBBBB@BB@BB@BBB@D@D@B@B@B@BBD@D@B@B@BADADADA@ABABABABC@AB@@@BA@@@A@C@A@A@AAA@A@ABA@CBA@@@@@A@@AA@@BA@AB@BA@@B@@@BAB@BAB@@A@ABA@C@ABABA@@BAB@D@D@@@BAB@@A@@@AA@@@CAE@AA@@AA@A@A@A@@@@B@DAB@D@BAB@@A@C@CBC@AAA@@@A@ABA@C@A@C@A@@@AA@@@EAA@@@AA@@@@@A@A@@@AB@@@BABABABABA@ABAB@B@B@FBB@B@B@@@@@@@C@EACAAA@A@A@AB@@A@A@AB@BADABA@@@A@@A@@AA@@ABA@C@A@C@C@AB@BCDC@@@A@E@A@AB@@CB@@AB@BAB@D@B@BABABABA@AAA@A@@@@B@@@BAB@@@BC@CBA@AB@DC@@@@@A@A@@BA@@BA@A@@@@AA@@@A@@BA@A@AA@A@@A@@@@B@B@D@B@B@@@BAB@D@B@B@@@@A@A@CAA@A@@BABADAFAB@B@DAD@B@BA@@BAB@D@B@@@B@B@BAB@@@D@B@B@B@@@B@B@B@BAB@B@B@@@BDB@BBBBBB@BRYIUU[WWGO@KFMHMBQGOOQIOCOAw@qEQKQ@WJMVKTEbCVCXIDARSHUBUGSOMSUCUBUHORSBCJMFKNYRSXMpGpChEZGPILAGQKOQOQGG@_Ae@OCKCUIWSWWMUAACGAAAA"],"encodeOffsets":[[131980,48943]]}}],"UTF8Encoding":true});}));