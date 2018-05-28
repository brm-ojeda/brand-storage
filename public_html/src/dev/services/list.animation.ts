import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query as q, stagger } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);



//animacion con timing de la lista

export function list(){
	
	return trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items', 
          stagger(300, animateChild())
        )
      ]),
    ])
};


//animacion individual
export function items() {

  return trigger('items', [
        // cubic-bezier for a tiny bouncing feel
        transition(':enter', [
          style({ transform: 'scale(0.5)', opacity: 0 }),
          animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
            style({ transform: 'scale(1)', opacity: 1 }))
        ])
        // transition(':leave', [
        //   style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        //   animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
        //     style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
        // ]),      
  ])
};
