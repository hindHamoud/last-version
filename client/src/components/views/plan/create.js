import React, { Component } from 'react'
import { connect } from "react-redux";
import './table.css'
import plan1 from '../../photos/plan.png'
import '../report/layout.css'
import img from '../../photos/background.jpg'
import { Select, Button,Input,Row,Col,Form,Modal,message,Steps,InputNumber} from 'antd';
import {submitPlan} from './submit'
import {PlusCircleOutlined} from '@ant-design/icons'


export class plan extends Component {
  constructor(props) {
    super(props)
    this.state = {
     fire:[0,0],electricity:[0,0],attack:[0,0],
     fireRisk:0,electricityRisk:0,attackRisk:0,
    internalContact:[], externalContact:[],humanResources:[],equipment1:[],system:[],
    current:0,
name:'',email:'',role:'',mobile:'',
name2:'',email2:'',role2:'',mobile2:'',
name3:'',email3:'',role3:'',mobile3:'',
i:0, ii:0,iii:0,iiii:0,iiiii:0,
teamEmail:'',teamMobile:'',
equipment:'',minimum:'',quantity:'',backUp:'',
app:'',type:'',rto:'',rpo:'',backUp1:''}}
showModal = () => {this.setState({ visible: true, });};
handleCancel = () => {this.setState({ visible: false });};
  next() {
    if(this.state.current==0 ){
      if(this.state.teamMobile==''||this.state.teamEmail=='')
      message.error('please complete all field')
      else{this.setState({ current :this.state.current + 1});}
    }else if(this.state.current==1 ){
      if(this.state.fireRisk==0||this.state.electricityRisk==0||this.state.attackRisk==0)
      message.error('please complete all field')
      else{this.setState({ current :this.state.current + 1})}
    }else {this.setState({ current :this.state.current + 1})}}

