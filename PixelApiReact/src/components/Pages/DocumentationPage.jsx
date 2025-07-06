import './index.css';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codedString1 = `
[
  {
     "Description": "Once a lover, now my swan carries its pink hues like a crown of solitude. Perhaps one day, destiny will weave their paths together again under a moonlit sky.",
     "Categories": "Animal,Nature,Cute",
     "ImageId": "image-001.jpeg",
     "Image": "https://example-url",
     "Name": "Melancholic swan"
  }
]
`

const codedString2 = `
{
   "Message": "Inner Error",
   "Error": "Invalid input data in number field"
}
`

const codedString3 = `
[
  {
    "Description": "Crafting divine dishes, their heavenly touch turns hunger into gratitude.",
    "Categories": "Cute,Character,Fantasy",
    "ImageId": "image-039.jpeg",
    "Image": "https://example-url",
    "Name": "Angelical chef"
  }
]
`

const codedString4 = `
[
  "image-001.jpeg",
  "image-003.jpeg",
  "image-005.jpeg"
]
`

const codedString5 = `
[
  {
     "Description": "Once a lover, now my swan carries its pink hues like a crown of solitude. Perhaps one day, destiny will weave their paths together again under a moonlit sky.",
     "Categories": "Animal,Nature,Cute",
     "ImageId": "image-001.jpeg",
     "Image": "https://example-url",
     "Name": "Melancholic swan"
 },
 {
     "Description": "Legend whispers of a woman who appears in the moonlit field when hearts are heavy, her presence offering silent solace to the restless.",
     "Categories": "Nature",
     "ImageId": "image-003.jpeg",
     "Image": "https://example-url",
     "Name": "Moon field"
 },
 {
     "Description": "A city that consumes and transforms. Warnings flash in neon pink, but the allure is undeniable—once you belong, you’ll find it hard to leave.",
     "Categories": "Building,Fantasy",
     "ImageId": "image-005.jpeg",
     "Image": "https://example-url",
     "Name": "Neonidas city"
 }
]
`

const codedString6 = `
[
   "Building",
   "Fantasy"
]
`

const codedString7 = `
[
   {
     "Description": "A fiery spirit with a keen eye, ready to outsmart anyone who dares cross their path. Toxin flies not for glory, but for the thrill of proving resilience.",
     "Categories": "Fantasy",
     "ImageId": "image-002.jpeg",
     "Image": "https://example-url",
     "Name": "Toxin, Mexican Jaeger"
   },
   {
     "Description": "Not all fairies glitter. Sabrina, an eternal seeker of love, dances through shadows, embracing a life that defies the need for validation or suffering.",
     "Categories": "Fantasy",
     "ImageId": "image-004.jpeg",
     "Image": "https://example-url",
     "Name": "Sabrina"
    },
    {
     "Description": "A city that consumes and transforms. Warnings flash in neon pink, but the allure is undeniable—once you belong, you’ll find it hard to leave.",
     "Categories": "Building,Fantasy",
     "ImageId": "image-005.jpeg",
     "Image": "https://example-url",
     "Name": "Neonidas city"
    }
]
`

const codedString8 = `
[
  {
    "Description": "A city that consumes and transforms. Warnings flash in neon pink, but the allure is undeniable—once you belong, you’ll find it hard to leave.",
    "ImageId": "image-005.jpeg",
    "Image": "https://example-url",
    "Name": "Neonidas city"
  }
]
`

const codedString9 = `
[
  {
    "Categories": [
      "Building",
      "Fantasy",
      "Nature",
      "Cute",
      "Animal",
      "Character",
      "Landscape"
    ]
  }
]
`

