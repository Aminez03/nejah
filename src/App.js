import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBare from './Components/NaveBare';
import { MainVideo } from './Components/MainVideo';
import { VideoList } from './Components/VideoList';
import { Comment } from './Components/Comment';

function App() {
  return (
    <div className="App">
      <NaveBare/>
      <div className="row">
        <div className="col-8">
      <MainVideo/>
      <Comment/>  
        </div>
        <div className="col-4">
          <VideoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
