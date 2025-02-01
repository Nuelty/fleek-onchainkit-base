"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{54496:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>m});var s=t(39836),r=t(66692),n=t(80477),o=t(9740);class c extends n.C{constructor({callbackSelector:e,cause:a,data:t,extraData:s,sender:r,urls:n}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(e=>`    ${(0,o.I)(e)}`)],`  Sender: ${r}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${s}`].flat(),name:"OffchainLookupError"})}}class i extends n.C{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.I)(a)}`,`Response: ${(0,r.A)(e)}`],name:"OffchainLookupResponseMalformedError"})}}class d extends n.C{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`],name:"OffchainLookupSenderMismatchError"})}}var u=t(40928),f=t(17169),l=t(46304),p=t(81770),h=t(16704),y=t(11601);let m="0x556f1830",w={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,{blockNumber:a,blockTag:t,data:r,to:n}){let{args:o}=(0,f.W)({data:r,abi:[w]}),[i,u,y,m,g]=o,{ccipRead:b}=e,C=b&&"function"==typeof b?.request?b.request:k;try{if(!(0,p.h)(n,i))throw new d({sender:i,to:n});let r=await C({data:y,sender:i,urls:u}),{data:o}=await (0,s.T)(e,{blockNumber:a,blockTag:t,data:(0,h.xW)([m,(0,l.h)([{type:"bytes"},{type:"bytes"}],[r,g])]),to:n});return o}catch(e){throw new c({callbackSelector:m,cause:e,data:r,extraData:g,sender:i,urls:u})}}async function k({data:e,sender:a,urls:t}){let s=Error("An unknown error occurred.");for(let n=0;n<t.length;n++){let o=t[n],c=o.includes("{data}")?"GET":"POST",d="POST"===c?{data:e,sender:a}:void 0,f="POST"===c?{"Content-Type":"application/json"}:{};try{let t;let n=await fetch(o.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(d),headers:f,method:c});if(t=n.headers.get("Content-Type")?.startsWith("application/json")?(await n.json()).data:await n.text(),!n.ok){s=new u.Ci({body:d,details:t?.error?(0,r.A)(t.error):n.statusText,headers:n.headers,status:n.status,url:o});continue}if(!(0,y.q)(t)){s=new i({result:t,url:o});continue}return t}catch(e){s=new u.Ci({body:d,details:e.message,url:o})}}throw s}}}]);