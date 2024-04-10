import { tasks } from './tasks/tasks.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(tasks)

  app.configure(user)

  // All services will be registered here
}
