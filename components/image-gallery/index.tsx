import Gallery from 'react-grid-gallery'
import Images from 'data/images'
import theme from 'styles/theme'

const ImageGallery: React.FC = () => {
    return (
        <div className="gallery__container">
            <style jsx>
                {`
                    .gallery__container {
                        background-color: ${theme.colors.black};
                    }
                `}
            </style>
            <Gallery images={Images} />
        </div>
    )
}

export default ImageGallery