    onChangeApp = e => {this.setState({ app: e.target.value});};
      onChangeType = e => {this.setState({ type: e.target.value});};
      onChangeRto = e => {this.setState({ rto: e});};
      onChangeRpo = e => {this.setState({ rpo: e});};
      onChangeBackUp1 = e => {this.setState({ backUp1: e});};
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });}

    onChangefireI=(value)=>{this.state.fire[1]=value;}
    onChangefireP=(value)=>{ this.state.fire[0]=value;}

    onChangeElectricityI=(value)=>{this.state.electricity[1]=value;}
    onChangeElectricityP=(value)=>{this.state.electricity[0]=value ;}

    onChangeAttackI=(value)=>{this.state.attack[1]=value}
    onChangeAttackP=(value)=>{this.state.attack[0]=value }

      onChangeEquipment = e => {this.setState({equipment: e.target.value});};
      onChangeMinimum = e => {this.setState({minimum: e.target.value});};
      onChangeQuantity = e => {this.setState({quantity: e.target.value});};
      onChangeBackUp = e => {this.setState({backUp: e});};

    onChangeName = e => {this.setState({ name: e.target.value});};
    onChangeRole = e => {this.setState({ role: e.target.value});};
    onChangeEmail = e => {this.setState({ email: e.target.value});};
    onChangeMobile = e => {this.setState({ mobile: e.target.value});};

    onChangeTeamEmail = e => {this.setState({ teamEmail: e.target.value});};
    onChangeTeamMobile = e => {this.setState({ teamMobile: e.target.value});};

    onChangeName2 = e => {this.setState({ name2: e.target.value});};
    onChangeRole2 = e => {this.setState({ role2: e.target.value});};
    onChangeEmail2 = e => {this.setState({ email2: e.target.value});};
    onChangeMobile2 = e => {this.setState({ mobile2: e.target.value});};

    onChangeName3 = e => {this.setState({ name3: e.target.value});};
    onChangeRole3 = e => {this.setState({ role3: e.target.value});};
    onChangeEmail3 = e => {this.setState({ email3: e.target.value});};
    onChangeMobile3 = e => {this.setState({ mobile3: e.target.value});};

    onClickInternl=()=>{
      if(this.state.name==='' || this.state.role==='' || this.state.email==='' || this.state.mobile===''){
        message.error('please complete all field')
      }else{
      const a=[this.state.name,this.state.role,this.state.email,this.state.mobile]
      this.state.internalContact[this.state.i]=a
      this.state.i+=1
      message.success('Add success')  
      
    console.log(this.state.internalContact)}  }

      onClickExternl=()=>{
      if(this.state.name2=='' || this.state.role2=='' || this.state.email2=='' || this.state.mobile2==''){
        message.error('please complete all field')
      }else{
      const a=[this.state.name2,this.state.role2,this.state.email2,this.state.mobile2]
      this.state.externalContact[this.state.ii]=a
      this.state.ii+=1
      message.success('Add success') ;
      } }

    onClickHuman=()=>{
      if(this.state.name3=='' || this.state.role3=='' || this.state.email3=='' || this.state.mobile3==''){
        message.error('please complete all field')
      }else{
      const a=[this.state.name3,this.state.role3,this.state.email3,this.state.mobile3]
      this.state.humanResources[this.state.iii]=a
      this.state.iii+=1
      message.success('Add success') ;} }

      onClickEquipment=()=>{
        if(this.state.equipment=='' || this.state.minimum=='' || this.state.quantity=='' || this.state.backUp==''){
          message.error('please complete all field')
        }else{
        const a=[this.state.equipment,this.state.minimum,this.state.quantity,this.state.backUp]
        this.state.equipment1[this.state.iiii]=a
        this.state.iiii+=1
        message.success('Add success') ;} }
        onClickSystem=()=>{
          if(this.state.app=='' || this.state.type=='' || this.state.rpo=='' || this.state.rto=='' ||this.state.backUp1==''){
            message.error('please complete all field')
          }else{
          const a=[this.state.app,this.state.type,this.state.rpo,this.state.rto,this.state.backUp1]
          this.state.system[this.state.iiiii]=a
          this.state.iiiii+=1
          message.success('Add success') ;} }


    onClick=()=>{
      if(this.state.fire==null || this.state.electricity==null || this.state.attack==null){
        message.error('please complete all field')
      }else{
      const f=this.state.fire[0]+this.state.fire[1]; this.setState({ fireRisk: f});
      const e=this.state.electricity[0]+this.state.electricity[1]; this.setState({ electricityRisk: e});
      const a=this.state.attack[0]+this.state.attack[1]; this.setState({ attackRisk: a});}
      }
      


    onSubmit=(e)=> {      
      e.preventDefault()
      const newPlan = {
        admin:this.props.user.userData._id,
        fireIncident: this.state.fire,
        electricityIncident: this.state.electricity,
        attackIncident: this.state.attack,
        internalContact: this.state.internalContact,
        externalContact: this.state.externalContact, 
      team:[this.state.teamEmail,this.state.teamMobile],
      human: this.state.humanResources,
      equipmemt: this.state.equipment1,
      system: this.state.system,}
      submitPlan(newPlan )
      this.setState({visible: false,});
            window.location.reload(true);}


      


    render() {
      const { Step } = Steps;
      const { Option } = Select;
      const { current } = this.state;
      

      const steps = [
        {title: '',
          content: <div>
            <h4>INCIDENT TEAM CONTACT INFORMATION</h4>
            
      <Form.Item  label="Email">
        <Input placeholder="" style={{ width: 220 }}
        onChange={this.onChangeTeamEmail}
        value={this.state.teamEmail}/>
      </Form.Item>
      <Form.Item  label="Mobile Number">
      <Input placeholder="" style={{ width: 220 }}
        onChange={this.onChangeTeamMobile}
        value={this.state.teamMobile}/></Form.Item>

          </div>, },



        {title: '',
          content: <div style={{marginBottom:'50px'}}>
          <h5>(1 for Low ,2 for Medium, 3 for High)</h5><table className="table">
        <tr className="td">
          <th className="th" width={200}> Threat </th>
          <th className="th" width={140}> Probability <br/>(1,2,3) </th>
          <th className="th" width={140}> Impact<br/>(1,2,3) </th>
          <th className="th" width={120} > Risk Rating <br/>
          <Button onClick={this.onClick}>Calculate</Button> </th>
          <th className="th" width={400}> Mitigation </th></tr>
        <tr><td className="td">External or Internal Fire</td>
          <td className="td">
            <Select defaultValue="Select" onChange={this.onChangefireP}>
  <Option value={1}>1</Option> 
  <Option value={2}>2</Option> 
  <Option value={3}>3</Option>
  </Select></td>
          <td className="td">
            <Select  defaultValue="Select" onChange={this.onChangefireI}>
  <Option value={1}>1</Option>
    <Option value={2}>2</Option> 
    <Option value={3}>3</Option>
    </Select></td>
          <td className="td" >{this.state.fireRisk}</td>
          <td className="td"> 1\Evacuation Plan   2\Alarm System   3\Fire extinguishers</td></tr>
        <tr><td className="td">Electricity Interruption</td>
          <td className="td">
            <Select  defaultValue="Select" onChange={this.onChangeElectricityP}>
  <Option value={1}>1</Option> 
   <Option value={2}>2</Option>  
    <Option value={3}>3</Option>
    </Select></td>
          <td className="td">
            <Select defaultValue="Select"  onChange={this.onChangeElectricityI}>
  <Option value={1}>1</Option>
   <Option value={2}>2</Option> 
   <Option value={3}>3</Option>
   </Select></td>
          <td className="td">{this.state.electricityRisk}</td>
          <td className="td">UPS uninterruptible power supply</td></tr>
        <tr><td className="td">Computer attack</td>
          <td className="td">
            <Select defaultValue="Select"  onChange={this.onChangeAttackP}>
  <Option value={1}>1</Option>
   <Option value={2}>2</Option>
    <Option value={3}>3</Option></Select></td>
          <td className="td">
            <Select defaultValue="Select"  onChange={this.onChangeAttackI}>
  <Option value={1}>1</Option> 
  <Option value={2}>2</Option> 
  <Option value={3}>3</Option>
  </Select></td>
          <td className="td">{this.state.attackRisk}</td>
          <td className="td">Antivirus, Firewalls, Penetration , Testing and vulnerbility assessment</td></tr>
      </table></div>,},
{title: '',
content: <div><div style={{fontSize:'20px'}}>HUMAN RESOURCES:</div>
<br/>
<Form >
<Row>

<Col span={6}>
<Form.Item  label="Name">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeName3}
value={this.state.name3}/>
</Form.Item>
</Col>

<Col span={6}>
<Form.Item  label="Role">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeRole3}
value={this.state.role3}/>
</Form.Item>
</Col>

<Col span={6}>
<Form.Item  label="Email">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeEmail3}
value={this.state.email3}/>
</Form.Item>
</Col>
<Col span={6}>
<Form.Item  label="Mobile">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeMobile3}
value={this.state.mobile3}/>

