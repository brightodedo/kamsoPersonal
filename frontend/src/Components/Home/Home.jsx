import React from 'react'
import BookButton from '../BookButton/BookButton'
import MyHeader from '../MyHeader/MyHeader'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home-margin">
            {/* Page Header  */}
            <MyHeader name="DJ Kamso"/> 
            
            <div className='intro'>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe, minus. Labore tempora eos voluptatum quia hic eum 
                cumque repellat fuga obcaecati. Quas qui mollitia a 
                corrupti possimus iure. Earum aspernatur cumque eaque 
                beatae sunt aliquid eos, architecto autem, debitis neque 
                libero voluptatem iusto sit fugiat eligendi minima facere 
                sequi corrupti labore laboriosam ipsa cum. Nostrum, 
                obcaecati consectetur cum repellendus impedit quisquam 
                pariatur, eius ullam dolores fugiat enim natus! Porro illum 
                aperiam a temporibus consequuntur pariatur aliquid ullam 
                natus expedita tempore fugit maxime corporis omnis quod 
                iusto quisquam, aut placeat! Tempora in facilis accusantium 
                perspiciatis hic, ipsa necessitatibus, officia eum magni 
                inventore molestiae? Tempora quia officiis non repellat 
                accusamus reprehenderit rerum dolorum quis molestias 
                consequatur et possimus officia qui voluptatibus, 
                veritatis nobis fugit asperiores ab iure harum aliquam 
                distinctio fugiat labore. Iusto, ut! Porro nisi rem debitis 
                consequatur sequi dolor at adipisci molestiae, consectetur 
                quis optio eius ratione vero alias deserunt.
                </p>      
            </div>

            {/* The button  */}
            <BookButton />

            {/* The home image  */}

        </div>
    </div>
  )
}

export default Home