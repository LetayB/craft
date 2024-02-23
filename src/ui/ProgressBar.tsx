import * as React from "react"
import { useEffect } from "react"
import styled from "styled-components"

export interface IProgressBarProps {
  score: number
  label?: string
  progressWidth?: number
  hideText?: boolean
  darkTheme?: boolean
  progressColor?: "red" | "green" | "blue" | "purple"
  primaryColor?: string
  secondaryColor?: string
  disableGlow?: boolean
  className?: string
}

const ProgressBarFancyContainer = styled.div`
  /* width: progressWidth, */
  width: 100%;
`

const BarGaugeContainer = styled.div`
  display: flex;
  align-items: center;
  flexwrap: "wrap";
`

const BarGauge = styled.div`
  /* width: progressWidth, */
  width: 100%;
  margin: "0px 10px";
`

const ProgressBarDiv = styled.div`
  float: left;
  width: 100%;
  display: flex;
  position: relative;
`

const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(90deg, #f5f5f5, #c4c4c4);
  border-radius: 10px 0px 10px 0px;
  margin-top: 3px;
  height: 8px;
`

const ProgressBar: React.FC<IProgressBarProps> = (props) => {
  const [progressAnimation, setProgressAnimation] =
    React.useState<boolean>(false)

  const {
    score,
    progressWidth,
    className,
    primaryColor,
    secondaryColor,
    progressColor = primaryColor || secondaryColor ? "" : "red",
    label,
    hideText,
    darkTheme,
    disableGlow,
  } = props

  useEffect(() => {
    setProgressAnimation(true)
  })

  const renderProgressFiller = (glow: boolean) => (
    <>
      <div
        className={`progressFill ${
          !(primaryColor || secondaryColor) && progressColor
        } ${glow && "glowingEffect"}`}
        style={{
          width: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          background: `linear-gradient( to right, ${primaryColor}, ${secondaryColor})`,
        }}
      />
      <div className={`${!(primaryColor || secondaryColor) && progressColor}`}>
        <div
          className={`particlesContainer`}
          style={{
            left: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
          }}
        >
          <div className={`particles`} />
          <div
            className={`smallParticles smallParticles4`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles3`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`bigParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`particles particles2`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles5`}
            style={{ background: secondaryColor }}
          />
          <div
            className={`smallParticles smallParticles6`}
            style={{ background: secondaryColor }}
          />
        </div>
      </div>
    </>
  )

  return (
    <ProgressBarFancyContainer>
      {/* {!hideText && (
        <div className={`labelScoreContainer ${darkTheme && `labelDarkTheme`}`}>
          <div className={`label`}>{label}</div>
          <div className={`number`}>{score}%</div>
        </div>
      )} */}
      <BarGaugeContainer>
        <BarGauge>
          <ProgressBarDiv>
            <ProgressTrack />
            {renderProgressFiller(false)}
            {!disableGlow && renderProgressFiller(true)}
          </ProgressBarDiv>
        </BarGauge>
      </BarGaugeContainer>
    </ProgressBarFancyContainer>
  )
}

export default ProgressBar
