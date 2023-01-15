import React from "react"

interface IUser {
  name: string
  id: string
}

export const TopScorerListItem = ({ topscorers }: { topscorers: IUser[] }) => {
  console.log("topscorers", topscorers)
  return <div>TopScorerListItem</div>
}
