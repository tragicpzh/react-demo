import React, {Component} from "react";
import {Col, Form, Input, Row, Tooltip, Icon, AutoComplete, Checkbox, Button} from "antd";
const AutoCompleteOption=AutoComplete.Option;
class RegistrationForm extends Component{
    state={
        confirmDirty:false,
        autoCompleteResult:[]
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                console.log("Recived value of form:",values);
            }
        })
    }
    handleConfirmBlur=e=>{
        const {value}=e.target;
        this.setState({
            confirmDirty:this.state.confirmDirty||!!value
        });
    }
    validateToNextPassword=(rule,value,callback)=>{
        const {form}=this.props;
        if(value&&this.state.confirmDirty){
            form.validateFields(['confirm'],{force:true});
        }
        callback();
    }
    compareToFirstPassword=(rule,value,callback)=>{
        const {form}=this.props;
        if(value&&value!==form.getFieldValue("password")){
            callback("密码不匹配");
        }
        else {
            callback();
        }
    }
    handleWebsiteChange=value=>{
        let autoCompleteResult;
        if(!value){
            autoCompleteResult=[];
        }
        else{
            autoCompleteResult=['.com','.org','.net'].map(
                domain=>`${value}${domain}`
            )
        }
        this.setState({autoCompleteResult});
    }
   render() {
       const {getFieldDecorator}=this.props.form;
       const{autoCompleteResult}=this.state;
       const FormItemLayout={
           labelCol:{
               span:6
           },
           wrapperCol:{
               span:14
           }
       }
       const tailFormItemLayout={
            wrapperCol:{
                span:8,
                offset:6
            }
       }
       const websiteOptions=autoCompleteResult.map(website=>(
            <AutoCompleteOption
                key={website}
            >
                {website}
            </AutoCompleteOption>
       ))
       return (
                   <Form {...FormItemLayout} onSubmit={this.handleSubmit}>
                       <Form.Item label="E-mail">
                           {
                               getFieldDecorator('email',{
                                rules:[
                                    {
                                        type:'email',
                                        message:'邮箱地址有误'
                                    },
                                    {
                                        required:true,
                                        message: '请输入邮箱'
                                    }
                                ]
                             })(<Input/>)
                           }
                       </Form.Item>
                       <Form.Item label="Password" hasFeedback>
                           {
                               getFieldDecorator('password', {
                                   rules: [
                                       {
                                            required:true,
                                           message:'请输入密码'
                                       },
                                       {
                                           validator:this.validateToNextPassword,
                                       }
                                   ]
                               })(<Input.Password/>)
                           }
                       </Form.Item>
                       <Form.Item label="Confirm Password">
                           {
                               getFieldDecorator('confirm',{
                                   rules:[
                                       {
                                           required:true,
                                           message:'请输入密码'
                                       },
                                       {
                                           validator:this.compareToFirstPassword
                                       }
                                   ]
                               })(<Input.Password onBlur={this.handleConfirmBlur}/>)
                           }
                       </Form.Item>
                       <Form.Item label={
                           <span>
                               Nickname;
                               <Tooltip title="what do you want others to call you?">
                                    <Icon type="question-circle-o"></Icon>
                               </Tooltip>
                           </span>
                       }>{
                            getFieldDecorator('nickname',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入昵称',
                                            whitespace:true
                                        },
                                    ]
                                }
                            )(<Input/>)
                       }
                       </Form.Item>
                       <Form.Item label="Website">
                           {
                               getFieldDecorator('website',{
                                   rules:[
                                       {
                                           required:true,
                                           message:"请输入网址"
                                       }
                                   ]
                               })(
                                  <AutoComplete
                                    dataSource={websiteOptions}
                                    onChange={this.handleWebsiteChange}
                                    placeholder='website'
                                  >
                                      <Input/>
                                  </AutoComplete>
                               )
                           }
                       </Form.Item>
                       <Form.Item {...tailFormItemLayout}>
                           {
                                getFieldDecorator('agreement',{
                                    valuePropName:'checked',
                                })(
                                    <Checkbox>
                                        I have read the agreement
                                    </Checkbox>
                                )
                           }
                       </Form.Item>
                       <Form.Item {...tailFormItemLayout}>
                           <Button type="primary" htmlType="submit">
                               Register
                           </Button>
                       </Form.Item>
                   </Form>
       );
   }
}
const Item3=Form.create({name:'register'})(RegistrationForm);
export default Item3;