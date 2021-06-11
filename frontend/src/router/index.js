import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Room from '@/views/Room'
import Start from '@/views/Start'

import JoinRoomForm from '@/components/JoinRoomForm'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'Start',
    children: [
      {
        path: 'join',
        component: JoinRoomForm
      }
    ],
    component: Start
  },
  {
    path: '/room/:roomId?',
    name: 'Room',
    component: Room
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
