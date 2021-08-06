import * as yup from 'yup'

export const passwordSchema = yup.object().shape({
  password: yup.string().min(6).max(12).required(),
  confirmPassword: yup.string()
    .test('confirmPassword', 'Password must match', function (value) {
      return this.parent.password === value
    })
})