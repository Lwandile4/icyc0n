import{r as u,j as e}from"./react-vendor-BA2bk7ny.js";import{L as Z}from"./router-vendor-D7E_gG8Q.js";import{aB as Q,Q as J,R as K,Z as ee,V as H,T as te,aC as se,aD as ae,aE as oe,aF as ne,aG as re,aH as ie,aI as le}from"./graphics-vendor-C1K14kOS.js";import{T as ce,H as de,U as ue,av as me,aw as fe}from"./ui-vendor-BcqBCM-c.js";import{m as $}from"./animation-vendor-LPXIEdIP.js";import"./vendor-BmonzrHK.js";import"./effects-vendor-BKpy4bIP.js";function he({hasActiveReminders:m=!1,hasUpcomingReminders:f=!1,disableCenterDimming:b=!1,className:j="",isDarkMode:M=!0}){const h=u.useRef(null),S=u.useRef(null);return u.useEffect(()=>{const i=S.current;i&&(i.uniforms.hasActiveReminders.value=m,i.uniforms.hasUpcomingReminders.value=f,i.uniforms.disableCenterDimming.value=b)},[m,f,b]),u.useEffect(()=>{const i=h.current;if(!i)return;const v=new Q({antialias:!1,alpha:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(v.domElement);const C=new J,T=new K(-1,1,1,-1,0,1),z=new ae,r=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,s=`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform bool hasActiveReminders;
      uniform bool hasUpcomingReminders;
      uniform bool disableCenterDimming;
      varying vec2 vUv;

      #define t iTime
      mat2 m(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
      float map(vec3 p){
        p.xz *= m(t*0.4);
        p.xy *= m(t*0.3);
        vec3 q = p*2. + t;
        return length(p + vec3(sin(t*0.7))) * log(length(p)+1.0)
             + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
      }

      void mainImage(out vec4 O, in vec2 fragCoord) {
        vec2 uv = fragCoord / min(iResolution.x, iResolution.y) - vec2(.9, .5);
        uv.x += .4;
        vec3 col = vec3(0.0);
        float d = 2.5;

        // Ray-march
        // OPTIMIZATION: Reduced iterations from 5 to 4 for better performance with minimal visual loss
        for (int i = 0; i <= 5; i++) {
          vec3 p = vec3(0,0,5.) + normalize(vec3(uv, -1.)) * d;
          float rz = map(p);
          float f  = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);

          vec3 base = vec3(0.0);

          // Always use the "Dark Mode" Icycon Blue/Cyan Palette
          base = hasActiveReminders
            ? vec3(0.05,0.2,0.5) + vec3(4.0,2.0,5.0)*f
            : hasUpcomingReminders
            ? vec3(0.05,0.3,0.1) + vec3(2.0,5.0,1.0)*f
            // Default Icycon Blue Theme
            : vec3(0.0, 0.1, 0.3) + vec3(0.3, 0.6, 1.2)*f;

          col = col * base + smoothstep(2.5, 0.0, rz) * 0.7 * base;
          d += min(rz, 1.0);
        }

        // Calculate alpha based on brightness to allow background to show through black areas
        float brightness = max(col.r, max(col.g, col.b));
        float alpha = smoothstep(0.0, 0.5, brightness);

        // Center dimming
        float dist   = distance(fragCoord, iResolution*0.5);
        float radius = min(iResolution.x, iResolution.y) * 0.5;
        float dim    = disableCenterDimming
                     ? 1.0
                     : smoothstep(radius*0.3, radius*0.5, dist);

        O = vec4(col, alpha);
        if (!disableCenterDimming) {
           O.rgb = mix(O.rgb * 0.3, O.rgb, dim);
        }
      }

      void main() {
        mainImage(gl_FragColor, vUv * iResolution);
      }
    `,d={iTime:{value:0},iResolution:{value:new H},iMouse:{value:new H},hasActiveReminders:{value:m},hasUpcomingReminders:{value:f},disableCenterDimming:{value:b}},x=new ee({vertexShader:r,fragmentShader:s,uniforms:d,transparent:!0,depthWrite:!1});S.current=x;const I=new te(new se(2,2),x);C.add(I);const L=()=>{if(!i)return;const y=i.clientWidth,O=i.clientHeight;v.setSize(y,O),d.iResolution.value.set(y,O)},g=y=>{d.iMouse.value.set(y.clientX,window.innerHeight-y.clientY)};L();const P=new ResizeObserver(()=>L());return P.observe(i),window.addEventListener("mousemove",g),v.setAnimationLoop(()=>{d.iTime.value=z.getElapsedTime(),v.render(C,T)}),()=>{P.disconnect(),window.removeEventListener("mousemove",g),v.setAnimationLoop(null),i&&i.contains(v.domElement)&&i.removeChild(v.domElement),x.dispose(),I.geometry.dispose(),v.dispose()}},[]),e.jsx("div",{ref:h,className:`absolute inset-0 z-0 transition-opacity duration-500 will-change-[opacity] ${j}`,"aria-label":"Interactive nebula background"})}const q=[{id:1,label:"ROI Increase",value:"+124%",icon:ce,coords:[-74.006,40.7128]},{id:2,label:"Global Reach",value:"90+ Countries",icon:de,coords:[103.8198,1.3521]},{id:3,label:"Clicks",value:"+250",icon:ue,coords:[151.2093,-33.8688]},{id:4,label:"Organic Traffic",value:"+215%",icon:me,coords:[28.0473,-26.2041]}];function pe({width:m=600,height:f=600,className:b="",isDarkMode:j=!0}){const M=u.useRef(null),h=u.useRef(null),[S,i]=u.useState(!0),[v,C]=u.useState(null),T=u.useRef({width:m,height:f}),z=u.useRef([]);return u.useEffect(()=>{if(!h.current)return;T.current={width:h.current.clientWidth||m,height:h.current.clientHeight||f};const r=new ResizeObserver(s=>{for(const d of s)T.current={width:d.contentRect.width,height:d.contentRect.height}});return r.observe(h.current),()=>r.disconnect()},[m,f]),u.useEffect(()=>{if(!M.current)return;const r=M.current,s=r.getContext("2d");if(!s)return;const d=m,x=f,I=Math.min(d,x)/2.2,L=Math.min(window.devicePixelRatio||1,2);r.width=d*L,r.height=x*L,r.style.width="100%",r.style.height="auto",s.scale(L,L);const g=oe().scale(I).translate([d/2,x/2]).clipAngle(90),P=ne().projection(g).context(s),y=(a,l)=>{const[c,o]=a;let n=!1;for(let t=0,w=l.length-1;t<l.length;w=t++){const[N,p]=l[t],[k,E]=l[w];p>o!=E>o&&c<(k-N)*(o-p)/(E-p)+N&&(n=!n)}return n},O=(a,l)=>{const c=l.geometry;if(c.type==="Polygon"){const o=c.coordinates;if(!y(a,o[0]))return!1;for(let n=1;n<o.length;n++)if(y(a,o[n]))return!1;return!0}else if(c.type==="MultiPolygon"){for(const o of c.coordinates)if(y(a,o[0])){let n=!1;for(let t=1;t<o.length;t++)if(y(a,o[t])){n=!0;break}if(!n)return!0}return!1}return!1},Y=(a,l=20)=>{const c=[],o=ie(a),[[n,t],[w,N]]=o,p=l*.17;if(p<=0)return c;for(let k=n;k<=w;k+=p)for(let E=t;E<=N;E+=p){const A=[k,E];O(A,a)&&c.push(A)}return c},_=[];let U;const D=()=>{s.clearRect(0,0,d,x);const a=g.scale(),l=a/I;if(s.beginPath(),s.arc(d/2,x/2,a,0,2*Math.PI),s.fillStyle="rgba(0, 19, 88, 0.6)",s.strokeStyle="rgba(255, 255, 255, 0.2)",s.fill(),s.lineWidth=1*l,s.stroke(),U){const o=le();s.beginPath(),P(o()),s.strokeStyle="rgba(64, 146, 239, 0.15)",s.lineWidth=1*l,s.stroke(),s.fillStyle="#4092ef",_.forEach(n=>{const t=g([n.lng,n.lat]);t&&t[0]>=0&&t[0]<=d&&t[1]>=0&&t[1]<=x&&(s.beginPath(),s.arc(t[0],t[1],3*l,0,2*Math.PI),s.fill())})}const c=T.current.width/m;q.forEach((o,n)=>{const t=z.current[n];if(!t)return;const w=g([o.coords[0],o.coords[1]]);if(w){const[N,p]=w;if(Math.sqrt(Math.pow(N-d/2,2)+Math.pow(p-x/2,2))<a){const E=N*c,A=p*c;t.style.display="block",t.style.transform=`translate(${E}px, ${A}px) translate(-50%, -100%)`,t.style.opacity="1",t.style.zIndex="10"}else t.style.opacity="0",t.style.zIndex="0"}else t.style.display="none"})},X=async()=>{try{i(!0);const a=await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");if(!a.ok)throw new Error("Failed to load land data");U=await a.json(),U.features.forEach(l=>{Y(l,18).forEach(([o,n])=>{_.push({lng:o,lat:n,visible:!0})})}),D(),requestAnimationFrame(()=>{i(!1)})}catch(a){console.error(a),C("Failed to load land map data"),i(!1)}},R=[0,-10];let W=!0;const B=.3,V=re(()=>{W&&(R[0]+=B,g.rotate(R),D())}),F=a=>{W=!1;const l=a.clientX,c=a.clientY,o=[...R],n=w=>{const p=w.clientX-l,k=w.clientY-c;R[0]=o[0]+p*.25,R[1]=o[1]-k*.25,R[1]=Math.max(-90,Math.min(90,R[1])),g.rotate(R),D()},t=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t),setTimeout(()=>{W=!0},1e3)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",t)},G=a=>{if(a.target===r){a.preventDefault();const l=a.deltaY>0?.9:1.1,c=Math.max(I*.5,Math.min(I*3,g.scale()*l));g.scale(c),D()}};return r.addEventListener("mousedown",F),r.addEventListener("wheel",G,{passive:!1}),setTimeout(()=>X(),100),()=>{V.stop(),r.removeEventListener("mousedown",F),r.removeEventListener("wheel",G)}},[m,f]),v?e.jsx("div",{className:`flex items-center justify-center p-8 border border-white/10 rounded-full h-[400px] w-[400px] ${b}`,children:e.jsx("div",{className:"text-center text-white/50",children:e.jsx("p",{className:"text-sm",children:"Visualisation offline"})})}):e.jsxs("div",{ref:h,className:`
        relative flex justify-center items-center cursor-grab active:cursor-grabbing
        transition-opacity duration-1000 ease-out
        ${b} 
        ${S?"opacity-0":"opacity-100"}
      `,style:{maxWidth:`${m}px`,width:"100%",margin:"0 auto"},children:[e.jsx("canvas",{ref:M,className:"rounded-full select-none"}),q.map((r,s)=>e.jsxs("div",{ref:d=>{z.current[s]=d},className:"absolute top-0 left-0 pointer-events-none hidden will-change-transform",children:[e.jsxs("div",{className:`
                flex items-center gap-2 md:gap-3 p-2 md:p-3 pr-4 md:pr-6 rounded-lg md:rounded-xl backdrop-blur-md shadow-xl min-w-[120px] md:min-w-[160px]
                transition-colors duration-300
                ${j?"bg-black/40 border border-white/20 text-white":"bg-white/80 border border-slate-200 text-black"}
            `,children:[e.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg bg-icy-main/20 flex items-center justify-center text-icy-main",children:e.jsx(r.icon,{size:16,className:"md:w-5 md:h-5"})}),e.jsxs("div",{children:[e.jsx("div",{className:`text-[10px] md:text-xs font-medium uppercase tracking-wider ${j?"text-gray-400":"text-slate-600"}`,children:r.label}),e.jsx("div",{className:"font-bold text-xs md:text-base",children:r.value})]})]}),e.jsx("div",{className:"w-0.5 h-4 md:h-8 bg-gradient-to-b from-icy-main/50 to-transparent mx-auto"})]},r.id))]})}const Ne=()=>{const[m,f]=u.useState(!1),b=u.useRef(null),j=u.useRef(null);return u.useEffect(()=>{const M=new IntersectionObserver(h=>{h.forEach(S=>{S.isIntersecting&&!m&&(j.current=setTimeout(()=>{f(!0)},300))})},{rootMargin:"200px",threshold:.1});if(b.current){M.observe(b.current);const h=setTimeout(()=>{f(!0)},500);return()=>{M.disconnect(),j.current&&clearTimeout(j.current),clearTimeout(h)}}},[]),e.jsxs("section",{ref:b,className:"relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-12 md:pb-0 overflow-hidden bg-icy-dark",children:[m?e.jsx(he,{className:"opacity-100",isDarkMode:!0}):e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-icy-dark via-icy-deep to-icy-dark opacity-80"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-icy-dark to-transparent z-10"}),e.jsxs("div",{className:"relative z-10 w-[90%] lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-12 items-center",children:[e.jsxs("div",{className:"text-center lg:text-left space-y-8 order-2 lg:order-1",children:[e.jsx($.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:e.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg",children:["One Platform",e.jsx("br",{}),e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-icy-main to-cyan-300",children:"Limitless Global Reach."})]})}),e.jsx($.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8},className:"text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 drop-shadow-sm",children:"Icycon consolidates every marketing channel into one powerful command hub. It provides the essential framework for visionary eCommerce, SaaS, and businesses to capture market share on a worldwide scale."}),e.jsx($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},className:"flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4",children:e.jsxs(Z,{to:"/auth?mode=signup",className:" relative px-8 py-3 rounded-full font-bold text-lg text-white bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:bg-[#009dd3] hover:border-[#009dd3] hover:shadow-[0_0_30px_rgba(0,157,211,0.6)] hover:-translate-y-5 flex items-center gap-2 group w-full sm:w-auto justify-center",children:["Start Your Growth ",e.jsx(fe,{className:"group-hover:translate-x-1 transition-transform"})]})})]}),e.jsx($.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.2},className:"order-1 lg:order-2 flex justify-center items-center relative",children:e.jsxs("div",{className:"relative w-full max-w-[600px] aspect-square flex items-center justify-center",children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-icy-main/20 blur-[100px] rounded-full"}),m?e.jsx(pe,{width:600,height:600,className:"w-full h-full",isDarkMode:!0}):e.jsx("div",{className:"w-full h-full rounded-full bg-white/5 border-2 border-white/10 animate-pulse"})]})})]})]})};export{Ne as default};
