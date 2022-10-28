import type { NextPage } from "next"
import { useState } from "react"
import { ContainerMachines } from "../components/ContainerMachines"
import { Filter } from "../components/Filter"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"
import { PageLayout } from "../components/PageLayout"
import { useMachines } from "../hooks/useMachines"

const Home: NextPage = () => {
  const { machines } = useMachines()
  const [machinesInView, setMachinesInView] = useState<Array<any>>([])

  return (
    <PageLayout title="HTB Machines - Search engine">
      <Header totalMachines={machines} />
      {machines.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Filter callbackShowMachines={setMachinesInView} />
          <ContainerMachines machines={machinesInView} />
        </>
      )}
      <Footer />
    </PageLayout>
  )
}

export default Home
