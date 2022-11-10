import DescripProduct from "./DescripProduct"
import ImagesSliders from "./ImagesSliders"

const MainMainer = () => {
    return(<>
     <main className="grid gap-8 grid-cols-1 md:grid-cols-2 md:min-h-[calc(100vh-90px)] md:container md:mx-auto items-center">

        <ImagesSliders/>
        <DescripProduct/>
      </main>
    
    </>)
}

export default MainMainer