<PlusCircleOutlined  style={{width:'30px', height:'30px'}} onClick={this.onClickHuman} />

</Form.Item> 
</Col>

</Row></Form></div>, },
{title: '',
content: <div><div style={{fontSize:'20px'}}>EQUIPMENT:</div>
<br/>
<Form >
<Row>

<Col span={6}>
<Form.Item  label="Equipmint">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeEquipment}
value={this.state.equipment}/>
</Form.Item>
</Col>

<Col span={6}>
<Form.Item  label="Vendor">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeMinimum}
value={this.state.minimum}/>
</Form.Item>
</Col>

<Col span={6}>
<Form.Item  label="Serial Number">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeQuantity}
value={this.state.quantity}/>
</Form.Item>
</Col>
<Col span={6}>
<Form.Item  label="Backed Up">
<Select  style={{ width: 90 }} defaultValue="Select"  onChange={this.onChangeBackUp}>
  <Option value='Yes'>Yes</Option> 
  <Option value='No'>No</Option> 
  </Select>

<PlusCircleOutlined   onClick={this.onClickEquipment} />

</Form.Item> 
</Col>

</Row></Form></div>, },
{title: '',
content: <div><div style={{fontSize:'20px'}}>IT SYSTEMS:</div>
<br/>
<div>Recovery Time Objective (RTO) defines the maximum time required to recovery the IT system.</div>
<div>Recovery Point Objective (RPO) defines The amount of data loss that the organization can tolerate.</div>
<Form >
<Row>

<Col span={6}>
<Form.Item  label="System/Application">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeApp}
value={this.state.app}/>
</Form.Item>
</Col>

<Col span={6}>
<Form.Item  label="Type">
<Input placeholder="" style={{ width: 190 }}
onChange={this.onChangeType}
value={this.state.type}/>
</Form.Item>
</Col>

