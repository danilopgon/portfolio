import { render, screen } from '@testing-library/react'
import SkillsSection from './SkillsSection'

describe('SkillsSection', () => {
  it('renders the SkillsSection section', () => {
    render(<SkillsSection />)
    const SkillsSectionElements = screen.queryByRole('section')
    expect(SkillsSectionElements).toBeInTheDocument()
  })
  it('renders the SkillsSection section with a h2 Title', () => {
    render(<SkillsSection />)
    const title = screen.queryByText(/Lo que hago/i)
    expect(title).toBeInTheDocument()
  })
})
