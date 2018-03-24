(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('稷山县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140824","properties":{"name":"稷山县","cp":[110.983333,35.604025],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GBIDOBCJ@JGPCB@AGIKGOEEAC@@BABANGFIBICA@G@GBGPGRCP@LBFCXCRAJ@@@J@F@FADCBEJCDCBCBCDCDCBCDADAH@D@BDBF@NAD@@FA\\AZ@DADSJGLFBHANBFFAB@B@DBB@FAHABCD@BCDCBADAB@BADBDBH@FCHBNBP@H@V@XCDABCD@DBB@BB@@BB@@@BD@B@BDB@DId@BNANBHAJAVKfGRKHENKJGNCNBNNLJRDNFPJJPBLCDCVAF@RD^DLC`LRJNLJPDBANY@M@KFMBIPQDK@M@EDOFGN@PFRBJAP@JBN@HFF@@G@C@C@O@A@GBaBOFSBGDM@@DGDELQ@@BK@UBEFUJUFGDCHQBI@EB@@GCUGQACCKAQAEAEEKGKGKKQEG@ACCEGIIGGCEEGGMEIAKAKAE@U@K@SAU@AGUGM@ABE@EAEAAA@CAA@EAA@C@AAAAA@ECACAA@EAC@AACA@CCCC@AAAAA@@CBA@@B@LAHCP@LDVCXGNQIIA[@G@MBONIDIDKB"],"encodeOffsets":[[113591,36294]]}}],"UTF8Encoding":true});}));