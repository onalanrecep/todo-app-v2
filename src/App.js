import React , { Component } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      ifClickEvent: 0,
      ifClickGroup: 0,
      groupNameInput: '',
      eventHeader: '',
      eventContent: '',
      eventTags: '2',
      eventDate: '',
      eventGroupName: 'Okul',
      // todo Buradaki Default deger dinamiklesecek
      groups: [
        {
          groupId: 1,
          groupName: 'Okul',
          cards: [
            {
              header: 'Odev',
              text: 'Okul Odevlerini Yapmayi iniutma',
              imgSrc: '',
              date: '29-06-2020',
              tags: 1,
            },
            {
              header: 'Proje Teslimi',
              text: 'Oyun Programlama odevi teslim edilecek',
              imgSrc: '',
              date: '30-06-2020',
              tags: 1,
            },
          ],
        },
        {
          groupId: 2,
          groupName: 'Is',
          cards: [
            {
              header: 'Scrum Bulusmasi',
              text: 'Okul Odevlerini Yapmayi Unutma',
              imgSrc: '',
              date: '29-06-2020',
              tag: 2,
            },
          ],
        },
        {
          groupId: 3,
          groupName: 'Haftasonu',
          cards: [
            {
              header: 'Piknik',
              text:
                'aOkul arkadaslari ile beraber piknige gidilecek. Haftasonuna kadar isleri hallet',
              imgSrc: '',
              date: '01-07-2020',
              tag: 3,
            },
          ],
        },
        {
          groupId: 8,
          groupName: 'E-spor',
          cards: [
          
          ],
        },
      ],
    };
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  showForm(e){
    console.log(e.target.name);
    const { name } = e.target;
    const { ifClickEvent, ifClickGroup } = this.state;
    let val;
    if (name === 'ifClickEvent') {
      val = ifClickEvent;
    } else if (name === 'ifClickGroup') {
      val = ifClickGroup;
    }
    this.setState({ [name]: !val });
  }
  handleChange(e){
    const { name, value } = e.target
      console.log('event name',e.target.value);
      this.setState({[name]:value});
  }
  render(){
    const { 
      groups,
      ifClickEvent,
      ifClickGroup,
      eventHeader,
      eventContent,
      eventDate,
      eventGroupName,
      eventTags,
      groupNameInput,
     } = this.state;
    return (
      <>
        <Navbar showForm={this.showForm} />
        <Main 
        handleChange={this.handleChange}
        groups={groups}
        eventContent={eventContent}
        eventDate={eventDate}
        eventGroupName={eventGroupName}
        eventHeader={eventHeader}
        eventTags={eventTags}
        groupNameInput={groupNameInput}
        ifClickEvent={ifClickEvent}
        ifClickGroup={ifClickGroup}
         />
      </>
    ) 
      
    
  }
  
}

export default App;
