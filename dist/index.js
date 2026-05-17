"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var w=c(function(B,p){"use strict";var O=require("@stdlib/assert-is-plain-object"),y=require("@stdlib/assert-is-function"),f=require("@stdlib/assert-has-own-property"),T=require("@stdlib/assert-is-ndarray-like"),E=require("@stdlib/assert-is-integer"),F=require("@stdlib/ndarray-base-assert-is-order"),j=require("@stdlib/ndarray-shape"),q=require("@stdlib/ndarray-order"),S=require("@stdlib/ndarray-strides"),V=require("@stdlib/ndarray-base-data-buffer"),k=require("@stdlib/ndarray-base-dtype"),L=require("@stdlib/ndarray-base-shape2strides"),R=require("@stdlib/ndarray-base-strides2order"),A=require("@stdlib/ndarray-base-flatten-shape-from"),C=require("@stdlib/ndarray-base-map"),D=require("@stdlib/ndarray-base-ctor"),J=require("@stdlib/ndarray-empty-like"),u=require("@stdlib/string-format"),h="row-major",M="column-major";function P(a,i,r,s,b){var d,v,g,e,o,n,t,m,l;if(!T(a))throw new TypeError(u("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(!E(i))throw new TypeError(u("invalid argument. Second argument must be an integer. Value: `%s`.",i));if(n=j(a),n.length<1)throw new TypeError(u("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",n.length));if(v=arguments.length,d=!1,e={order:h,dtype:k(a)},v<=3?t=r:v===4?y(r)?(t=r,o=s):(d=!0,t=s):(d=!0,t=s,o=b),!y(t))throw new TypeError(u("invalid argument. Callback argument must be a function. Value: `%s`.",t));if(d){if(!O(r))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",r));if(f(r,"order"))if(r.order==="any")l=R(S(a)),l===1?e.order=h:l===2?e.order=M:e.order=q(a);else if(r.order==="same")e.order=q(a);else if(F(r.order))e.order=r.order;else throw new TypeError(u("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));f(r,"dtype")&&(e.dtype=r.dtype)}return m=J(a,{shape:A(n,i),order:e.order,dtype:e.dtype}),g=new D(e.dtype,V(m),n,L(n,e.order),0,e.order),C([a,g],t,o),m}p.exports=P});var _=w();module.exports=_;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
