import{w as ln,c as J}from"./path-53f90ab3.js";import{aH as an,aI as N,aJ as I,aK as rn,aL as y,aF as on,aM as z,aN as _,aO as un,aP as t,aQ as sn,aR as tn,aS as fn}from"./index-cd28c823.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,O,v,R,K,a){var D=q-l,i=O-h,n=K-v,m=a-R,r=m*D-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*D,h+r*i]}function W(l,h,q,O,v,R,K){var a=l-q,D=h-O,i=(K?R:-R)/z(a*a+D*D),n=i*D,m=-i*a,r=l+n,s=h+m,f=q+n,c=O+m,L=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,E=(g<0?-1:1)*z(fn(0,T*T*A-P*P)),F=(P*g-p*E)/A,H=(-P*p-g*E)/A,w=(P*g+p*E)/A,d=(-P*p+g*E)/A,x=F-L,e=H-o,u=w-L,M=d-o;return x*x+e*e>u*u+M*M&&(F=w,H=d),{cx:F,cy:H,x01:-n,y01:-m,x11:F*(v/T-1),y11:H*(v/T-1)}}function vn(){var l=cn,h=yn,q=J(0),O=null,v=gn,R=mn,K=pn,a=null,D=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,L=un(c-f),o=c>f;if(a||(a=n=D()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(L>on-y)a.moveTo(s*N(f),s*I(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*N(c),r*I(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=L,E=L,F=K.apply(this,arguments)/2,H=F>y&&(O?+O.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(H>y){var M=sn(H/r*I(F)),B=sn(H/s*I(F));(P-=M*2)>y?(M*=o?1:-1,A+=M,T-=M):(P=0,A=T=(f+c)/2),(E-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(E=0,p=g=(f+c)/2)}var Q=s*N(p),j=s*I(p),C=r*N(T),G=r*I(T);if(w>y){var U=s*N(g),V=s*I(g),X=r*N(A),Y=r*I(A),S;if(L<an)if(S=dn(Q,j,X,Y,U,V,C,G)){var Z=Q-S[0],$=j-S[1],k=U-S[0],b=V-S[1],nn=1/I(tn((Z*k+$*b)/(z(Z*Z+$*$)*z(k*k+b*b)))/2),en=z(S[0]*S[0]+S[1]*S[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}E>y?x>y?(e=W(X,Y,Q,j,s,x,o),u=W(U,V,C,G,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Q,j),a.arc(0,0,s,p,g,!o)):a.moveTo(Q,j),!(r>y)||!(P>y)?a.lineTo(C,G):d>y?(e=W(C,G,U,V,r,-d,o),u=W(Q,j,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[N(m)*n,I(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:J(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:J(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:J(+n),i):q},i.padRadius=function(n){return arguments.length?(O=n==null?null:typeof n=="function"?n:J(+n),i):O},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:J(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:J(+n),i):R},i.padAngle=function(n){return arguments.length?(K=typeof n=="function"?n:J(+n),i):K},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