<Col span={3}>
<Form.Item  label="RTO">
<InputNumber min={1} max={24} defaultValue={3} onChange={this.onChangeRto} />
</Form.Item>
</Col>
<Col span={3}>
<Form.Item  label="RPO">
<InputNumber min={1} max={24} defaultValue={3} onChange={this.onChangeRpo} />
</Form.Item>
</Col>
<Col span={6}>
<Form.Item  label="Backed Up">
<Select style={{ width: 90 }} defaultValue="Select"  onChange={this.onChangeBackUp1}>
  <Option value='Yes'>Yes</Option> 
  <Option value='No'>No</Option> 
  </Select>

<PlusCircleOutlined  style={{width:'30px', height:'30px'}} onClick={this.onClickSystem} />

</Form.Item> 
</Col>

</Row></Form></div>, },




        {title: '',
          content: <div><div style={{fontSize:'20px'}}>INTERNAL CONTACTS:</div>
          <br/>
          <Form >
          <Row>
 
          <Col span={6}>
      <Form.Item  label="Name">
        <Input placeholder="" style={{ width: 190 }}
        onChange={this.onChangeName}
        value={this.state.name}/>
      </Form.Item>
      </Col>
  
      <Col span={6}>
      <Form.Item  label="Role">
      <Input placeholder="" style={{ width: 190 }}
        onChange={this.onChangeRole}
        value={this.state.role}/>
        </Form.Item>
      </Col>
  
  <Col span={6}>
  <Form.Item  label="Email">
  <Input placeholder="" style={{ width: 190 }}
        onChange={this.onChangeEmail}
        value={this.state.email}/>
        </Form.Item>
      </Col>
      <Col span={6}>
  <Form.Item  label="Mobile">
  <Input placeholder="" style={{ width: 190 }}
        onChange={this.onChangeMobile}
        value={this.state.mobile}/>
       
        <PlusCircleOutlined  style={{width:'30px', height:'30px'}} onClick={this.onClickInternl} />

        </Form.Item> 
      </Col>
  
      </Row></Form></div>, }, 



      {title: '',
      content:<div><div style={{fontSize:'20px'}}>EXTERNAL CONTACTS</div>
      <br/>
      <Form ref={(el) => this.myFormRef = el}>
      <Row >
      <Col span={6}>
  <Form.Item  label="Name">
    <Input placeholder="" style={{ width: 190 }}
    onChange={this.onChangeName2}
    value={this.state.name2}/>
  </Form.Item>
  </Col>

  <Col span={6}>
  <Form.Item  label="Role">
  <Input placeholder="" style={{ width: 190 }}
    onChange={this.onChangeRole2}
    value={this.state.role2}/>
    </Form.Item>
  </Col>

<Col span={6}>
<Form.Item  label="Email">
<Input placeholder="" style={{ width: 190 }}
    onChange={this.onChangeEmail2}
    value={this.state.email2}/>
    </Form.Item>
  </Col>
  <Col span={6}>
<Form.Item  label="Mobile">
<Input placeholder="" style={{ width: 190 }}
    onChange={this.onChangeMobile2}
    value={this.state.mobile2}/>
    <PlusCircleOutlined  onClick={this.onClickExternl} />
    </Form.Item>
  </Col>
  
  </Row>
  </Form ></div>
    }, ];

      
    return( 
        
      <div style={{fontFamily:'apple',marginTop:'200px'}}>
      <img src={img} className="background" alt="background"/>
<div className="text1"  >
<Row>

<Col span={15}>
<img src={plan1} style={{marginTop:'120px'}} width={700} height={300}/></Col>
<Col span={5} style={{marginTop:'260px'}}><Button type="primary" onClick={this.showModal}>  Create Plan </Button>
    <Modal width={1000}
      title="Plan"
      visible={this.state.visible}
      onCancel={this.handleCancel}
      footer={null} >
    <div>
<Steps current={current}>
 {steps.map(item => (
   <Step key={item.title} title={item.title} />
 ))}
</Steps>
<div className="steps-content">{steps[current].content}</div>
<div className="steps-action">
 {current < steps.length - 1 && (
   <Button type="primary" onClick={() => this.next()}>
     Next
   </Button>
 )}
 {current === steps.length - 1 && (
   <Button type="primary" onClick={this.onSubmit}>
     save plan
   </Button>
 )}
 {current > 0 && (
   <Button style={{ margin: 8 }} onClick={() => this.prev()}>
     Previous
   </Button>
 )}
</div>
</div>
</Modal></Col>
<Col span={4}/>

</Row>
</div>
   
  </div>)}}
  
    const mapStateToProps = state => {return {user: state.user,} }
  export default connect(mapStateToProps)(plan);