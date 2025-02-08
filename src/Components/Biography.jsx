import React from 'react'

function Biography({imgurl}) {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm-grid-cols-1'>
      <div>
        <img src={imgurl} alt="" className='w-[100%] p-7 rounded-full' />
      </div>
      <div className='p-10 text-gray-500'>
        <p className='text-3xl font-bold text-blue-400'>Biography</p>
        <br />
        <p className='text-2xl font-semibold mb-2'>Who we are?</p>
        <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis molestiae eum inventore asperiores nam laborum rem fugiat? A ad est fuga tempora eius, earum quos, ipsum hic corrupti aut maxime cum rerum ex accusantium repudiandae vitae! Omnis at et, eaque odio nam placeat culpa harum sunt debitis molestias est vitae.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum quo enim natus nulla fuga, quaerat cumque illo veritatis similique porro possimus tempore corrupti, commodi ullam itaque velit aut? Cumque repudiandae nihil doloremque suscipit facere!</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, illo.</p>
        <p className="text-lg">Lorem, ipsum dolor.</p>
      </div>
      
    </div>
  )
}

export default Biography
