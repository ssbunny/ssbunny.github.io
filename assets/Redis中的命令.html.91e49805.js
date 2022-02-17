import{r as s,o as a,e as l,b as t,a as d,F as o,d as e,i as p}from"./app.46b53cdc.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var r="/assets/137EF8469E4CBCBEA2317255843EAB42.93c8ab1d.png",i="/assets/792EC40D65671A2538C94E865939FD8E.333cbf2b.png",y="/assets/99CE7B7F9A2CBB7CD755675FBB05E0E7.0a82af32.png",u="/assets/D3C64C0A2B440D0FE29678322D0DD272.cd615ef4.png",g="/assets/38E887E369E1C5AC63FBE991C5F9949B.4332c85b.png",k="/assets/31006A9F5BAA82DBCD5B25A5ADBCD24D.cc1d3bb9.png",f="/assets/1F8C9446CC0CE263A8CB023955AA73A6.53361612.png",m="/assets/F92752842190B6685BA99E6A7562C0E4.e7debee0.png",x="/assets/838EC2AB0F513CA9B579A734D2C11F59.f261f100.png",E="/assets/461D2E79AF8937F2CB85E5781D80EBA1.e17a8c70.png",h="/assets/3425C91D0CF155E3077D990D823B26A5.875c3bf5.png",R="/assets/BB01732A4E9A22A7A7837D67D3164620.37043ec1.png",b="/assets/CFDEF495A36B671AAD006590DCC51FD3.1cd9ac9c.png",S="/assets/91129472CDCEFBD97420D35AC269B569.6f30a134.png",B="/assets/53F9E2FFDE28B94AF7973EBB592B5E33.6ce2acfe.png",A="/assets/7DC203A5720C310786EA548890B81E95.dd9dd252.png";const N={},C=t("h1",{id:"redis-\u4E2D\u7684\u547D\u4EE4",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#redis-\u4E2D\u7684\u547D\u4EE4","aria-hidden":"true"},"#"),e(" Redis \u4E2D\u7684\u547D\u4EE4")],-1),_=t("p",null,"Redis \u4E2D\u6709\u4E94\u79CD\u5E38\u7528\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u4EEC\u90FD\u6709\u5BF9\u5E94\u7684\u64CD\u4F5C\u547D\u4EE4\uFF1A",-1),T=t("p",null,[t("img",{src:r,alt:"redis.png"})],-1),I={href:"http://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},O=e("[\u5F53\u524D\u6700\u65B0\u7684\u6240\u6709\u547D\u4EE4]"),D=p('<h2 id="_1-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1. \u5B57\u7B26\u4E32</h2><p>Redis \u4E2D <code>STRINGs</code> \u7528\u6765\u5B58\u50A8\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u6574\u6570</li><li>\u6D6E\u70B9\u6570</li></ul><p>\u6574\u6570\u548C\u6D6E\u70B9\u6570\u53EF\u589E\u51CF\u3002<strong>\u6574\u6570</strong>\u8303\u56F4\u4E3A\u5E73\u53F0\u7684\u957F\u6574\u578B\u8303\u56F4(\u5982\uFF0C64\u4F4D\u7CFB\u7EDF\u4E2D\u4E3A\u6709\u7B26\u53F7\u768464\u4F4D\u6574\u578B)\uFF1B<strong>\u6D6E\u70B9\u6570</strong>\u91C7\u7528 IEEE 754 \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u3002</p><p><strong>\u589E\u51CF\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">INCR</td><td style="text-align:left;"><code>INCR key-name</code> \u5C06\u5F53\u524D key \u5BF9\u5E94\u7684\u503C\u52A0 1</td></tr><tr><td style="text-align:left;">DECR</td><td style="text-align:left;"><code>DECR key-name</code> \u5C06\u5F53\u524D key \u5BF9\u5E94\u7684\u503C\u51CF 1</td></tr><tr><td style="text-align:left;">INCRBY</td><td style="text-align:left;"><code>INCRBY key-name amount</code> \u5C06\u5F53\u524D key \u5BF9\u5E94\u7684\u503C\u52A0\u4E0A\u6307\u5B9A\u7684\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">DECRBY</td><td style="text-align:left;"><code>DECRBY key-name amount</code> \u5C06\u5F53\u524D key \u5BF9\u5E94\u7684\u503C\u51CF\u53BB\u6307\u5B9A\u7684\u6574\u6570\u503C</td></tr><tr><td style="text-align:left;">INCRBYFLOAT</td><td style="text-align:left;"><code>INCRBYFLOAT key-name amount</code> \u5C06\u5F53\u524D key \u5BF9\u5E94\u7684\u503C\u52A0\u4E0A\u6307\u5B9A\u7684\u6D6E\u70B9\u503C</td></tr></tbody></table><p>\u5982\u679C\u5C1D\u8BD5\u5728\u7A7A\u5B57\u7B26\u4E32\u6216\u4E0D\u5B58\u5728\u7684 key \u4E0A\u8C03\u7528 <code>INCR*</code> \u6216 <code>DECR*</code> \uFF0C\u5F53\u524D key \u503C\u4F1A\u88AB\u5F53\u4F5C <code>0</code> \u6765\u5904\u7406\uFF1A</p><p><img src="'+i+'" alt="incr_empty.png"></p><p>\u5982\u679C\u5C1D\u8BD5\u5728\u975E\u6574\u6570\u6216\u6D6E\u70B9\u6570\u4E0A\u8C03\u7528 <code>INCR*</code> \u6216 <code>DECR*</code> \uFF0C\u4F1A\u629B\u51FA error \uFF1A</p><p><img src="'+y+'" alt="incr_error.png"></p><p><strong>\u64CD\u7EB5\u5B57\u7B26\u4E32\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">APPEND</td><td style="text-align:left;"><code>APPEND key-name value</code> \u62FC\u63A5\u5B57\u7B26\u4E32 value \u81F3\u6307\u5B9A key \u503C</td></tr><tr><td style="text-align:left;">GETRANGE</td><td style="text-align:left;"><code>GETRANGE key-name start end</code> \u622A\u53D6\u4ECE start \u5230 end \u7684\u5B50\u4E32(\u95ED\u533A\u95F4)</td></tr><tr><td style="text-align:left;">SETRANGE</td><td style="text-align:left;"><code>SETRANGE key-name offset value</code> \u4ECE offset \u5F00\u59CB\u6DFB\u52A0 value \u5B50\u4E32</td></tr><tr><td style="text-align:left;">GETBIT</td><td style="text-align:left;"><code>GETBIT key-name offset</code> \u83B7\u53D6 offset \u5904\u7684 bit \u503C</td></tr><tr><td style="text-align:left;">SETBIT</td><td style="text-align:left;"><code>SETBIT key-name offset value</code> \u8BBE\u7F6E offset \u5904\u7684 bit \u503C</td></tr><tr><td style="text-align:left;">BITCOUNT</td><td style="text-align:left;"><code>BITCOUNT key-name [start end]</code> \u8BA1\u7B97 string \u5360\u4E86\u591A\u5C11\u4F4D</td></tr><tr><td style="text-align:left;">BITOP</td><td style="text-align:left;"><code>BITOP operation dest-key key-name [key-name ...]</code> \u4F4D\u8FD0\u7B97\uFF0C\u7ED3\u679C\u5B58\u5165 dest-key \u4E2D\u3002 operation \u5305\u62EC AND, OR, XOR, NOT</td></tr></tbody></table><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+u+'" alt="setrange.png"></p><h2 id="_2-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u5217\u8868" aria-hidden="true">#</a> 2. \u5217\u8868</h2><p><code>LISTs</code> \u4E2D\u5B58\u50A8\u6709\u5E8F\u7684 <code>STRING</code> \u5E8F\u5217\u3002</p><p><strong>\u57FA\u672C\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">RPUSH</td><td style="text-align:left;"><code>RPUSH key-name value [value...]</code> \u5411 list \u5C3E\u90E8(\u53F3)\u6DFB\u52A0\u503C</td></tr><tr><td style="text-align:left;">LPUSH</td><td style="text-align:left;"><code>LPUSH key-name value [value...]</code> \u5411 list \u9996\u90E8(\u5DE6)\u6DFB\u52A0\u503C</td></tr><tr><td style="text-align:left;">RPOP</td><td style="text-align:left;"><code>RPOP key-name</code> \u79FB\u9664\u5E76\u8FD4\u56DE\u6700\u53F3\u4FA7\u7684\u503C</td></tr><tr><td style="text-align:left;">LPOP</td><td style="text-align:left;"><code>LPOP key-name</code> \u79FB\u9664\u5E76\u8FD4\u56DE\u6700\u5DE6\u4FA7\u7684\u503C</td></tr><tr><td style="text-align:left;">LINDEX</td><td style="text-align:left;"><code>LINDEX key-name offset</code> \u8FD4\u56DE\u6307\u5B9A offset \u5904\u7684\u503C</td></tr><tr><td style="text-align:left;">LRANGE</td><td style="text-align:left;"><code>LRANGE key-name start end</code> \u8FD4\u56DE\u4ECE start \u5230 end \u5904\u7684\u503C(\u95ED\u533A\u95F4)</td></tr><tr><td style="text-align:left;">LTRIM</td><td style="text-align:left;"><code>LTRIM key-name start end</code> \u622A\u53D6 list \uFF0C\u53EA\u4FDD\u7559\u4ECE start \u5230 end \u7684\u503C</td></tr></tbody></table><p><strong>Blocking\u64CD\u4F5C</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">BLPOP</td><td style="text-align:left;"><code>BLPOP key-name [key-name ...] timeout</code> \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5217\u8868\u4E2D\u6700\u5DE6\u4FA7\u7684\u503C\uFF0C\u6216\u4E00\u76F4\u7B49\u5F85 timeout \u79D2\u3002</td></tr><tr><td style="text-align:left;">BRPOP</td><td style="text-align:left;"><code>BRPOP key-name [key-name ...] timeout</code> \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5217\u8868\u4E2D\u6700\u53F3\u4FA7\u7684\u503C\uFF0C\u6216\u4E00\u76F4\u7B49\u5F85 timeout \u79D2\u3002</td></tr><tr><td style="text-align:left;">RPOPLPUSH</td><td style="text-align:left;"><code>RPOPLPUSH source-key dest-key</code> \u5C06 source \u4E2D\u6700\u53F3\u4FA7\u7684\u503C\u653E\u5165 dest \u7684\u5DE6\u4FA7\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u503C\u3002</td></tr><tr><td style="text-align:left;">BRPOPLPUSH</td><td style="text-align:left;"><code>BRPOPLPUSH source-key dest-key timeout</code> \u5C06 source \u4E2D\u6700\u53F3\u4FA7\u7684\u503C\u653E\u5165 dest \u7684\u5DE6\u4FA7\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u503C\u3002\u5982\u679C source \u4E3A\u7A7A\uFF0C\u4E00\u76F4\u7B49\u5F85 timeout \u79D2\u3002</td></tr></tbody></table><p>\u4EE5\u4E0A\u547D\u4EE4\u5728\u64CD\u4F5C\u6D88\u606F\u961F\u5217\u6216\u4EFB\u52A1\u961F\u5217\u65F6\u975E\u5E38\u5E38\u7528\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+g+'" alt="brpop.png"></p><p>\u5F53\u53F3\u4FA7\u7684\u7EC8\u7AEF\u6267\u884C\u547D\u4EE4\u540E\uFF0C\u5DE6\u4FA7\u8F93\u51FA\u4E0A\u56FE\u7ED3\u679C\uFF0C\u5426\u5219\u4F1A\u4E00\u76F4\u7B49\u5F85 20 \u79D2\u8D85\u65F6\u5E76\u8FD4\u56DE <code>nil</code> \u3002</p><h2 id="_3-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_3-\u96C6\u5408" aria-hidden="true">#</a> 3. \u96C6\u5408</h2><p><code>SETs</code> \u7528\u6765\u4FDD\u5B58\u552F\u4E00\u3001\u65E0\u5E8F\u7684\u9879\u3002</p><p><strong>\u57FA\u672C\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">SADD</td><td style="text-align:left;"><code>SADD key-name item [item ...]</code> \u6DFB\u52A0\u6761\u76EE\u5E76\u8FD4\u56DE\u5B9E\u9645\u52A0\u5165\u7684\u6570\u91CF</td></tr><tr><td style="text-align:left;">SREM</td><td style="text-align:left;"><code>SREM key-name item [item ...]</code> \u5220\u9664\u6761\u76EE\u5E76\u8FD4\u56DE\u5220\u9664\u7684\u6570\u91CF</td></tr><tr><td style="text-align:left;">SISMEMBER</td><td style="text-align:left;"><code>SISMEMBER key-name item</code> \u68C0\u6D4B\u67D0\u6761\u76EE\u662F\u5426\u5728 set \u4E2D(0\u54261\u662F)</td></tr><tr><td style="text-align:left;">SCARD</td><td style="text-align:left;"><code>SCARD key-name</code> \u8FD4\u56DE set \u4E2D\u6761\u76EE\u7684\u603B\u6570</td></tr><tr><td style="text-align:left;">SMEMBERS</td><td style="text-align:left;"><code>SMEMBERS key-name</code> \u8FD4\u56DE\u6240\u6709\u6761\u76EE</td></tr><tr><td style="text-align:left;">SRANDMEMBER</td><td style="text-align:left;"><code>SRANDMEMBER key-name [count]</code> \u968F\u673A\u8FD4\u56DE1\u4E2A\u6216\u591A\u4E2A\u6761\u76EE</td></tr><tr><td style="text-align:left;">SPOP</td><td style="text-align:left;"><code>SPOP key-name</code> \u968F\u673A\u5220\u9664\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6761\u76EE</td></tr><tr><td style="text-align:left;">SMOVE</td><td style="text-align:left;"><code>SMOVE source-key dest-key item</code> \u5982\u679C\u6761\u76EE\u5B58\u5728\uFF0C\u5C06\u5176\u4ECE source \u79FB\u81F3 dest</td></tr></tbody></table><p><strong>\u62FC\u63A5\u3001\u64CD\u7EB5\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">SDIFF</td><td style="text-align:left;"><code>SDIFF key-name [key-name ...]</code> \u8FD4\u56DE\u7B2C\u4E00\u4E2A set \u4E2D\u7684\u6761\u76EE\uFF0C\u8BE5\u6761\u76EE\u4E0D\u5728\u4EFB\u4F55\u5176\u5B83\u7684 set \u4E2D</td></tr><tr><td style="text-align:left;">SDIFFSTORE</td><td style="text-align:left;"><code>SDIFFSTORE dest-key key-name [key-name ...]</code> \u540C\u4E0A\u6761\u547D\u4EE4\uFF0C\u4F46\u5C06\u7ED3\u679C\u4FDD\u5B58\u5728 dest-key \u4E2D</td></tr><tr><td style="text-align:left;">SINTER</td><td style="text-align:left;"><code>SINTER key-name [key-name ...]</code> \u8FD4\u56DE\u6307\u5B9A set \u4E2D\u6761\u76EE\u7684\u4EA4\u96C6</td></tr><tr><td style="text-align:left;">SINTERSTORE</td><td style="text-align:left;"><code>SINTERSTORE dest-key key-name [key-name ...]</code> \u8FD4\u56DE\u6307\u5B9A set \u4E2D\u6761\u76EE\u7684\u4EA4\u96C6\u5E76\u4FDD\u5B58\u5728 dest-key \u4E2D</td></tr><tr><td style="text-align:left;">SUNION</td><td style="text-align:left;"><code>SUNION key-name [key-name ...]</code> \u8FD4\u56DE\u6307\u5B9A set \u4E2D\u6761\u76EE\u7684\u5E76\u96C6</td></tr><tr><td style="text-align:left;">SUNIONSTORE</td><td style="text-align:left;"><code>SUNIONSTORE dest-key key-name [key-name ...]</code> \u8FD4\u56DE\u6307\u5B9A set \u4E2D\u6761\u76EE\u7684\u5E76\u96C6\u5E76\u4FDD\u5B58\u5728 dest-key \u4E2D</td></tr></tbody></table><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+k+'" alt="sdiff.png"></p><h2 id="_4-\u54C8\u5E0C" tabindex="-1"><a class="header-anchor" href="#_4-\u54C8\u5E0C" aria-hidden="true">#</a> 4. \u54C8\u5E0C</h2><p><code>HASHes</code> \u7528\u6765\u5B58\u50A8\u4E00\u7EC4\u952E\u503C\u5BF9\u3002</p><p><strong>\u589E\u52A0\u3001\u5220\u9664\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">HMGET</td><td style="text-align:left;"><code>HMGET key-name key [key ...]</code> \u83B7\u53D6\u6307\u5B9A key \u4E0B\u7684\u503C</td></tr><tr><td style="text-align:left;">HMSET</td><td style="text-align:left;"><code>HMSET key-name key value [key value ...]</code> \u7ED9\u6307\u5B9A key \u8BBE\u7F6E\u503C</td></tr><tr><td style="text-align:left;">HDEL</td><td style="text-align:left;"><code>HDEL key-name key [key ...]</code> \u5220\u9664\u6307\u5B9A\u952E\u503C\u5BF9</td></tr><tr><td style="text-align:left;">HLEN</td><td style="text-align:left;"><code>HLEN key-name</code> \u83B7\u53D6\u952E\u503C\u5BF9\u7684\u603B\u6570</td></tr></tbody></table><p>\u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+f+'" alt="hash_common.png"></p><p><strong>\u6279\u91CF\u64CD\u4F5C</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">HEXISTS</td><td style="text-align:left;"><code>HEXISTS key-name key</code> \u68C0\u6D4B key \u662F\u5426\u5B58\u5728</td></tr><tr><td style="text-align:left;">HKEYS</td><td style="text-align:left;"><code>HKEYS key-name</code> \u83B7\u53D6\u6240\u6709\u7684 key</td></tr><tr><td style="text-align:left;">HVALS</td><td style="text-align:left;"><code>HVALS key-name</code> \u83B7\u53D6\u6240\u6709\u7684 value</td></tr><tr><td style="text-align:left;">HGETALL</td><td style="text-align:left;"><code>HGETALL key-name</code> \u83B7\u53D6\u6240\u6709\u7684 key-value</td></tr><tr><td style="text-align:left;">HINCRBY</td><td style="text-align:left;"><code>HINCRBY key-name key increment</code> \u6307\u5B9A key \u5BF9\u5E94\u7684\u503C\u589E\u52A0\u6574\u6570 increment \u503C</td></tr><tr><td style="text-align:left;">HINCRBYFLOAT</td><td style="text-align:left;"><code>HINCRBYFLOAT key-name key increment</code> \u6307\u5B9A key \u5BF9\u5E94\u7684\u503C\u589E\u52A0\u6D6E\u70B9\u6570 increment \u503C</td></tr></tbody></table><h2 id="_5-\u6709\u5E8F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_5-\u6709\u5E8F\u96C6\u5408" aria-hidden="true">#</a> 5. \u6709\u5E8F\u96C6\u5408</h2><p><code>ZSET</code> \u5B58\u50A8\u4E00\u7EC4\u6210\u5458\u6761\u76EE\u5230\u5176\u5F97\u5206\u7684\u6620\u5C04\u3002\u6210\u5458\u6216\u5F97\u5206\u5747\u53EF\u4EE5\u4F5C\u4E3A\u83B7\u53D6\u6216\u626B\u63CF\u6761\u4EF6\u3002</p><p><strong>\u57FA\u672C\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">ZADD</td><td style="text-align:left;"><code>ZADD key-name score member [score member ...]</code> \u589E\u52A0\u6307\u5B9A\u4E86\u5206\u6570\u7684\u6210\u5458</td></tr><tr><td style="text-align:left;">ZREM</td><td style="text-align:left;"><code>ZREM key-name member [member ...]</code> \u5220\u9664\u6210\u5458\u5E76\u8FD4\u56DE\u5220\u9664\u7684\u6761\u6570</td></tr><tr><td style="text-align:left;">ZCARD</td><td style="text-align:left;"><code>ZCARD key-name</code> \u8FD4\u56DE\u6210\u5458\u603B\u6570</td></tr><tr><td style="text-align:left;">ZINCRBY</td><td style="text-align:left;"><code>ZINCRBY key-name increment member</code> \u589E\u52A0\u6307\u5B9A\u6210\u5458\u7684\u5F97\u5206\u503C</td></tr><tr><td style="text-align:left;">ZCOUNT</td><td style="text-align:left;"><code>ZCOUNT key-name min max</code> \u83B7\u53D6 min \u5230 max \u5F97\u5206\u8303\u56F4\u7684\u6210\u5458\u6570\u91CF</td></tr><tr><td style="text-align:left;">ZRANK</td><td style="text-align:left;"><code>ZRANK key-name member</code> \u83B7\u53D6\u6210\u5458\u6240\u5728\u7684\u4E0B\u6807\u7D22\u5F15</td></tr><tr><td style="text-align:left;">ZSCORE</td><td style="text-align:left;"><code>ZSCORE key-name member</code> \u83B7\u53D6\u6307\u5B9A\u6210\u5458\u7684\u5F97\u5206</td></tr><tr><td style="text-align:left;">ZRANGE</td><td style="text-align:left;"><code>ZRANGE key-name start stop [WITHSCORES]</code> \u83B7\u53D6 start \u81F3 stop \u95F4\u7684\u6210\u5458(\u53EF\u9009\u5730\u83B7\u53D6\u5BF9\u5E94\u5F97\u5206)</td></tr></tbody></table><p><strong>\u83B7\u53D6\u3001\u5220\u9664\u6307\u5B9A\u8303\u56F4\u6570\u636E</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">ZREVRANK</td><td style="text-align:left;"><code>ZREVRANK key-name member</code> \u5BF9\u5E94 ZRANK \u547D\u4EE4\uFF0C\u8FD4\u56DE\u6210\u5458\u7684\u53CD\u5E8F\u7D22\u5F15</td></tr><tr><td style="text-align:left;">ZREVRANGE</td><td style="text-align:left;"><code>ZREVRANGE key-name start stop [WITHSCORES]</code> \u5BF9\u5E94 ZRANGE\uFF0C\u53CD\u5E8F</td></tr><tr><td style="text-align:left;">ZRANGEBYSCORE</td><td style="text-align:left;"><code>ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]</code> \u6839\u636E\u5F97\u5206\u8303\u56F4\u83B7\u53D6\u6210\u5458</td></tr><tr><td style="text-align:left;">ZREVRANGEBYSCORE</td><td style="text-align:left;"><code>ZREVRANGEBYSCOREkey max min [WITHSCORES] [LIMIT offset count]</code> ZRANGEBYSCORE\u547D\u4EE4\u7684\u53CD\u5E8F\u7ED3\u679C</td></tr><tr><td style="text-align:left;">ZREMRANGEBYRANK</td><td style="text-align:left;"><code>ZREMRANGEBYRANK key-name start stop</code> \u5220\u9664\u6307\u5B9A\u4E0B\u6807\u8303\u56F4\u7684\u6210\u5458</td></tr><tr><td style="text-align:left;">ZREMRANGEBYSCORE</td><td style="text-align:left;"><code>ZREMRANGEBYSCORE key-name min max</code> \u5220\u9664\u6307\u5B9A\u5F97\u5206\u8303\u56F4\u7684\u6210\u5458</td></tr><tr><td style="text-align:left;">ZINTERSTORE</td><td style="text-align:left;"><code>ZINTERSTORE dest-key numkeys key [key ...] [WEIGHTS weight [weight...]] [AGGREGATE (SUM or MIN or MAX)]</code> ZSET\u4E0A\u7684\u4EA4\u96C6\u64CD\u4F5C</td></tr><tr><td style="text-align:left;">ZUNIONSTORE</td><td style="text-align:left;"><code>ZUNIONSTORE dest-key numkeys key [key ...] [WEIGHTS weight [weight...]] [AGGREGATE (SUM or MIN or MAX)]</code> ZSET\u4E0A\u7684\u5E76\u96C6\u64CD\u4F5C</td></tr></tbody></table><p>\u5176\u4E2D\uFF0C<code>ZINTERSTORE</code> \u548C <code>ZUNIONSTORE</code> \u7684\u53C2\u6570 <code>numkeys</code> \u8868\u793A\u540E\u9762\u5C06\u8DDF\u591A\u5C11\u4E2A\u96C6\u5408\u4F5C\u4E3A\u5165\u53C2\u3002\u67D0\u4E9B\u5BA2\u6237\u7AEF\u5B9E\u73B0(\u5982python)\u53EF\u80FD\u7701\u7565\u8BE5\u53C2\u6570\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u5728\u51FD\u6570\u5185\u8BA1\u7B97\u8BE5\u503C\u3002</p><p><code>ZINTERSTORE</code> \u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+m+'" alt="zinterstore.png"></p><p>\u5176\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="'+x+'" alt="zinterstore_detail.png"></p><p><code>ZUNIONSTORE</code> \u4F7F\u7528\u793A\u4F8B\uFF1A</p><p><img src="'+E+'" alt="zunionstore.png"></p><p>\u5176\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="'+h+'" alt="zunionstore_detail.png"></p><p>ZSET \u548C SET \u53D6\u4EA4\u96C6\u793A\u4F8B\uFF1A</p><p><img src="'+R+'" alt="zunionstore_with_set.png"></p><p>\u5176\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="'+b+`" alt="zunionstore_with_set_detail.png"></p><h2 id="_6-\u53D1\u5E03-\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_6-\u53D1\u5E03-\u8BA2\u9605" aria-hidden="true">#</a> 6. \u53D1\u5E03/\u8BA2\u9605</h2><p>Redis \u4E2D\u5B9E\u73B0\u4E86\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\u3002</p><p><strong>\u57FA\u672C\u547D\u4EE4</strong></p><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u793A\u4F8B\u53CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">SUBSCRIBE</td><td style="text-align:left;"><code>SUBSCRIBE channel [channel ...]</code> \u8BA2\u9605\u6307\u5B9A\u7684\u901A\u9053</td></tr><tr><td style="text-align:left;">UNSUBSCRIBE</td><td style="text-align:left;"><code>UNSUBSCRIBE [channel [channel ...]]</code> \u53D6\u6D88\u8BA2\u9605</td></tr><tr><td style="text-align:left;">PUBLISH</td><td style="text-align:left;"><code>PUBLISH channel message</code> \u53D1\u5E03\u6D88\u606F</td></tr><tr><td style="text-align:left;">PSUBSCRIBE</td><td style="text-align:left;"><code>PSUBSCRIBE pattern [pattern ...]</code> \u8BA2\u9605\u6307\u5B9A\u5339\u914D\u6A21\u5F0F\u7684\u901A\u9053</td></tr><tr><td style="text-align:left;">PUNSUBSCRIBE</td><td style="text-align:left;"><code>PUNSUBSCRIBE [pattern [pattern ...]]</code> \u53D6\u6D88\u8BA2\u9605\u5339\u914D\u6A21\u5F0F\u7684\u901A\u9053</td></tr></tbody></table><p>\u5E94\u51CF\u5C11\u4F7F\u7528 Redis \u63D0\u4F9B\u7684\u6B64\u6A21\u5F0F\uFF0C\u5B58\u5728\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li>\u8BA2\u9605\u8005\u8BFB\u6D88\u606F\u7684\u901F\u5EA6\u8F83\u6162\uFF0C\u4F1A\u5BFC\u81F4 Redis \u4FDD\u5B58\u7740\u5927\u91CF\u7684\u7F13\u51B2\uFF0C\u7EE7\u800C\u5BFC\u81F4\u5176\u6027\u80FD\u4E0B\u964D\uFF1B</li><li>\u8BA2\u9605\u8005\u65AD\u5F00\u8FDE\u63A5\u81F3\u91CD\u8FDE\u6210\u529F\u4E4B\u95F4\u53D1\u9001\u7684\u6D88\u606F\u5C06\u4F1A\u4E22\u5931\u3002</li></ol><p>\u4E00\u4E2A\u5C0F\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> lilei <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hanmeimei <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

lilei<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;subscribe&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">channel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hanmeimei<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;classroom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;My name is Hanmeimei.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    hanmeimei<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;classroom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;What\\&#39;s your name?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lilei<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am Lilei.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lilei<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lilei<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hanmeimei<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lilei<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;classroom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// channel</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><p><img src="`+S+'" alt="pubsub.png"></p><h2 id="_7-\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_7-\u6392\u5E8F" aria-hidden="true">#</a> 7. \u6392\u5E8F</h2><p><code>SORT</code> \u7528\u6765\u7ED9 list, set(\u6216 zset) \u6392\u5E8F\u3002\u4F8B\u5982\uFF1A</p><p><img src="'+B+'" alt="sort.png"></p><p>\u5B8C\u6574\u7684\u5B9A\u4E49\u4E3A\uFF1A</p><blockquote><p>SORT key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC|DESC] [ALPHA] [STORE destination]</p></blockquote><p>\u5176\u4E2D\uFF1A</p><ul><li><code>DESC</code> \u7528\u6765\u5012\u5E8F\u6392\u5217</li><li><code>ALPHA</code> \u7528\u6765\u8FDB\u884C\u5B57\u7B26\u4E32\u6392\u5E8F</li><li><code>LIMIT</code> \u7528\u6765\u9650\u5236\u8FD4\u56DE\u7ED3\u679C\u6570</li></ul><p><code>SORT</code> \u8FD8\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u5173\u7CFB\u6570\u636E\u5E93\u7684\u5916\u952E\u67E5\u8BE2\uFF0C\u6216\u8DF3\u8FC7\u67D0\u5143\u7D20\u7B49\u7B49\u66F4\u9AD8\u7EA7\u7684\u529F\u80FD\u3002\u4F8B\u5982\uFF1A</p><p><img src="'+A+'" alt="sort_more.png"></p><hr><p>@ssbunny 2015-12-03</p>',79);function P(Z,v){const n=s("ExternalLinkIcon");return a(),l(o,null,[C,_,T,t("p",null,[t("a",I,[O,d(n)])]),D],64)}var G=c(N,[["render",P]]);export{G as default};
