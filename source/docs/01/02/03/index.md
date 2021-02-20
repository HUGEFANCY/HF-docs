---
title: Documentation
date: 2018-02-10 00:00:00
description: NexT User Docs
---
# more testing

<script>
    var modelpath = "/assets/chair.json";
</script>
<!-- this is the container where the three.js scene will go -->
<link rel="stylesheet" href="/css/container.css">
<div id="container"></div>

<!-- these are the required scripts for the three.js scene -->
<script src="/lib/three.min.js"></script>
<script src="/lib/OrbitControls.js"></script>
<script src="/lib/RectAreaLightUniformsLib.js"></script>
<!-- this is your app's lib file -->
<script src="/lib/triceratops_app.js"></script>

# it should show up above this

<!-- <div id="three"></div>
<script id="threeMain" type="module">
  if (self.frameElement && self.frameElement.tagName == "IFRAME") {
  import('https://threelib.moshuying.top/assets/glsl_snippets.js').then(async res=>res.glsl_snippets(false,false,{pause:true}))
} else {
  import("https://threelib.moshuying.top/assets/createTHREE.js").then((result) => 
      result.initHexoThreeModule(document.getElementById("three"),document.getElementById("threeMain")));
}
</script> -->

# -----

<!-- <div id="three3D"></div>
<script type="module" id="threeMain3D">
if (!(self.frameElement && self.frameElement.tagName == "IFRAME")) {
  import("https://threelib.moshuying.top/assets/createTHREE.js").then((result) => result.initHexoThreeModule(document.getElementById("three3D"),document.getElementById("threeMain3D")));
} else {
  // 这里的代码会被直接执行，window指向iframe内的window（其实就是把代码整个移动到了iframe内）kjj
  console.log(1)
  main()
  async function main(){
    const THREE = await import("https://cdn.bootcdn.net/ajax/libs/three.js/r120/three.module.js");
    const {OrbitControls} = await import('https://threelib.moshuying.top/three.js/examples/jsm/controls/OrbitControls.js')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(50,90,120);
    const renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.width =renderer.domElement.style.height = '100%'
    document.body.appendChild( renderer.domElement );
    let num2 = null
    let size = 200
    for(let i = 0;i<size;i++){
      num2 = Math.random() * 14 // 随机高度范围
      let box = new THREE.Mesh(new THREE.BoxBufferGeometry(3,num2,3),new THREE.ShaderMaterial({
        vertexShader: `varying float vDepth;void main() {gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );vDepth = (gl_Position.z/gl_Position.w)*.5+.5;}`,
        fragmentShader: `varying float vDepth;void main() {gl_FragColor = vec4(vDepth,vDepth,vDepth,1);}`
      }))
      let box2 = new THREE.Mesh(
        new THREE.BoxBufferGeometry(3,num2,3),
        new THREE.MeshBasicMaterial({color:0xcccccc})
      )
      const [x,y,z] = [-100 + Math.round(Math.random()*200),num2/2,-100 + Math.round(Math.random()*200)] // 控制方块之间的距离
      box.position.set(x,y,z)
      box2.position.set(x,y,z)
      box.castShadow = true
      scene.add(box2)
    }
    new OrbitControls(camera,renderer.domElement)
    window.onresize = function (){
      camera.aspect = window.innerWidth /window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth,window.innerHeight)
    }
    const animate = function () {
      renderer.render( scene, camera );
      requestAnimationFrame( animate );
    };
    animate();
  }
}
</script> -->

 # Testing 


### Elegant and Powerful Theme for Hexo

Theme NexT has the following features:

* No jQuery.
* Support [native dark mode](https://caniuse.com/#feat=prefers-color-scheme).
* Support Pjax to deliver a fast browsing experience.
* Integrated KaTeX and MathJax mathematical formula rendering.
* Integrated PDF.js and mermaid diagram.
* Support Disqus, Changyan, LiveRe, Gitalk, Utterances and Isso comment systems.
* Support a large number of third-party statistics and content sharing services.
* Easy to customize content or modify style.

### Four Schemes in One

By using different Schemes in NexT, you can simply change the style of your blog, and nearly all options can be used in all schemes.

{% darkmode_preview %}

### Multilingual Support

Thanks to the contribution of our users and developers, [NexT now supports over 20 languages](/docs/theme-settings/internationalization.html#Choosing-Language).

{% gp 3-1 %}
![English translation](/images/en.png)
![Chinese translation](/images/cn.png)
![Russian translation](/images/ru.png)
{% endgp %}

### Code Highlighting Themes

NexT uses code highlighting themes from the [Highlight.js](https://highlightjs.org) and [Prism](https://prismjs.com) package, and makes [more than 120 themes](/docs/theme-settings/#Codeblock-Style) available to you.

<!-- Inspired by https://github.com/sindresorhus/css-in-readme-like-wat -->
| Tomorrow                  | Tomorrow Night                  | Tomorrow Night Eighties                  |
| :-----------------------: | :-----------------------------: | :--------------------------------------: |
| ![](/images/tomorrow.svg) | ![](/images/tomorrow-night.svg) | ![](/images/tomorrow-night-eighties.svg) |

| Tomorrow Night Blue                  | Tomorrow Night Bright                  | Default                  |
| :----------------------------------: | :------------------------------------: | :----------------------: |
| ![](/images/tomorrow-night-blue.svg) | ![](/images/tomorrow-night-bright.svg) | ![](/images/default.svg) |

### Supported Browsers

We design NexT to support the latest web browsers. We support the current versions of Chrome, Firefox, Safari, and Microsoft Edge. Many CSS3 and ES6 features are used in theme NexT, including CSS Variables, Destructuring assignment, Arrow functions and Spread operator.

| Browser | Supported versions | Release date | Limitation
| - | - | - | - |
<i class="fab fa-internet-explorer fa-2x"></i> IE | N/A | Oct 17, 2013 | N/A |
<i class="fab fa-edge-legacy fa-2x"></i> Edge | 16+ | Oct 17, 2017 | [CSS Variables](https://caniuse.com/#feat=css-variables) |
<i class="fab fa-firefox-browser fa-2x"></i> Firefox | 41+ | Sep 22, 2015 | [Destructuring assignment](https://caniuse.com/#feat=mdn-javascript_operators_destructuring) |
<i class="fab fa-chrome fa-2x"></i> Chrome | 49+ | Mar 3, 2016 | CSS Variables |
<i class="fab fa-safari fa-2x"></i> Safari | 10+ | Sep 20, 2016 | [Arrow functions](https://caniuse.com/#feat=arrow-functions) |
<i class="fab fa-opera fa-2x"></i> Opera | 37+ | May 4, 2016 | [Spread operator](https://caniuse.com/#feat=mdn-javascript_operators_spread_spread_in_arrays) |

Some other new Web APIs, such as [IntersectionObserver](https://caniuse.com/#feat=intersectionobserver) and [Fetch API](https://caniuse.com/#feat=fetch), are used by NexT plugins. They are not core functions of NexT, so we have no plans to fix their compatibility issues with legacy browsers.

In addition, [CSS position: sticky](https://caniuse.com/#feat=css-sticky) is used for sidebar positioning. On browsers that do not support this property, its fallback style `position: static` will be used.

### Customize Your NexT

NexT have flexible but simple options, and you can make your own blog with built-in third-party support. Now let's [get started](/docs/getting-started/).