function DocumentationPage() {
    return (
        <>
            <div className='DocMain'>
                <h3 className="titleNotMain">PixelApi Specs</h3>

                <div className='DocElementsContainer'>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">Considerations:</h5>
                        <h5 className="regularText">Once you register a suscription you get your token and url of your api in your email.</h5>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">1) Get ordered images</h5>
                        <h5 className="regularText">List all the images in order starting from 1 to any number</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getOrderedImages?number=#</h5>

                        <div className='spacexd'>
                            <h5 className="regularText">Request Paramaters:</h5>
                            <ul>
                                <li className='myMagicList'>
                                    <div className="regularText">number</div>
                                    <div className="regularText">Defines the number of images to get. If number=0 gets all images</div>
                                </li>
                            </ul>
                        </div>

                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString1}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString2}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">2) Get disordered images</h5>
                        <h5 className="regularText">List all the images in disorder starting from 1 to any number</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getDisorderedImages?number=#</h5>

                        <div className='spacexd'>
                            <h5 className="regularText">Request Paramaters:</h5>
                            <ul>
                                <li className='myMagicList'>
                                    <div className="regularText">number</div>
                                    <div className="regularText">Defines the number of images to get. If number=0 gets all images</div>
                                </li>
                            </ul>
                        </div>

                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString3}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString2}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">3) Get images by Id</h5>
                        <h5 className="regularText">List images given an Id</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getImagesById</h5>

                        <div className='spacexd'>
                            <h5 className="regularText ">Request Body:</h5>
                            <ul>
                                <div className='myMagicList'>
                                    <div className="regularText color-white">You can pass only one Id or multiples Id</div>

                                    <SyntaxHighlighter
                                        language="json"
                                        style={atomOneDark} customStyle={{
                                            fontSize: '15px',
                                            padding: '25px',
                                            borderRadius: '10px'
                                        }}>
                                        {codedString4}
                                    </SyntaxHighlighter>
                                </div>
                            </ul>
                        </div>

                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString5}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString2}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">4) Get images by Category</h5>
                        <h5 className="regularText">List a number of images given a category/categories</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getImagesByCategory?number=#</h5>

                        <div className='spacexd'>
                            <h5 className="regularText">Request Paramaters:</h5>
                            <ul>
                                <li className='myMagicList'>
                                    <div className="regularText">number</div>
                                    <div className="regularText">Defines the number of images to get. If number=0 gets all images</div>
                                </li>
                            </ul>
                        </div>

                        <div className='spacexd'>
                            <h5 className="regularText ">Request Body:</h5>
                            <ul>
                                <div className='myMagicList'>
                                    <div className="regularText color-white">You can pass only one category or more</div>

                                    <SyntaxHighlighter
                                        language="json"
                                        style={atomOneDark} customStyle={{
                                            fontSize: '15px',
                                            padding: '25px',
                                            borderRadius: '10px'
                                        }}>
                                        {codedString6}
                                    </SyntaxHighlighter>
                                </div>
                            </ul>
                        </div>

                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString7}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString2}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">5) Get images by Category</h5>
                        <h5 className="regularText">List a number of images given a category/categories, if you select as an example "fantasy" and "building" only images with that match may bill be brought</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getMatchedImagesByCategory?number=#</h5>

                        <div className='spacexd'>
                            <h5 className="regularText">Request Paramaters:</h5>
                            <ul>
                                <li className='myMagicList'>
                                    <div className="regularText">number</div>
                                    <div className="regularText">Defines the number of images to get. If number=0 gets all images</div>
                                </li>
                            </ul>
                        </div>

                        <div className='spacexd'>
                            <h5 className="regularText ">Request Body:</h5>
                            <ul>
                                <div className='myMagicList'>
                                    <div className="regularText color-white">You can pass only one category or more</div>

                                    <SyntaxHighlighter
                                        language="json"
                                        style={atomOneDark} customStyle={{
                                            fontSize: '15px',
                                            padding: '25px',
                                            borderRadius: '10px'
                                        }}>
                                        {codedString6}
                                    </SyntaxHighlighter>
                                </div>
                            </ul>
                        </div>

                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString8}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString2}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>

                    <div className='DocElement'>
                        <h5 className="titleNotMain">6) Get categories</h5>
                        <h5 className="regularText">List all categories</h5>
                        <h5 className="regularText mint-color">GET ~/pixelapi/getCategories</h5>
                        <h5 className="regularText">Responses:</h5>
                        <ul>
                            <li className='myMagicList'>
                                <div className="regularText">200</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString1}
                                </SyntaxHighlighter>
                            </li>

                            <li className='myMagicList'>
                                <div className="regularText">500</div>

                                <SyntaxHighlighter
                                    language="json"
                                    style={atomOneDark} customStyle={{
                                        fontSize: '15px',
                                        padding: '25px',
                                        borderRadius: '10px'
                                    }}>
                                    {codedString9}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export { DocumentationPage }