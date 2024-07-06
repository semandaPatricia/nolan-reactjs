import React from 'react'

const About = () => {
  return (
    <>
    <section className='border-b'>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
     
       <div className='max-w-2xl'>
        <h1 className=" font-bold text-4xl xl:text-5xl">
                         Protein snacks
                             <span className=""style={{color:'#ff0'}}> Crunchy & Healthy</span>
                        </h1>
                        </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1677735299567-841ce2069588?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" absolute inset-0 h-full w-full object-cover "
          />
        </div>
       
  
        <div className="lg:py-16 ">
          <article className="space-y-4">
            <p>
            Super fresh and super Crunchy vibes with signature combos and infinite ways to create your very own meal!
            </p>
  
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
              voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
              dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
              aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
              voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="man-eating-chips"
          src="https://images.unsplash.com/photo-1621841987490-f17750075ced?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" absolute inset-0 h-full w-full object-cover "
        />
      </div>

      <div className="lg:py-16">
      <div className="max-w-3xl mb-5">
     
     <h1 className=" font-bold text-4xl xl:text-5xl "style={{color:'#ff0'}}>
                    
                          <span className=""> protein snacks!</span>
                     </h1>
   </div>
        <article className="space-y-4">
          <p>
          Super fresh and super hot Asian vibes with signature combos and infinite ways to create your very own meal!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
            voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
            dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
            aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
            voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default About