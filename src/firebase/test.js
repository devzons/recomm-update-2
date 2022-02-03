import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firestore = firebase.firestore()

// equibalent next two
firestore.collection('users').doc('sT1DxgRXpgEEn29AjuDb').collection('cartItems').doc('2bI3si6ifaoQsuSM6XJJ')

firestore.doc('/users/sT1DxgRXpgEEn29AjuDb/cartItems/2bI3si6ifaoQsuSM6XJJ')
firestore.collection('/users/sT1DxgRXpgEEn29AjuDb/cartItems')