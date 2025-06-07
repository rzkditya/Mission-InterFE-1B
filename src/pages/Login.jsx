import React from 'react'
import Form from '@/components/organisms/Form'
import Layout from '../layouts/FormLayout'

export const Login = () => {
  return (
    <>
      <div>
        <Layout>
            <Form template='login'/>
        </Layout>
      </div>
    </>
  )
}

export default Login
