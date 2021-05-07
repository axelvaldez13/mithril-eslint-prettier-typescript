import m from 'mithril'

interface Attrs {
  title: string
  subtitle: string
}

const dataContent: Attrs = {
  title: 'Bienvenidos a Mithril con TypeScript',
  subtitle:
    'Este proyecto esta realizado con ESLint, Prettier y Tailwind para Circular'
}

const Home: m.Component = {
  view: () =>
    m(
      '.bg-gray-50.h-full.flex.justify-center.items-center.text-center',
      m('.max-w-2xl.mx-auto.py-12.px-4.sm:px-6.lg:py-16.lg:px-8', [
        m(
          'h1.text-3xl.font-extrabold.tracking-tight.text-gray-900.sm:text-4xl',
          [m('span.block', dataContent.title)]
        ),
        m(
          'h3.text-3xl.block.text-indigo-600.font-extrabold.mt-3',
          dataContent.subtitle
        )
      ])
    )
}

export default Home
