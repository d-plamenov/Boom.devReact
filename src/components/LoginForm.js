import {Button, Card, Form, Input} from './form'
const LoginForm = () => {
    return (
        <Card>
            <Form>
                <Input type="email"/>
                <Input type="password"/>
                <Button>Login</Button>
            </Form>
        </Card>
    )
}

export default LoginForm;