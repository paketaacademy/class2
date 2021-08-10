import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).required().matches(/'[aA-zZ]+$'/, 'Name only can contain letters'),
  lastName: yup.string().min(3).required().matches(/'[aA-zZ]+$'/, 'Last name only can contain letters'),
  email: yup.string().min(10).max(64).required().email().matches(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/,
    'Invalid email'
  ),
  confirmEmail: yup.string()
    .test('confirmEmail', 'Email must match', function (value) {
      return this.parent.email === value
    }),
  password: yup.string().min(6).max(12).required(),
  confirmPassword: yup.string()
    .test('confirmPassword', 'Password must match', function (value) {
      return this.parent.password === value
    })
})