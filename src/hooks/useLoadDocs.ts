import { useEffect, useState } from 'react'
import TechnicalDebt from '../docs/en/00-TechnicalDebt.md'
import VariableNames from '../docs/en/01-VariableNames.md'
import NamesTypes from '../docs/en/02-NamesTypes.md'
import Functions from '../docs/en/03-Functions.md'

const documents = [
  TechnicalDebt,
  VariableNames,
  NamesTypes,
  Functions
]

const useLoadDocs = () => {
  const [docs, setDocs] = useState<string[]>([])

  const handleFetch = async (file: string) => {
    const response = await fetch(file)
    const data = await response.text()
    setDocs((prev) => [...prev, data])
  }

  useEffect(() => {
    documents.forEach((doc) => handleFetch(doc))
  }, [])

  return {
    docs
  }
}

export default useLoadDocs
