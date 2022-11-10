import ArticleMain from '../../components/ArticleMain'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'

const styles= {
    content: 'flex',
}

const Post = () => {
    return(
        <div className={styles.content}>
            <ReadersNav/>
            <ArticleMain/>
            <Recommendations/>

        </div>
    )
}

export default Post