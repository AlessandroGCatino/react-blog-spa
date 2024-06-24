import Form from "../components/Form";

export default function(){

    const [response, setResponse] = useState(null);

    const [tags, setTags] = useState([]);
    const getTags = async () => {
        const url = `${apiUrl}/tags`;
        const { data: array } = await axios.get(url);
        setTags(array);
    }
  
    const [categories, setCategories] = useState([]);
    const getCategorie = async () => {
        const url = `${apiUrl}/categories`;
        const { data: array } = await axios.get(url);
        setCategories(array);
    }
  
    useEffect(() => {
        getTags();
        getCategorie();
    },[])

    return(
    <Form 
      categories={categories} 
      tags={tags} 
      onCreate={() => {
          setShowCreateForm(false);
          getPosts(1);
      }}/>
    )

}