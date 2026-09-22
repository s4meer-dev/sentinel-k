import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{i as t,t as n}from"./vendor-react-DZDGgP02.js";var r=e(t(),1),i=n(),a=`/assets/105e7cd3a106296d90d081af3766923516632143.webp`,o=`/assets/504005ac7071697bbdfd9ee4625ed5dff8ee529a.svg`,s=`/assets/bbce9ed952a7420976ed2c9f616ed1df87bdb9aa.svg`,c=`/assets/c711fe9ebd777477bb6d7ed5d01bcceba139f212.svg`,l=`/assets/7b95b73d9de4dcf48f3ddcb20e754ae7f424ef4a.svg`,d=`'Inter', sans-serif`,f=`'AM Le Cygne','Playfair Display',Georgia,serif`,p=`'TWK Lausanne','Inter',sans-serif`,m=[`Intake Pumps`,`Modbus Logic`,`Surge Valves`,`Digital Twins`,`Valve Ramps`,`SCADA Nodes`,`Fluid Limits`,`PLC Signals`],h=`50% 23.7%`;
function g({onComplete:e,onNavReveal:t}){
  let[n,g]=(0,r.useState)(0),[_,v]=(0,r.useState)(()=>typeof window<`u`?window.innerWidth:1200),y=_<=768;
  let[pct,setPct]=(0,r.useState)(0);
  (0,r.useEffect)(()=>{let e=()=>v(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);
  let b=y?Math.max(1,(_-32)/211):2.5,[S,C]=(0,r.useState)(!1),[w,T]=(0,r.useState)(!1),[E,D]=(0,r.useState)(0),[O,k]=(0,r.useState)(!0),[A,j]=(0,r.useState)(!1);

  // Smooth percentage ticker 0 -> 100
  (0,r.useEffect)(()=>{
    let start=performance.now();
    let raf;
    let tick=(now)=>{
      let p=Math.min(100,Math.round(((now-start)/2400)*100));
      setPct(p);
      if(p<100)raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf);
  },[]);

  // Keyboard skip support
  (0,r.useEffect)(()=>{
    let onKey=(ev)=>{
      if(ev.key==="Enter"||ev.key==="Escape"||ev.key===" "){
        t?.();
        e();
      }
    };
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[e,t]);

  (0,r.useEffect)(()=>{
    let e=[],t=(t,n)=>e.push(setTimeout(n,t));
    t(200,()=>g(1));
    t(950,()=>g(2));
    t(1800,()=>g(3));
    t(3100,()=>g(4));
    return()=>e.forEach(clearTimeout);
  },[]);

  (0,r.useEffect)(()=>{
    if(n===3){
      t?.(),C(!0),j(!0);
      let e=setTimeout(()=>T(!0),350);
      return()=>clearTimeout(e);
    }
    n===4&&e();
  },[n,e,t]);

  (0,r.useEffect)(()=>{
    if(!w)return;
    let e=setInterval(()=>{k(!1),setTimeout(()=>{D(e=>(e+1)%m.length),k(!0)},200)},1200);
    return()=>clearInterval(e);
  },[w]);

  let M=n>=1,N=n>=2,P=n>=3;
  return(0,i.jsxs)(`div`,{
    style:{
      position:`fixed`,inset:0,zIndex:9999,display:`flex`,flexDirection:`column`,alignItems:`center`,paddingTop:120,paddingBottom:y?0:42,
      background:N?`radial-gradient(circle at 50% 30%, #ffffff 0%, #f5f3ee 60%, #ece8e0 100%)`:`#0a0d12`,
      transition:N?`background 0.9s cubic-bezier(0.22, 1, 0.36, 1)`:`none`,overflow:`hidden`
    },
    children:[
      // Top Cinematic HUD Telemetry Bar during boot
      (0,i.jsxs)(`div`,{
        style:{
          position:`fixed`,top:24,left:28,right:28,display:`flex`,justifyContent:`space-between`,alignItems:`center`,
          fontFamily:`monospace`,fontSize:10,letterSpacing:`0.12em`,color:N?`#545b67`:`rgba(255,255,255,0.7)`,
          opacity:n>=3?0:1,transition:`opacity 0.4s ease, color 0.5s ease`,pointerEvents:`none`,zIndex:10002
        },
        children:[
          (0,i.jsxs)(`span`,{children:[`SENTINEL-K // ENCLAVE BOOT [`,pct<40?`NPU 45 TOPS`:pct<80?`MODBUS PORT 502`:`EPANET 2.2 READY`,`]`]}),
          (0,i.jsxs)(`span`,{style:{fontWeight:800,color:`#d95323`},children:[String(pct).padStart(3,`0`),`%`]})
        ]
      }),

      // Skip Intro Pill Button
      (0,i.jsx)(`button`,{
        onClick:()=>{t?.();e();},
        style:{
          position:`fixed`,bottom:24,right:28,zIndex:10005,
          background:N?`rgba(17,20,26,0.08)`:`rgba(255,255,255,0.1)`,
          border:N?`1px solid rgba(0,0,0,0.12)`:`1px solid rgba(255,255,255,0.2)`,
          color:N?`#11141a`:`#fff`,
          fontFamily:`monospace`,fontSize:10,fontWeight:700,letterSpacing:`0.1em`,
          padding:`7px 14px`,borderRadius:100,cursor:`pointer`,
          backdropFilter:`blur(8px)`,transition:`all 0.3s ease`
        },
        children:`SKIP INTRO ↵`
      }),

      (0,i.jsxs)(`div`,{
        style:{textAlign:`center`,padding:y?`24px 20px 0`:`40px 32px 0`,maxWidth:y?440:740},
        children:[
          (0,i.jsxs)(`h1`,{
            style:{
              fontFamily:f,fontWeight:700,fontSize:y?36:72,lineHeight:y?`44px`:`78px`,letterSpacing:y?`-0.72px`:`-1.44px`,
              color:N?`#11141a`:`#ffffff`,margin:0,WebkitFontSmoothing:`antialiased`,transition:`color 0.6s ease`
            },
            children:[
              (0,i.jsx)(`span`,{
                style:{display:`block`},
                children:[`The command`,`isn’t trusted.`].map((e,t)=>(0,i.jsx)(`span`,{
                  style:{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`,paddingBottom:`0.2em`,marginBottom:`-0.2em`},
                  children:(0,i.jsx)(`span`,{
                    style:{display:`inline-block`,transform:S?`translateY(0)`:`translateY(110%)`,transition:`transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`${[0,80][t]}ms`},
                    children:e
                  })
                },e)).reduce((e,t,n)=>n===0?[t]:[...e,` `,t],[])
              }),
              (0,i.jsx)(`span`,{
                style:{display:`block`},
                children:[`The consequence`,`is verified.`].map((e,t)=>(0,i.jsx)(`span`,{
                  style:{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`,paddingBottom:`0.2em`,marginBottom:`-0.2em`},
                  children:(0,i.jsx)(`span`,{
                    style:{display:`inline-block`,transform:S?`translateY(0)`:`translateY(110%)`,transition:`transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`${[160,240][t]}ms`},
                    children:e
                  })
                },e)).reduce((e,t,n)=>n===0?[t]:[...e,` `,t],[])
              })
            ]
          }),
          (0,i.jsxs)(`p`,{
            style:{
              fontFamily:p,fontWeight:600,fontSize:y?18:23,lineHeight:y?`28px`:`32px`,letterSpacing:`-0.24px`,color:`#545b67`,margin:`18px 0 0`,
              whiteSpace:y?`normal`:`nowrap`,opacity:w?1:0,transform:w?`translateY(0)`:`translateY(16px)`,transition:`opacity 0.5s ease, transform 0.5s ease`
            },
            children:[
              `We protect your `,
              (0,i.jsx)(`strong`,{
                style:{fontFamily:p,fontWeight:800,color:`#d95323`,background:`rgba(217,83,35,0.08)`,border:`1px solid rgba(217,83,35,0.22)`,padding:`2px 10px`,borderRadius:100},
                children:(0,i.jsx)(`span`,{style:{opacity:O?1:0,transition:`opacity 0.2s ease`},children:m[E]})
              }),
              ` before execution, for verified physical safety.`
            ]
          })
        ]
      }),
      (0,i.jsx)(`div`,{
        style:{display:y?`contents`:`block`,flexShrink:0,transform:y?`none`:`translateY(max(0px, calc(100vh - 1038px)))`},
        children:(0,i.jsxs)(`div`,{
          style:{
            position:`relative`,width:891,height:634,marginTop:y?`auto`:40,flexShrink:0,
            transform:N?`scale(1)`:`scale(${b})`,transformOrigin:h,
            transition:N?`transform 1.05s cubic-bezier(0.22, 1, 0.36, 1)`:`none`
          },
          children:[
            (0,i.jsx)(`img`,{src:a,alt:``,style:{position:`absolute`,top:-31,left:-85,width:1061,height:707,pointerEvents:`none`,opacity:N?1:0,transition:N?`opacity 0.7s ease 0.15s`:`none`}}),
            (0,i.jsxs)(`div`,{
              style:{
                position:`absolute`,left:330,top:52,width:232,height:P?508:62,
                background:`#05070a`,borderRadius:24,padding:8,display:`flex`,flexDirection:`column`,gap:9,
                overflow:`hidden`,opacity:M?1:0,transform:M?`translateY(0)`:`translateY(8px)`,
                boxShadow:`inset 0 0 14px rgba(0,0,0,0.7)`,
                transition:P?`height 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease, transform 0.4s ease`:`opacity 0.4s ease, transform 0.4s ease`
              },
              children:[
                (0,i.jsxs)(`div`,{
                  style:{display:`flex`,gap:9,alignItems:`center`,flexShrink:0},
                  children:[
                    (0,i.jsx)(`div`,{style:{background:`#d95323`,borderRadius:10,width:40,height:40,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,i.jsx)(`img`,{src:o,alt:``,style:{width:18,height:22,objectFit:`contain`}})}),
                    (0,i.jsxs)(`div`,{
                      style:{display:`flex`,flexDirection:`column`,gap:1},
                      children:[
                        (0,i.jsx)(`span`,{style:{fontFamily:`monospace`,fontWeight:700,fontSize:7.5,color:`#d95323`,letterSpacing:`0.08em`},children:`iQOO 13 // FIELD ENCLAVE`}),
                        (0,i.jsx)(`span`,{style:{fontFamily:d,fontWeight:600,fontSize:10.5,color:`#fff`,lineHeight:`15px`},children:`Hydraulic boundary verified`})
                      ]
                    })
                  ]
                }),
                A&&(0,i.jsx)(`img`,{src:`/assets/field_copilot_mobile.webp`,style:{flex:1,width:`100%`,borderRadius:14,objectFit:`cover`,display:`block`}})
              ]
            })
          ]
        })
      })
    ]
  });
}
export{g as default};